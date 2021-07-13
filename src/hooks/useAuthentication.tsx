import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from 'shared/providers/UserProvider'
import { validateToken } from 'functions/validateToken'
import { nonAuthenticatedUser } from 'shared/data/nonAuthenticatedUser'
import { LoginCredentials, RegisterNewUser } from 'shared/interfaces/UserInterface'
import RoutingPath from 'routes/RoutingPath'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import LocalStorage from 'shared/cache/LocalStorage'

export const useAuthentication = () => {
	const history = useHistory()
	const [, setAuthenticatedUser] = useContext(UserContext)

	const login = async (loginCredentials: LoginCredentials) => {
		try {
			const { data } = await CodicAPIService.login(loginCredentials)
			localStorage.setItem(LocalStorage.authenticationToken, data.token)
			console.log(data)
			setAuthenticatedUser(data)
			history.push(RoutingPath.initialView)
		} catch (error) {
			console.log(error)
		}
	}

	const register = async (newUserCredentials: RegisterNewUser) => {
		try {
			await CodicAPIService.registerNewUser(newUserCredentials)
			//TODO: If registration is successfull -> login the user and tell em to verify their email
			alert('Sucessfully created your account!')
		} catch (error) {
			console.log(error)
		}
	}

	const validateUser = async () => {
		const token = localStorage.getItem(LocalStorage.authenticationToken)
		if (!token) { return }
		const base64Url = token.split('.')[1]
		const base64 = base64Url.replace('-', '+').replace('_', '/')
		const JWT = JSON.parse(window.atob(base64))

		if (validateToken(JWT.exp)) {
			// TODO: There has to be a better way to recieve the username? You cannot just do a getUserWithID like this?
			// TODO: Sign in with a new token instead of recieving the user with getUserWithID?
			try {
				const { data } = await CodicAPIService.getUserWithID(JWT.id)
				// TODO: recieve the authenticatid variable from server so that only data can be set
				setAuthenticatedUser({ ...data, authenticated: true })
			} catch (error) {
				console.log(error)
			}
		} else {
			setAuthenticatedUser(nonAuthenticatedUser)
			localStorage.removeItem(LocalStorage.authenticationToken)
		}
	}

	const recoverLostPassword = () => {
		//TODO: TBA
	}

	return { login, register, validateUser }

}