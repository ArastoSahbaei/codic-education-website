import {MouseEvent} from 'react'

type SignInUserFunction = (username: string, password: string, event: MouseEvent<HTMLElement>) => void
type SignInPropsFunction = () => void
type RecoverPasswordFunction = (email: string, event: MouseEvent<HTMLElement>) => void

export interface SignInProps {
	data: {
		loginHeaderText: string
		usernameText: string
		passwordText: string
		emailText: string
		logInUser: SignInUserFunction
		showRecoverPasswordView: boolean
		changeRecoverPasswordView: SignInPropsFunction
		sendRecoverPasswordEmail: RecoverPasswordFunction
	}
}

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
