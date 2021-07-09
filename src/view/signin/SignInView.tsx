import { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { UserContext } from '../../shared/providers/UserProvider'
import { DimensionsInterface } from '../../shared/interfaces/DimensionsInterface'
import { RegisterNewUserData, RegisterNewUserFunction, SignInProps } from '../../shared/interfaces/SingInInterface'
import { primaryBackgroundColor, primaryColor, secondaryColor } from '../../shared/styles/GlobalStyle'
import { LoginCredentials, RegisterNewUser } from '../../shared/interfaces/UserInterface'
import { RegisterUser } from './components/RegisterUser'
import { SignInUser } from './components/SignInUser'
import { windowsMaxWidth } from '../../shared/data/WindowsSizes'
import CodicAPIService from '../../shared/api/services/CodicAPIService'
import LocalStorage from '../../shared/cache/LocalStorage'
import initialImage from '../../shared/images/teacher2.jpg'
import RoutingPath from '../../routes/RoutingPath'
import styled from 'styled-components'

export const SignInView = () => {
	const history = useHistory()
	const [setAuthenticatedUser] = useContext(UserContext)
	const [registerUser, setRegisterUser] = useState<RegisterNewUser>({ username: '', password: '', email: '', receiveNewsLetters: true })
	const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({ username: '', password: '' })
	const [showRecoverPasswordView, setShowRecoverPasswordView] = useState<boolean>(false)
	const [loginView, setLoginView] = useState<boolean>(true)

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

	const registerNewUser: RegisterNewUserFunction = (username, email, password, newsLetter, event) => {
		console.log(username, email, password, newsLetter)
		setRegisterUser({
			username: username,
			password: password,
			email: email,
			receiveNewsLetters: newsLetter
		})
		register(event)
	}

	const registerData: RegisterNewUserData = {
		data: {
			registerHeaderText: 'Registrera dig',
			usernameText: 'Användarnamn',
			passwordText: 'Lösenord',
			passwordConfirmText: 'Bekräfta lösenord',
			emailText: 'Email',
			passwordMismatchedText: 'Lösenorden matchar ej!',
			registerNewUser: registerNewUser,
		}
	}

	const logInUser = (username: string, password: string, event: React.MouseEvent<HTMLElement>) => {
		console.log(username, password)
		setLoginCredentials({
			...loginCredentials,
			username: username,
			password: password
		})
		signIn(event)
	}


	const changeRecoverPasswordView = () => {
		setShowRecoverPasswordView(!showRecoverPasswordView)
	}

	const sendRecoverPasswordEmail = (email: string, event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		alert(`Password reset email was sent to "${email}" if account exists`)
	}

	const signInUserData: SignInProps = {
		data: {
			loginHeaderText: 'Logga in',
			usernameText: 'Användarnamn',
			passwordText: 'Lösenord',
			emailText: 'Email',
			logInUser: logInUser,
			showRecoverPasswordView: showRecoverPasswordView,
			changeRecoverPasswordView: changeRecoverPasswordView,
			sendRecoverPasswordEmail: sendRecoverPasswordEmail
		}
	}

	return (
		<Wrapper>
			<Image src={initialImage} windowsMaxWidth={windowsMaxWidth} loginView={loginView} />
			<MainWrapper dimensions={windowsMaxWidth}>
				<TitleWrapper>
					<TitleWrapperItem
						loginView={loginView}
						primaryColor={primaryBackgroundColor}
						secondaryColor={secondaryColor}
						onClick={() => setLoginView(true)}>
						<Paragraph>{'Logga in'}</Paragraph>
					</TitleWrapperItem>
					<TitleWrapperItem
						loginView={!loginView}
						primaryColor={primaryBackgroundColor}
						secondaryColor={secondaryColor}
						onClick={() => setLoginView(false)}>
						<Paragraph>{'Registrera dig'}</Paragraph>
					</TitleWrapperItem>
				</TitleWrapper>
				{loginView
					? <SignInUser data={signInUserData.data} />
					: <RegisterUser data={registerData.data} />}
			</MainWrapper>
		</Wrapper>
	)
}

interface ImageValues {
	windowsMaxWidth: any,
	loginView: boolean;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
`

const Image = styled.img<ImageValues>`
  z-index: -1;
  grid-column: 1/21;
  width: 100%;
  @media (max-width: ${props => props.windowsMaxWidth.mobile}) {
    margin-top: -10vh;
    margin-bottom: -0vh;
    height: 100vh;
  }
  @media (min-width: ${props => props.windowsMaxWidth.tablet}) {
    margin-top: -8vh;
    margin-bottom: ${props => props.loginView ? '-30vh' : '-5vh'};
  }
  @media (min-width: ${props => props.windowsMaxWidth.laptop}) {
    margin-top: -7vh;
    margin-bottom: ${props => props.loginView ? '-15vh' : '-15vh'};
  }
  @media (min-width: ${props => props.windowsMaxWidth.desktop}) {
    margin-top: -10vh;
    margin-bottom: -47vh;
  }
  @media (min-width: ${props => props.windowsMaxWidth.qHd}) {
    margin-top: -10vh;
    margin-bottom: -38vh;
  }
  @media (min-width: ${props => props.windowsMaxWidth.ultraWide}) {
    margin-top: -15vh;
    margin-bottom: -79vh;
  }
  @media (min-width: ${props => props.windowsMaxWidth.ultraHd}) {
    margin-top: -11vh;
    margin-bottom: -28vh;
  }
`

const MainWrapper = styled.div<DimensionsInterface>`
  position: absolute;
  border-radius: 0.5em;
  background-color: ${primaryBackgroundColor};
  color: white;
  text-align: center;
  @media (max-width: ${props => props.dimensions.mobile}) {
    margin-top: 5vh;
    width: 90%;
    margin-left: 5%;
    margin-right: auto;
  }
  @media (min-width: ${props => props.dimensions.tablet}) {
    margin-top: 3vh;
    margin-left: 10%;
    width: 400px;
  }
  @media (min-width: ${props => props.dimensions.laptop}) {
    margin-top: 8vh;
  }
  @media (min-width: ${props => props.dimensions.desktop}) {
    margin-top: 10vh;
    margin-left: 15%;
  }
  @media (min-width: ${props => props.dimensions.qHd}) {
    margin-top: 13vh;
    margin-left: 25%;
  }
  @media (min-width: ${props => props.dimensions.ultraWide}) {
    margin-top: 20vh;
    margin-left: 30%;
    width: 400px;
  }
  @media (min-width: ${props => props.dimensions.ultraHd}) {
    margin-left: 35%;
    width: 400px;
  }
`

export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  background-color: ${secondaryColor};
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
`

interface values {
	loginView: boolean;
	primaryColor: string;
	secondaryColor: string;
}

export const TitleWrapperItem = styled.div<values>`
  background-color: ${props => props.loginView ? props.primaryColor : props.secondaryColor};
  border-top-left-radius: ${props => props.loginView ? '0.5em' : '0.5em'};
  border-top-right-radius: ${props => props.loginView ? '0.5em' : '0.5em'};

  &:hover {
    background-color: ${primaryColor};
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }
`

const Paragraph = styled.p`
  font-size: 1.25em;
  cursor: pointer;
  margin-bottom: 0.25em;
`


