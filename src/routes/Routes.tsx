import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { nonAuthenticatedUser } from '../shared/data/nonAuthenticatedUser'
import { UserContext } from '../shared/providers/UserProvider'
import { NewsLetterSubscriptionView } from 'view/auth/newslettersubscriptionview/NewsLetterSubscriptionView'
import { RetrieveLostPasswordView } from 'view/retrieve-lost-password/RetrieveLostPasswordView'
import { PersonalInformationView } from 'view/auth/personalinformationview/PersonalInformationView'
import { UserInformationView } from 'view/auth/userinformationview/UserInformationView'
import { PurchaseHistoryView } from 'view/auth/purchasehistoryview/PurchaseHistoryView'
import { ProductDetailView } from '../view/productdetail/ProductDetailView'
import { validateToken } from 'functions/validateToken'
import { CheckoutView } from '../view/checkout/CheckoutView'
import { EmployeeView } from '../view/employee/EmployeeView'
import { InitialView } from '../view/initial/InitialView'
import { ContactView } from '../view/contact/ContactView'
import { ProfileView } from 'view/auth/profileview/ProfileView'
import { SignInView } from '../view/signin/SignInView'
import { AdminView } from '../view/admin/AdminView'
import { OrderView } from '../view/order/OrderView'
import { ShopView } from '../view/shop/ShopView'
import { Error404View } from '../view/error/Error404View'
import { Footer } from '../components/Footer'
import CodicAPIService from '../shared/api/services/CodicAPIService'
import LocalStorage from '../shared/cache/LocalStorage'
import RoutingPath from './RoutingPath'
import AdminPath from './AdminPath'
import AuthPath from './AuthPath'

export const Routes = (props: { children: React.ReactChild[] }) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated: React.FC) => {
		return authenticatedUser.authenticated ? InitialView : navigateToViewIfAuthenticated
	}

	const authenticationRequired = (navigateToViewifAuthenticated: React.FC) => {
		return authenticatedUser.authenticated ? navigateToViewifAuthenticated : SignInView
	}

	const parseJWT = async () => {
		const token = localStorage.getItem(LocalStorage.authenticationToken)
		if (!token) { return }
		const base64Url = token.split('.')[1]
		const base64 = base64Url.replace('-', '+').replace('_', '/')
		const JWT = JSON.parse(window.atob(base64))

		if (validateToken(JWT.exp)) {
			// TODO: There has to be a better way to recieve the username? You cannot just do a getUserWithID like this?
			// TODO: Sign in with a new token instead of recieving the user with getUserWithID?
			try {
				const { data } = await CodicAPIService.getUserWithID(JWT.id)
				// TODO: recieve the authenticatid variable from server so that only data can be set
				setAuthenticatedUser({ ...data, authenticated: true })
			} catch (error) {
				console.log(error)
			}
		} else {
			setAuthenticatedUser(nonAuthenticatedUser)
			localStorage.removeItem(LocalStorage.authenticationToken)
		}
	}

	useEffect(() => {
		parseJWT()
	}, [])

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				{/* INITIAL PATH */}
				<Route exact path={RoutingPath.initialView} component={InitialView} />
				{/* REGULAR PATHS */}
				<Route exact path={RoutingPath.shopView} component={ShopView} />
				<Route exact path={RoutingPath.orderFinishedView} component={OrderView} />
				<Route exact path={RoutingPath.contactView} component={ContactView} />
				<Route exact path={RoutingPath.employeeView} component={EmployeeView} />
				<Route exact path={RoutingPath.checkoutView} component={CheckoutView} />
				<Route exact path={RoutingPath.productDetailsView()} component={ProductDetailView} />
				<Route exact path={RoutingPath.retrieveLostPasswordView} component={RetrieveLostPasswordView} />
				<Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
				<Route exact path={RoutingPath.error404View} component={Error404View} />
				<Route component={Error404View} />        {/* Default View */}
				{/* ADMIN PATHS */}
				<Route exact path={AdminPath.adminView} component={AdminView} />
				{/* AUTHENTICATED PATHS */}
				<>
					<Route path={AuthPath.profileView} component={authenticationRequired(ProfileView)} />
					<Route exact path={AuthPath.personalInformationView} component={authenticationRequired(PersonalInformationView)} />
					<Route exact path={AuthPath.userInformationView} component={authenticationRequired(UserInformationView)} />
					<Route exact path={AuthPath.purchaseHistoryView} component={authenticationRequired(PurchaseHistoryView)} />
					<Route exact path={AuthPath.newsLetterSubscriptionView} component={authenticationRequired(NewsLetterSubscriptionView)} />
				</>
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}
