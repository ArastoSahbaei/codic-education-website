export interface LoginCredentials {
	username: string,
	password: string
}
export interface AuthenticatedUser {
	username: string | undefined,
	token: string | undefined,
	authenticated: boolean,
	cartId: string | undefined,
	favouriteProducts: [] | Array<string>,
	shoppingCart: {
		products: [] | Array<string>,
		_id: string | undefined
	}
}

export interface RegisterNewUser {
	username: string,
	password: string,
	email: string
	recieveNewsLetters: boolean | false
}