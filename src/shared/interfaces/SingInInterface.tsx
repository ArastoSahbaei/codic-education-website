import React from 'react'

interface SignInUserData {
	username: string,
	password: string,
	event: React.MouseEvent<HTMLElement>
}

type SignInUserFunction = ({username, password, event}: SignInUserData) => void
type SignInPropsFunction = () => void

interface RecoverPasswordData {
	email: string,
	event: React.MouseEvent<HTMLElement>
}

type RecoverPasswordFunction = ({email, event}: RecoverPasswordData) => void

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
