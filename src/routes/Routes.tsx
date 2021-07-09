import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { UserContext } from '../shared/providers/UserProvider'
import { CheckoutView } from '../view/checkout/CheckoutView'
import { EmployeeView } from '../view/employee/EmployeeView'
import { InitialView } from '../view/initial/InitialView'
import { ContactView } from '../view/contact/ContactView'
import { ProfileView } from '../view/auth/ProfileView'
import { SignInView } from '../view/signin/SignInView'
import { ShopView } from '../view/shop/ShopView'
import { Footer } from '../components/Footer'
import { AdminView } from '../view/admin/AdminView'
import RoutingPath from './RoutingPath'
import AuthPath from './AuthPath'
import AdminPath from './AdminPath'

export const Routes = (props: { children: React.ReactChild[] }) => {
	const {user, parseJWT} = useContext(UserContext)

	const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated: React.FC) => {
		return user.authenticated ? InitialView : navigateToViewIfAuthenticated
	}

	useEffect(() => {
		parseJWT()
	}, [])

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				{/* REGULAR PATHS */}
				<Route exact path={RoutingPath.employeeView} component={EmployeeView} />
				<Route exact path={RoutingPath.shopView} component={ShopView} />
				<Route exact path={RoutingPath.contactView} component={ContactView} />
				<Route exact path={RoutingPath.checkoutView} component={CheckoutView} />
				<Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
				{/* AUTHENTICATED PATHS */}
				<Route exact path={AuthPath.profileView} component={ProfileView} />
				{/* ADMIN PATHS */}
				<Route exact path={AdminPath.adminView} component={AdminView} />
				{/* INITIAL PATH */}
				<Route component={InitialView} />
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}
