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
	},
	login(loginCredentials: LoginCredentials): void,
	logout(): void,
	addToCart(productId: string): void,
	removeProductFromCart(array: [], index: number): void,
	parseJWT(): void
}

export interface RegisterNewUser {
	username: string,
	password: string,
	email: string
	recieveNewsLetters: boolean | false
}