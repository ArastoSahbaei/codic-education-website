export const nonAuthenticatedUser = {
	id: undefined,
	username: undefined,
	token: undefined,
	authenticated: false,
	cartId: undefined,
	shoppingCart:
	{
		products: [],
		_id: undefined
	}
	,
	newsLetterSubscription: {
		recieveNewsLetters: false,
	},
	favouriteProducts: [],
	login: () => {
		return null
	},
	logout: () => {
		return null
	},
	removeProductFromCart: () => {
		return null
	},
	addToCart: () => {
		return null
	},
	parseJWT: () => {
		return null
	}
}