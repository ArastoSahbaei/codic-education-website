type SignInUserFunction = (username: string, password: string) => void
type SignInPropsFunction = () => void

export interface SignInProps {
	data: {
		loginHeaderText: string
		usernameText: string
		passwordText: string
		emailText: string
		logInUser: SignInUserFunction
		showRecoverPasswordView: boolean
		changeRecoverPasswordView: SignInPropsFunction
		sendRecoverPasswordEmail: SignInPropsFunction
	}
}
