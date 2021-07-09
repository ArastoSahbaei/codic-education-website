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
	favouriteProducts: []
}