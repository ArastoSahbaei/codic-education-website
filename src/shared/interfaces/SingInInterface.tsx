import React from 'react'

type SignInUserFunction = (username: string, password: string, event: React.MouseEvent<HTMLElement>) => void
type SignInPropsFunction = () => void
type RecoverPasswordFunction = (email: string, event: React.MouseEvent<HTMLElement>) => void

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
