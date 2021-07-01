import { useContext, useState } from 'react'
import CodicAPIService from '../../shared/api/services/CodicAPIService'
import { UserContext } from '../../shared/providers/UserProvider'
import { LoginCredentials, RegisterNewUser } from '../../shared/interfaces/User'
import LocalStorage from '../../shared/cache/LocalStorage'
import { useHistory } from 'react-router'
import RoutingPath from '../../routes/RoutingPath'

export const SignInView = () => {
	const history = useHistory()
	const [, setAuthenticatedUser] = useContext(UserContext)
	const [registerUser, setRegisterUser] = useState<RegisterNewUser>({ username: '', password: '', email: '', recieveNewsLetters: true })
	const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({ username: '', password: '' })

	const signIn = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
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

	const register = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		try {
			await CodicAPIService.registerNewUser(registerUser)
			//TODO: If registration is successfull -> login the user and tell em to verify their email
			alert('Sucessfully created your account!')
		} catch (error) {
			console.log(error)
			alert(error)
		}
	}

	return (
		<div>
			<h1>Login</h1>
			<form>
				<input placeholder="username" onChange={(event) => setLoginCredentials({ ...loginCredentials, username: event.target.value })} /> <br />
				<input placeholder="password" onChange={(event) => setLoginCredentials({ ...loginCredentials, password: event.target.value })} />
				<button onClick={(event) => signIn(event)}>Sign in</button>
			</form>
			<hr />

			<h1>Register</h1>
			<form>
				<input placeholder="username" onChange={(event) => setRegisterUser({ ...registerUser, username: event.target.value })} /> <br />
				<input placeholder="email" onChange={(event) => setRegisterUser({ ...registerUser, email: event.target.value })} /> <br />
				<input placeholder="password" onChange={(event) => setRegisterUser({ ...registerUser, password: event.target.value })} /> <br />
				Recieve newsletter?
				<input checked={registerUser.recieveNewsLetters}
					type="checkbox"
					onChange={() => setRegisterUser({ ...registerUser, recieveNewsLetters: !registerUser.recieveNewsLetters })} /> <br />
				<button onClick={(event) => register(event)}>Register</button>
			</form>
		</div>
	)
}
