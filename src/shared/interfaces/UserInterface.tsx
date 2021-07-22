export interface LoginCredentials {
	username: string,
	password: string
}

export interface AuthenticatedUser {
	username: string | undefined,
	token: string | undefined,
	authenticated: boolean,
	cartId: string | undefined
	favouriteProducts: [] | Array<string>
}

export interface RegisterNewUser {
	username: string,
	password: string,
	email: string
	receiveNewsLetters: boolean | true
}

export interface RetrieveLostAccount {
	email: string
}

export interface UserPersonalDetails {
	personalDetails: UserDetails
}
export interface UserDetails {
	firstName: string,
	lastName: string,
	country: string,
	adress: string,
	secondaryAdress: string,
	zipCode: string, //POSTNUMMER
	county: string, //LÄN-KOMMUN
	postOffice: string, //POSTORT
	phone: string,
	secondaryPhone: string
}

export interface UpdatePassword {
	userId: string,
	newPassword: string
}

export interface IChangePassword {
	password: string,
	newPassword: string
}