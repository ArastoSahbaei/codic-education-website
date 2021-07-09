import { useState } from 'react'
import { RegisterNewUser } from '../../../shared/interfaces/UserInterface'
import { Button, Form, Header1, Input, Wrapper } from '../../../shared/styles/SiginStyles'
import { primaryColor, secondaryColor } from '../../../shared/styles/GlobalStyle'
import CodicAPIService from '../../../shared/api/services/CodicAPIService'
import styled from 'styled-components'

export const RegisterUser = () => {
	const [registerUser, setRegisterUser] = useState<RegisterNewUser>({ username: '', password: '', email: '', receiveNewsLetters: true })
	const handleCheckboxChange = () => setRegisterUser({ ...registerUser, receiveNewsLetters: !registerUser.receiveNewsLetters })

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof RegisterNewUser) => {
		setRegisterUser({ ...registerUser, [target]: event.target.value })
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
		<Wrapper>
			<Header1>Registrera dig</Header1>
			<Form>
				<Input
					type='text'
					placeholder='Användarnamn'
					onChange={(event) => { handleChange(event, 'username') }} />
				<Input
					type='text'
					placeholder='Email'
					onChange={(event) => { handleChange(event, 'email') }} />
				<Input
					type='password'
					placeholder='Lösenord'
					autoComplete='on'
					onChange={(event) => { handleChange(event, 'password') }} />
			</Form>
			<WrapperNewsLetter>
				<StyledCheckbox checked={registerUser.receiveNewsLetters} onClick={() => handleCheckboxChange()}>
					<Icon viewBox="0 0 24 24">
						<polyline points="20 6 9 17 4 12" />
					</Icon>
				</StyledCheckbox>
				<Paragraph>Ja tack! Registrera mig till Codics nyhetsbrev.</Paragraph>
			</WrapperNewsLetter>
			<Button onClick={(event) => { register(event) }}>Registrera</Button>
		</Wrapper>
	)
}

const WrapperNewsLetter = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`

const Paragraph = styled.p`
  margin: 0;
  text-align: left;
`

const Icon = styled.svg`
  fill: none;
  stroke: ${primaryColor};
  stroke-width: 4px;
  border-radius: 4px;
`

interface value {
	checked: boolean
}

const StyledCheckbox = styled.div<value>`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  background: white;
  border-radius: 4px;
  margin-left: 35px;
  transition: all 150ms;
  border: 4px solid ${secondaryColor};

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`
