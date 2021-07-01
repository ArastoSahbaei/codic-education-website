import { useEffect, useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CodicAPIService from '../shared/api/services/CodicAPIService'
import LocalStorage from '../shared/cache/LocalStorage'
import { UserContext } from '../shared/providers/UserProvider'
import { EmployeeView } from '../view/employee/EmployeeView'
import { InitialView } from '../view/initial/InitialView'
import { ShopView } from '../view/shop/ShopView'
import { SignInView } from '../view/signin/SignInView'
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
			const response = await CodicAPIService.getUserWithID(JWT.id)
			setAuthenticatedUser({
				id: JWT.id,
				authenticated: true,
				username: response.data.username,
				shoppingCart: response.data?.shoppingCart[0],
				cartId: response.data?.shoppingCart[0]?._id,
				newsLetterSubscription: response.data?.newsLetterSubscription[0],
				favouriteProducts: response.data?.favouriteProducts,
				/* 				personalDetails: {
									firstName: response.data.personalDetails.firstName,
									lastName: response.data.personalDetails.lastName,
									gender: response.data.personalDetails.gender,
									country: response.data.personalDetails.country,
									adress: response.data.personalDetails.adress,
									secondaryAdress: response.data.personalDetails.secondaryAdress,
									ZIPcode: response.data.personalDetails.ZIPcode,
									county: response.data.personalDetails.county,
									postOrt: response.data.personalDetails.postOrt,
									phone: response.data.personalDetails.phone,
									secondaryPhone: response.data.personalDetails.secondaryPhone
								} */
			})
		} else {
			setAuthenticatedUser({
				authenticated: false,
				id: undefined,
				username: undefined
			})
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
		</BrowserRouter>
	)
}
