import { MouseEvent } from 'react'

export type RegisterNewUserFunction = (
	username: string,
	email: string,
	password: string,
	newsLetter: boolean,
	event: MouseEvent<HTMLElement>
) => void

export interface RegisterNewUserData {
	data: {
		registerHeaderText: string
		usernameText: string
		passwordText: string
		passwordConfirmText: string
		emailText: string
		passwordMismatchedText: string
		registerNewUser: RegisterNewUserFunction
	}
}
