import { useState } from 'react'
import { Button, Form, Header1, Input, RowWrapper } from '../../../shared/styles/SiginStyles'
import styled from 'styled-components'
import leftArrow from '../../../shared/images/icons/left-arrow.svg'

export const RecoverPassword = (props: { changeRecoverPasswordView: () => void }) => {
	const [recoverPasswordText] = useState<string>('Återställ lösenord')
	const [email, setEmail] = useState<string>('')
	const [resetPasswordButton] = useState<string>('Återställ nu')

	const sendRecoverPasswordEmail = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		alert(`Password reset email was sent to "${email}" if account exists`)
	}

	return (
		<RowWrapper>
			<Wrapper>
				<Image src={leftArrow} alt="back arrow" onClick={() => { props.changeRecoverPasswordView() }} />
				<Header1>{recoverPasswordText}</Header1>
			</Wrapper>
			<Form>
				<Input
					type='text'
					placeholder='Email'
					onChange={(event) => { setEmail(event.target.value) }} />
				<Button onClick={(event) => { sendRecoverPasswordEmail(event) }}>{resetPasswordButton}</Button>
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

