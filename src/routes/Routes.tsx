import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { UserContext } from '../shared/providers/UserProvider'
import { NewsLetterSubscriptionView } from 'view/auth/newslettersubscriptionview/NewsLetterSubscriptionView'
import { RetrieveLostPasswordView } from 'view/retrieve-lost-password/RetrieveLostPasswordView'
import { PersonalInformationView } from 'view/auth/personalinformationview/PersonalInformationView'
import { UserInformationView } from 'view/auth/userinformationview/UserInformationView'
import { PurchaseHistoryView } from 'view/auth/purchasehistoryview/PurchaseHistoryView'
import { ProductDetailView } from '../view/productdetail/ProductDetailView'
import { useAuthentication } from 'hooks/useAuthentication'
import { CheckoutView } from '../view/checkout/CheckoutView'
import { GdprInfoView } from '../view/information/GdprInfoView'
import { CookieInformationView } from 'view/cookieinformation/CookieInformationView'
import { EmployeeView } from '../view/employee/EmployeeView'
import { Error404View } from '../view/error404/Error404View'
import { InitialView } from '../view/initial/InitialView'
import { ContactView } from '../view/contact/ContactView'
import { ProfileView } from 'view/auth/profileview/ProfileView'
import { SignInView } from '../view/signin/SignInView'
import { CareerView } from 'view/career/CareerView'
import { AdminView } from '../view/admin/AdminView'
import { OrderView } from '../view/order/OrderView'
import { ShopView } from '../view/shop/ShopView'
import { Footer } from '../components/Footer'
import RoutingPath from './RoutingPath'
import AdminPath from './AdminPath'
import AuthPath from './AuthPath'

export const Routes = (props: { children: React.ReactChild[] }) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const { validateUser } = useAuthentication()

	const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated: React.FC) => {
		return authenticatedUser.authenticated ? InitialView : navigateToViewIfAuthenticated
	}

	const authenticationRequired = (navigateToViewifAuthenticated: React.FC) => {
		return authenticatedUser.authenticated ? navigateToViewifAuthenticated : SignInView
	}

	useEffect(() => {
		validateUser()
	}, [])

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				{/* REGULAR PATHS */}
				<Route exact path={RoutingPath.initialView} component={InitialView} />
				<Route exact path={RoutingPath.shopView} component={ShopView} />
				<Route exact path={RoutingPath.orderFinishedView} component={OrderView} />
				<Route exact path={RoutingPath.contactView} component={ContactView} />
				<Route exact path={RoutingPath.employeeView} component={EmployeeView} />
				<Route exact path={RoutingPath.checkoutView} component={CheckoutView} />
				<Route exact path={RoutingPath.productDetailsView()} component={ProductDetailView} />
				<Route exact path={RoutingPath.retrieveLostPasswordView} component={RetrieveLostPasswordView} />
				<Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
				<Route exact path={RoutingPath.careerView} component={CareerView} />
				<Route exact path={RoutingPath.error404View} component={Error404View} />
				<Route exact path={RoutingPath.gdprInfoView} component={GdprInfoView} />
				<Route exact path={RoutingPath.cookieInformationView} component={CookieInformationView} />

				{/* AUTHENTICATED PATHS */}
				<Route render={() => (
					<>
						<Route path={AuthPath.profileView} component={authenticationRequired(ProfileView)} />
						<Route exact path={AuthPath.personalInformationView} component={authenticationRequired(PersonalInformationView)} />
						<Route exact path={AuthPath.userInformationView} component={authenticationRequired(UserInformationView)} />
						<Route exact path={AuthPath.purchaseHistoryView} component={authenticationRequired(PurchaseHistoryView)} />
						<Route exact path={AuthPath.newsLetterSubscriptionView} component={authenticationRequired(NewsLetterSubscriptionView)} />
					</>
				)} />

				{/* ADMIN PATHS */}
				<Route exact path={AdminPath.adminView} component={AdminView} />

				{/* INITIAL PATH */}
				<Route component={InitialView} />
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}
