import { FC } from 'react'
import styled from 'styled-components'
import { translate } from '../../functions/translate'
import { primaryColor } from '../../shared/styles/GlobalStyle'
import { Spinner } from '../Spinner'
import { isDisabled } from './ButtonStyles'
import { IButton } from './types'

export const PrimaryButton: FC<IButton> = (props: IButton) => {
	const {text, isLoading, disabled} = props
	return (
		<ButtonWrapper onClick={ props.onClick } disabled={ disabled }>
			{ translate(text) }
			{ isLoading && (
				<SpinnerWrapper>
					<Spinner height='16' width='16'/>
				</SpinnerWrapper>
			) }
		</ButtonWrapper>
	)
}

const SpinnerWrapper = styled.div`
  max-height: 50%;
  margin-left: 0.5rem;
`



const ButtonWrapper = styled.button`
  margin-top: 1em;
  padding: 0.5em 2em;
  border: none;
  border-radius: 0.25em;
  background-color: ${ primaryColor };
  font-size: 1.25em;
  color: white;
  cursor: pointer;

  ${ isDisabled }
`
