import React, { useState, createContext } from 'react'
import { AuthenticatedUser } from '../interfaces/User'

export const UserContext = createContext<any>(null)
const defaultValues = {
	id: undefined,
	username: undefined,
	token: undefined,
	authenticated: false,
	cartId: undefined,
	shoppingCart:
		{ products: [] }
	,
	newsLetterSubscription: {
		recieveNewsLetters: false,
	},
	favouriteProducts: []
}

export const UserProvider = (props: { children?: React.ReactChild }) => {
	const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUser>(defaultValues)
	const { children } = props

	return (
		<UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
			{children}
		</UserContext.Provider>
	)
}