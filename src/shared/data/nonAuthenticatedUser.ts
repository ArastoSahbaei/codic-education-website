export const nonAuthenticatedUser = {
	_id: undefined,
	username: undefined,
	email: undefined,
	token: undefined,
	authenticated: false,
	cartId: undefined,
	personalDetails: {
		firstName: undefined,
		lastName: undefined,
		country: undefined,
		adress: undefined,
		secondaryAdress: undefined,
		zipCode: undefined, //POSTNUMMER
		county: undefined, //LÄN-KOMMUN
		postOffice: undefined, //POSTORT
		phone: undefined,
		secondaryPhone: undefined
	},
	shoppingCart:
		{ products: [] }
	,
	newsLetterSubscription: {
		createdAt: '',
		email: '',
		receiveNewsLetters: false,
		updatedAt: '',
		user: ''
	},
	favouriteProducts: []
}
