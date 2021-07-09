import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { SignInProps } from '../../../shared/interfaces/SingInInterface'
import { primaryColor } from '../../../shared/styles/GlobalStyle'
import { Button, Form, Header1, Input, RowWrapper } from '../../../shared/styles/SiginStyles'

export const SignIn: FC<SignInProps> = ({ data }: SignInProps) => {
	const [loginUsername, setLoginUsername] = useState<string>('')
	const [loginPassword, setLoginPassword] = useState<string>('')

	const sendDataToParent = (event: React.MouseEvent<HTMLElement>) => {
		data.logInUser(loginUsername, loginPassword, event)
	}
	return (
		<RowWrapper>
			<Header1>{data.loginHeaderText}</Header1>
			<Form>
				<Input
					type="text"
					placeholder={data.usernameText}
					onChange={(event) => {
						setLoginUsername(event.target.value)
					}} />
				<Input
					type="password"
					placeholder={data.passwordText}
					onChange={(event) => {
						setLoginPassword(event.target.value)
					}} />
				<Paragraph onClick={() => { data.changeRecoverPasswordView() }}>Glömt lösenordet?</Paragraph>
				<Button onClick={(event) => { sendDataToParent(event) }}>Logga In</Button>
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
