import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from 'shared/providers/UserProvider'
import { validateToken } from 'functions/validateToken'
import { nonAuthenticatedUser } from 'shared/data/nonAuthenticatedUser'
import { LoginCredentials, RegisterNewUser, RetrieveLostAccount, UserPersonalDetails } from 'shared/interfaces/UserInterface'
import { toast } from 'react-toastify'
import RoutingPath from 'routes/RoutingPath'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import LocalStorage from 'shared/cache/LocalStorage'

export const useAuthentication = () => {
	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

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

	const recoverLostPassword = async (data: RetrieveLostAccount) => {
		try {
			await CodicAPIService.retrieveLostAccount(data)
			//TODO: check if account does exist in our system
			toast.info(`Instruktioner om hur du återfår ditt konto har skickats till ${data.email}`)
		} catch (error) {
			console.log(error.message)
			toast.info(`${data.email} hittades inte i våra system`)
		}
	}

	const updatePersonalInformation = async (data: UserPersonalDetails) => {
		try {
			await CodicAPIService.updateUser(authenticatedUser._id, data)
			toast.success('Uppgifter har sparats')
		} catch (error) {
			toast.error('Det gick inte att spara uppgifterna')
		}
	}

	const updatePassword = async (updatedPassword: string) => {
		try {
			await CodicAPIService.updatePassword({ newPassword: updatedPassword, userId: authenticatedUser._id })
			toast.success('ditt lösenord har uppdaterats')
		} catch (error) {
			toast.error('Ett fel uppstod när du försökte uppdatera ditt lösenord')
		}
	}

	const toggleNewsLetterSubscription = async (userNewsLetterId: string, value: boolean) => {
		try {
			await CodicAPIService.updateNewsLetterSubscription(userNewsLetterId, value)
			setAuthenticatedUser({ ...authenticatedUser, newsLetterSubscription: { ...authenticatedUser.newsLetterSubscription, receiveNewsLetters: value } })
			toast.info(value ? 'Du prenumerar nu på vårt nyhetsbrev' : 'Du har avslutat din nyhetsprenumeration')
		} catch (error) {
			toast.error('Det gick inte att spara uppgifterna')
		}
	}

	return {
		login,
		register,
		validateUser,
		recoverLostPassword,
		updatePersonalInformation,
		updatePassword,
		toggleNewsLetterSubscription,
	}

}
