import { useState } from 'react'
import { Button, Form, Header1, Input, RowWrapper } from '../../../shared/styles/SiginStyles'
import { LoginCredentials } from '../../../shared/interfaces/UserInterface'
import { primaryColor } from '../../../shared/styles/GlobalStyle'
import { useAuthentication } from 'hooks/useAuthentication'
import styled from 'styled-components'

export const SignIn = (props: { changeResetPasswordView: () => void }) => {
	const { login } = useAuthentication()
	const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({ username: '', password: '' })

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof LoginCredentials) => {
		setLoginCredentials({ ...loginCredentials, [target]: event.target.value })
	}

	const onSubmit = async (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		login(loginCredentials)
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
					autoComplete='on'
					onChange={(event) => { handleChange(event, 'password') }} />
				<Paragraph onClick={() => { props.changeResetPasswordView() }}>Glömt lösenordet?</Paragraph>
				<Button onClick={(event) => { onSubmit(event) }}>Logga In</Button>
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