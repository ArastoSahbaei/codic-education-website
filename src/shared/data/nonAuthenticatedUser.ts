export const nonAuthenticatedUser = {
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