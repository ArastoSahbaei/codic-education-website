import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { RegisterNewUserData, RegisterUser } from './components/RegisterUser'
import { SignInUser } from './components/SignInUser'
import RoutingPath from '../../routes/RoutingPath'
import CodicAPIService from '../../shared/api/services/CodicAPIService'
import LocalStorage from '../../shared/cache/LocalStorage'
import { windowsMaxWidth } from '../../shared/data/WindowsSizes'
import initialImage from '../../shared/images/teacher2.jpg'
import { DimensionsInterface } from '../../shared/interfaces/DimensionsInterface'
import { SignInProps } from '../../shared/interfaces/SingInInterface'
import { LoginCredentials, RegisterNewUser } from '../../shared/interfaces/UserInterface'
import { UserContext } from '../../shared/providers/UserProvider'
import { primaryBackgroundColor, primaryColor, secondaryColor } from '../../shared/styles/GlobalStyle'

export const SignInView = () => {
	const history = useHistory()
	const [, setAuthenticatedUser] = useContext(UserContext)
	const [registerUser, setRegisterUser] = useState<RegisterNewUser>({
		username: '',
		password: '',
		email: '',
		receiveNewsLetters: true
	})
	const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({username: '', password: ''})
	const [loginView, setLoginView] = useState<boolean>(true)
	const [loginHeaderText] = useState<string>('Logga in')
	const [registerHeader] = useState<string>('Registrera dig')
	const [usernameText] = useState<string>('Användarnamn')
	const [emailText] = useState<string>('Email')
	const [passwordText] = useState<string>('Lösenord')
	const [passwordConfirmText] = useState<string>('Bekräfta lösenord')
	const [passwordMismatched] = useState<string>('Lösenorden matchar ej!')
	
	const signIn = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		try {
			const {data} = await CodicAPIService.login(loginCredentials)
			localStorage.setItem(LocalStorage.authenticationToken, data.token)
			console.log(data)
			setAuthenticatedUser(data)
			history.push(RoutingPath.initialView)
		} catch (error) {
			console.log(error)
		}
	}
	
	const register = async () => {
		try {
			await CodicAPIService.registerNewUser(registerUser)
			//TODO: If registration is successfull -> login the user and tell em to verify their email
			alert('Sucessfully created your account!')
		} catch (error) {
			console.log(error)
			alert(error)
		}
	}
	
	const registerNewUser = (username: string, email: string, password: string, newsLetter: boolean) => {
		console.log(username, email, password, newsLetter)
		setRegisterUser({
			username: username,
			password: password,
			email: email,
			receiveNewsLetters: newsLetter
		})
		register()
	}
	
	const registerData: RegisterNewUserData = {
		data: {
			registerHeaderText: registerHeader,
			usernameText: usernameText,
			passwordText: passwordText,
			passwordConfirmText: passwordConfirmText,
			emailText: emailText,
			passwordMismatchedText: passwordMismatched,
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
	
	const [showRecoverPasswordView, setShowRecoverPasswordView] = useState<boolean>(false)
	
	const changeRecoverPasswordView = () => {
		setShowRecoverPasswordView(!showRecoverPasswordView)
	}
	
	const sendRecoverPasswordEmail = () => {
		alert('Password reset email sent if account exists')
	}
	
	const signInUserData: SignInProps = {
		data: {
			loginHeaderText: loginHeaderText,
			usernameText: usernameText,
			passwordText: passwordText,
			emailText: emailText,
			logInUser: logInUser,
			showRecoverPasswordView: showRecoverPasswordView,
			changeRecoverPasswordView: changeRecoverPasswordView,
			sendRecoverPasswordEmail: sendRecoverPasswordEmail
		}
	}
	
	return (
		<Wrapper>
			<Image src={ initialImage } windowsMaxWidth={ windowsMaxWidth } loginView={ loginView }/>
			<MainWrapper dimensions={ windowsMaxWidth }>
				<TitleWrapper>
					<TitleWrapperItem
						loginView={ loginView }
						primaryColor={ primaryBackgroundColor }
						secondaryColor={ secondaryColor }
						onClick={ () => setLoginView(true) }>
						<Paragraph>{ loginHeaderText }</Paragraph>
					</TitleWrapperItem>
					<TitleWrapperItem
						loginView={ !loginView }
						primaryColor={ primaryBackgroundColor }
						secondaryColor={ secondaryColor }
						onClick={ () => setLoginView(false) }>
						<Paragraph>{ registerHeader }</Paragraph>
					</TitleWrapperItem>
				</TitleWrapper>
				{ loginView
					? <SignInUser data={ signInUserData.data }/>
					: <RegisterUser data={ registerData.data }/> }
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
  @media (max-width: ${ props => props.windowsMaxWidth.mobile }) {
    margin-top: -10vh;
    margin-bottom: -0vh;
    height: 100vh;
  }
  @media (min-width: ${ props => props.windowsMaxWidth.tablet }) {
    margin-top: -8vh;
    margin-bottom: ${ props => props.loginView ? '-30vh' : '-5vh' };
  }
  @media (min-width: ${ props => props.windowsMaxWidth.laptop }) {
    margin-top: -7vh;
    margin-bottom: ${ props => props.loginView ? '-15vh' : '-15vh' };
  }
  @media (min-width: ${ props => props.windowsMaxWidth.desktop }) {
    margin-top: -10vh;
    margin-bottom: -47vh;
  }
  @media (min-width: ${ props => props.windowsMaxWidth.qHd }) {
    margin-top: -10vh;
    margin-bottom: -38vh;
  }
  @media (min-width: ${ props => props.windowsMaxWidth.ultraWide }) {
    margin-top: -15vh;
    margin-bottom: -79vh;
  }
  @media (min-width: ${ props => props.windowsMaxWidth.ultraHd }) {
    margin-top: -11vh;
    margin-bottom: -28vh;
  }
`

const MainWrapper = styled.div<DimensionsInterface>`
  position: absolute;
  border-radius: 0.5em;
  background-color: ${ primaryBackgroundColor };
  color: white;
  text-align: center;
  @media (max-width: ${ props => props.dimensions.mobile }) {
    margin-top: 5vh;
    width: 90%;
    margin-left: 5%;
    margin-right: auto;
  }
  @media (min-width: ${ props => props.dimensions.tablet }) {
    margin-top: 3vh;
    margin-left: 10%;
    width: 400px;
  }
  @media (min-width: ${ props => props.dimensions.laptop }) {
    margin-top: 8vh;
  }
  @media (min-width: ${ props => props.dimensions.desktop }) {
    margin-top: 10vh;
    margin-left: 15%;
  }
  @media (min-width: ${ props => props.dimensions.qHd }) {
    margin-top: 13vh;
    margin-left: 25%;
  }
  @media (min-width: ${ props => props.dimensions.ultraWide }) {
    margin-top: 20vh;
    margin-left: 30%;
    width: 400px;
  }
  @media (min-width: ${ props => props.dimensions.ultraHd }) {
    margin-left: 35%;
    width: 400px;
  }
`

export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  background-color: ${ secondaryColor };
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
`

interface values {
	loginView: boolean;
	primaryColor: string;
	secondaryColor: string;
}

export const TitleWrapperItem = styled.div<values>`
  background-color: ${ props => props.loginView ? props.primaryColor : props.secondaryColor };
  border-top-left-radius: ${ props => props.loginView ? '0.5em' : '0.5em' };
  border-top-right-radius: ${ props => props.loginView ? '0.5em' : '0.5em' };

  &:hover {
    background-color: ${ primaryColor };
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }
`

const Paragraph = styled.p`
  font-size: 1.25em;
  cursor: pointer;
  margin-bottom: 0.25em;
`


