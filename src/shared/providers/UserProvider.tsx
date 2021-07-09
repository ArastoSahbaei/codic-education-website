import { useState, createContext } from 'react'
import { AuthenticatedUser, LoginCredentials } from '../interfaces/UserInterface'
import { nonAuthenticatedUser } from '../../shared/data/nonAuthenticatedUser'
import LocalStorage from '../cache/LocalStorage'
import CodicAPIService from '../api/services/CodicAPIService'

type UserContextType = {
	user: AuthenticatedUser
	login: (loginCredentials: LoginCredentials) => void
	logout: () => void
	parseJWT: () => void
	addToCart: (productId: string) => void
	removeProductFromCart: (array: [], index: number) => void
}

export const UserContext = createContext<UserContextType>(
	{} as UserContextType
)

export const UserProvider = (props: { children?: React.ReactChild }) => {
	const [user, setUser] = useState<AuthenticatedUser>(nonAuthenticatedUser)
	const { children } = props

	const login = async (loginCredentials: LoginCredentials) => {
		try {
			const { data } = await CodicAPIService.login(loginCredentials)
			localStorage.setItem(LocalStorage.authenticationToken, data.token)
			console.log(data)
			setUser(data)
		} catch (error) {
			console.log(error)
		}
	}
	const logout = async () => {
		localStorage.removeItem(LocalStorage.authenticationToken)
		setUser(nonAuthenticatedUser)
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
			setUser({ ...data, authenticated: true })
		} else {
			setUser(nonAuthenticatedUser)
			localStorage.removeItem(LocalStorage.authenticationToken)
		}
	}
	const addToCart = async (productId: string) => {
		try {
			const updatedCart = [...user?.shoppingCart?.products, productId]
			const { data } = await CodicAPIService.updateCart({
				cartId: user.shoppingCart._id,
				products: updatedCart
			})
			/* 	setIsShoppingBagOpen(true) */
			setUser({ ...user, shoppingCart: { ...user.shoppingCart, products: data.products } })
		} catch (error) {
			console.log(error)
		}
	}
	const removeProductFromCart = async (array: [], index: number) => {
		const newArray = [...array.slice(0, index), ...array.slice(index + 1)]
		await CodicAPIService.updateCart({
			cartId: user?.shoppingCart?._id,
			products: newArray
		})
		setUser({ ...user, shoppingCart: { ...user.shoppingCart, products: newArray } })
	}

	return (
		<UserContext.Provider value={{ user, login, logout, parseJWT, addToCart, removeProductFromCart }}>
			{children}
		</UserContext.Provider>
	)
}