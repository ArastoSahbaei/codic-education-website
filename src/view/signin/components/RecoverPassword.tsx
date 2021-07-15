import { useState } from 'react'
import { useAuthentication } from 'hooks/useAuthentication'
import { RetrieveLostAccount } from 'shared/interfaces/UserInterface'
import { Button, Form, Header1, Input, RowWrapper } from '../../../shared/styles/SiginStyles'
import styled from 'styled-components'
import leftArrow from '../../../shared/images/icons/left-arrow.svg'

export const RecoverPassword = (props: { changeRecoverPasswordView: () => void }) => {
	const { recoverLostPassword } = useAuthentication()
	const [email, setEmail] = useState<string>('')

	const sendRecoverPasswordEmail = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		const emailRetriver: RetrieveLostAccount = { email: email }
		recoverLostPassword(emailRetriver)
	}

	return (
		<RowWrapper>
			<Wrapper>
				<Image src={leftArrow} alt="back arrow" onClick={() => { props.changeRecoverPasswordView() }} />
				<Header1>Återställ lösenord</Header1>
			</Wrapper>
			<Form>
				<Input
					type='text'
					placeholder='Email'
					onChange={(event) => { setEmail(event.target.value) }} />
				<Button onClick={(event) => { sendRecoverPasswordEmail(event) }}>Återställ nu</Button>
			</Form>
		</RowWrapper>
	)
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
`

const Image = styled.img`
  margin-top: 0.6em;
  cursor: pointer;
`

