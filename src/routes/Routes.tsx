import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { nonAuthenticatedUser } from '../shared/data/nonAuthenticatedUser'
import { UserContext } from '../shared/providers/UserProvider'
import { EmployeeView } from '../view/employee/EmployeeView'
import { InitialView } from '../view/initial/InitialView'
import { ContactView } from '../view/contact/ContactView'
import { ProfileView } from '../view/auth/ProfileView'
import { SignInView } from '../view/signin/SignInView'
import { ShopView } from '../view/shop/ShopView'
import { Footer } from '../components/Footer'
import { AdminView } from '../view/admin/AdminView'
import RoutingPath from './RoutingPath'
import CodicAPIService from '../shared/api/services/CodicAPIService'
import LocalStorage from '../shared/cache/LocalStorage'
import AuthPath from './AuthPath'
import AdminPath from './AdminPath'

export const Routes = (props: { children: React.ReactChild[] }) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const blockRouteIfAuthenticated = (navigateToViewIfAuthenticated: React.FC) => {
		return authenticatedUser.authenticated ? InitialView : navigateToViewIfAuthenticated
	}

	const validateToken = (tokenExp: number) => {
		const currentTime = Math.floor(Date.now() / 1000)
		return (tokenExp >= currentTime)
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
			const { data } = await CodicAPIService.getUserWithID(JWT.id)
			setAuthenticatedUser({ ...data, authenticated: true })
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
				{/* REGULAR PATHS */}
				<Route exact path={RoutingPath.employeeView} component={EmployeeView} />
				<Route exact path={RoutingPath.shopView} component={ShopView} />
				<Route exact path={RoutingPath.contactView} component={ContactView} />
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
