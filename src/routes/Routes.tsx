import { useEffect, useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CodicAPIService from '../shared/api/services/CodicAPIService'
import LocalStorage from '../shared/cache/LocalStorage'
import { UserContext } from '../shared/providers/UserProvider'
import { EmployeeView } from '../view/employee/EmployeeView'
import { InitialView } from '../view/initial/InitialView'
import { ShopView } from '../view/shop/ShopView'
import { SignInView } from '../view/signin/SignInView'
import { Footer } from '../components/Footer'
import RoutingPath from './RoutingPath'

export const Routes = (props: { children: React.ReactChild[] }) => {
	const [, setAuthenticatedUser] = useContext(UserContext)

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
			const { data } = await CodicAPIService.getUserWithID(JWT.id)
			setAuthenticatedUser({ ...data, authenticated: true })
		} else {
			setAuthenticatedUser({/* TODO: add default value */ })
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
				<Route exact path={RoutingPath.employeeView} component={EmployeeView} />
				<Route exact path={RoutingPath.signInView} component={SignInView} />
				<Route exact path={RoutingPath.shopView} component={ShopView} />
				<Route component={InitialView} />
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}
