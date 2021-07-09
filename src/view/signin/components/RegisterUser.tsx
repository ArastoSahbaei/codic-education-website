import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { RegisterNewUserData } from '../../../shared/interfaces/SingInInterface'
import { Button, Form, Header1, Input, Wrapper } from '../../../shared/styles/SiginStyles'
import { Checkbox } from './CheckBox'

export const RegisterUser: FC<RegisterNewUserData> = ({data}: RegisterNewUserData) => {
	const [receiveNewsLetters] = useState<string>('Ja tack! Registrera mig till Codics nyhetsbrev.')
	const [registerButton] = useState<string>('Registrera')
	const [checked, setChecked] = useState<boolean>(true)
	
	const [newUsername, setNewUsername] = useState<string>('')
	const [newPassword, setNewPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
	const [newEmail, setNewEmail] = useState<string>('')
	
	const handleCheckboxChange = () => {
		setChecked(!checked)
	}
	
	const sendDataToParent = (event: React.MouseEvent<HTMLElement>) => {
		if (newPassword === confirmPassword) {
			data.registerNewUser(newUsername, newEmail, newPassword, checked, event)
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
				<Span onClick={ handleCheckboxChange }>
					<Checkbox checked={ checked }/>
				</Span>
				<Paragraph>{ receiveNewsLetters } </Paragraph>
			</WrapperNewsLetter>
			<Button onClick={ (event) => {
				sendDataToParent(event)
			} }>{ registerButton }</Button>
		</Wrapper>
	)
}

const Span = styled.span`
  justify-self: end;
  margin-right: 10px;
`

const WrapperNewsLetter = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`

const Paragraph = styled.p`
  margin: 0;
  text-align: left;
`
