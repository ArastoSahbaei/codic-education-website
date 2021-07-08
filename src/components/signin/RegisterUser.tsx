import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Button, Form, Header1, Input, Wrapper } from '../../shared/styles/SiginStyles'
import { Checkbox } from './CheckBox'

type RegisterNewUserFunction = (username: string, email: string, password: string, newsLetter: boolean) => void

export interface RegisterNewUserData {
	data: {
		registerHeaderText: string
		usernameText: string
		passwordText: string
		passwordConfirmText: string
		emailText: string
		passwordMismatchedText: string
		registerNewUser: RegisterNewUserFunction
	}
}

export const RegisterUser: FC<RegisterNewUserData> = ({data}: RegisterNewUserData) => {
	const [receiveNewsLetters] = useState<string>('Ja tack! Jag vill registrera mig på Codics nyhetsbrev.')
	const [registerButton] = useState<string>('Registrera')
	const [checked, setChecked] = useState<boolean>(true)
	
	const [newUsername, setNewUsername] = useState<string>('')
	const [newPassword, setNewPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
	const [newEmail, setNewEmail] = useState<string>('')
	const minLength = 5
	
	const handleCheckboxChange = () => {
		setChecked(!checked)
	}
	
	const sendDataToParent = () => {
		if (newUsername.length <= minLength) {
			alert('För kort ' + data.usernameText)
		} else if (newPassword.length <= minLength) {
			alert('För kort ' + data.passwordText)
		} else if (newPassword === confirmPassword) {
			data.registerNewUser(newUsername, newEmail, newPassword, checked)
		} else {
			alert(data.passwordMismatchedText)
		}
	}
	
	return (
		<Wrapper>
			<Header1>{ data.registerHeaderText }</Header1>
			<Form>
				<Input
					type="text"
					placeholder={ data.usernameText }
					onChange={ (event) => {
						setNewUsername(event.target.value)
					} }/>
				
				<Input
					type="text"
					placeholder={ data.emailText }
					onChange={ (event) => {
						setNewEmail(event.target.value)
					} }/>
				<Input
					type="password"
					placeholder={ data.passwordText }
					onChange={ (event) => {
						setNewPassword(event.target.value)
					} }/>
				<Input
					type="password"
					placeholder={ data.passwordConfirmText }
					onChange={ (event) => {
						setConfirmPassword(event.target.value)
					} }/>
			</Form>
			<WrapperNewsLetter>
				<span onClick={ handleCheckboxChange }>
					<Checkbox checked={ checked }/>
				</span>
				<Paragraph>{ receiveNewsLetters } </Paragraph>
			</WrapperNewsLetter>
			<Button onClick={ sendDataToParent }>{ registerButton }</Button>
		</Wrapper>
	)
}

const WrapperNewsLetter = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`

const Paragraph = styled.p`
  margin: 0;
  text-align: left;
`
