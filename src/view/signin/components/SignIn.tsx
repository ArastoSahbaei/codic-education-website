import React, { useContext, useState } from 'react'
import { LoginCredentials } from '../../../shared/interfaces/UserInterface'
import { UserContext } from '../../../shared/providers/UserProvider'
import { primaryColor } from '../../../shared/styles/GlobalStyle'
import { Button, Form, Header1, Input, RowWrapper } from '../../../shared/styles/SiginStyles'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import RoutingPath from '../../../routes/RoutingPath'
import CodicAPIService from '../../../shared/api/services/CodicAPIService'
import LocalStorage from '../../../shared/cache/LocalStorage'

export const SignIn = (props: { changeRecoverPasswordView: () => void }) => {
	const history = useHistory()
	const [, setAuthenticatedUser] = useContext(UserContext)
	const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({ username: '', password: '' })

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof LoginCredentials) => {
		setLoginCredentials({ ...loginCredentials, [target]: event.target.value })
	}

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

	return (
		<RowWrapper>
			<Header1>Logga in</Header1>
			<Form>
				<Input
					type='text'
					placeholder={'Användarnamn'}
					onChange={(event) => { handleChange(event, 'username') }} />
				<Input
					type='password'
					placeholder={'Lösenord'}
					onChange={(event) => { handleChange(event, 'password') }} />
				<Paragraph onClick={() => { props.changeRecoverPasswordView() }}>Glömt lösenordet?</Paragraph>
				<Button onClick={(event) => { signIn(event) }}>Logga In</Button>
			</Form>
		</RowWrapper>
	)
}

const Paragraph = styled.p`
  font-family: AlegreyaSansRegular, sans-serif;
  color: ${primaryColor};
  margin-left: 10px;
  font-style: italic;
  cursor: pointer;
`