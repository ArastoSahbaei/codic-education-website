import { FC } from 'react'
import { primaryColor, secondaryColor } from '../../shared/styles/GlobalStyle'
import { translate } from '../../functions/translate'
import { Spinner } from '../Spinner'
import { IButton } from './types'
import styled from 'styled-components'

export const PrimaryButton: FC<IButton> = (props: IButton) => {
	const { text, isLoading, disabled } = props
	return (
		<ButtonWrapper onClick={props.onClick} disabled={disabled}>
			{translate(text)}
			{isLoading && (
				<SpinnerWrapper>
					<Spinner height='16' width='16' />
				</SpinnerWrapper>
			)}
		</ButtonWrapper>
	)
}

const SpinnerWrapper = styled.div`
  max-height: 50%;
  margin-left: 0.5rem;
`

function isDisabled(props: Partial<IButton>) {
	const backgroundColorGray = 'background-color: gray;'
	const backgroundColorWithHover = `
		background-color: ${primaryColor};
        cursor: pointer;
		&:hover {
    		background-color: ${secondaryColor};
    		transition: background-color 0.2s;
		}
`
	return props.disabled ? backgroundColorGray : backgroundColorWithHover
}

const ButtonWrapper = styled.button`
  margin-top: 1em;
  padding: 0.5em 2em;
  border: none;
  border-radius: 0.25em;
  font-size: 1.25em;
  color: white;
  cursor: pointer;

  ${isDisabled}
`
