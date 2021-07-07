import { useState, createContext } from 'react'
import { AuthenticatedUser, LoginCredentials } from '../interfaces/UserInterface'
import { nonAuthenticatedUser } from '../../shared/data/nonAuthenticatedUser'
import LocalStorage from '../cache/LocalStorage'
import CodicAPIService from '../api/services/CodicAPIService'

export const UserContext = createContext<AuthenticatedUser>(nonAuthenticatedUser)

export const UserProvider = (props: { children?: React.ReactChild }) => {
	const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUser>(nonAuthenticatedUser)
	const { children } = props

	authenticatedUser.login = async (loginCredentials: LoginCredentials) => {
		try {
			const { data } = await CodicAPIService.login(loginCredentials)
			localStorage.setItem(LocalStorage.authenticationToken, data.token)
			console.log(data)
			setAuthenticatedUser(data)
		} catch (error) {
			console.log(error)
		}
	}

	authenticatedUser.logout = async () => {
		localStorage.removeItem(LocalStorage.authenticationToken)
		setAuthenticatedUser(nonAuthenticatedUser)
	}

	const validateToken = (tokenExp: number) => {
		const currentTime = Math.floor(Date.now() / 1000)
		return (tokenExp >= currentTime)
	}

	authenticatedUser.parseJWT = async () => {
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

	authenticatedUser.addToCart = async (productId: string) => {
		try {
			const updatedCart = [...authenticatedUser?.shoppingCart?.products, productId]
			const { data } = await CodicAPIService.updateCart({
				cartId: authenticatedUser.shoppingCart._id,
				products: updatedCart
			})
			/* 	setIsShoppingBagOpen(true) */
			setAuthenticatedUser({ ...authenticatedUser, shoppingCart: { ...authenticatedUser.shoppingCart, products: data.products } })
		} catch (error) {
			console.log(error)
		}
	}
	
	authenticatedUser.removeProductFromCart = async (array: [], index: number) => {
		const newArray = [...array.slice(0, index), ...array.slice(index + 1)]
		await CodicAPIService.updateCart({
			cartId: authenticatedUser?.shoppingCart?._id,
			products: newArray
		})
		setAuthenticatedUser({ ...authenticatedUser, shoppingCart: { ...authenticatedUser.shoppingCart, products: newArray } })
	}

	return (
		<UserContext.Provider value={authenticatedUser}>
			{children}
		</UserContext.Provider>
	)
}