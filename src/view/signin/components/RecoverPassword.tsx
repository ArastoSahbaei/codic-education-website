import React, { FC, useState } from 'react'
import styled from 'styled-components'
import leftArrow from '../../../shared/images/icons/left-arrow.svg'
import { SignInProps } from '../../../shared/interfaces/SingInInterface'
import { Button, Form, Header1, Input, RowWrapper } from '../../../shared/styles/SiginStyles'

export const RecoverPassword: FC<SignInProps> = ({data}: SignInProps) => {
	const [recoverPasswordText] = useState<string>('Återställ lösenord')
	const [email, setEmail] = useState<string>('')
	const [resetPasswordButton] = useState<string>('Återställ nu')
	
	
	const sendDataToParent = (event: React.MouseEvent<HTMLElement>) => {
		data.sendRecoverPasswordEmail({email, event})
	}
	
	return (
		<RowWrapper>
			<Wrapper>
				<Image src={ leftArrow } alt="back arrow" onClick={ () => {
					data.changeRecoverPasswordView()
				} }/>
				<Header1>{ recoverPasswordText }</Header1>
			</Wrapper>
			<Form>
				<Input
					type="text"
					placeholder={ data.emailText }
					onChange={ (event) => {
						setEmail(event.target.value)
					} }/>
				<Button onClick={ (event) => {
					sendDataToParent(event)
				} }>{ resetPasswordButton }</Button>
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

