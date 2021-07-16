import { FC } from 'react'
import { Spinner } from 'components/Spinner'
import { MouseEvent } from 'react'
import { secondaryColorDark } from '../../shared/styles/GlobalStyle'
import styled from 'styled-components'

export interface IButton {
	text: string
	onClick?: (event: MouseEvent) => void
	textLength?: number
	isLoading?: boolean
	disabled?: boolean
}

export const Button: FC<IButton> = (props: IButton) => {
	const { text, onClick, isLoading, disabled } = props
	return (
		<ButtonWrapper onClick={onClick} disabled={disabled} textLength={text.length}>
			<Span>{text}</Span>
			{isLoading &&
				<SpinnerWrapper>
					<Spinner height='26' width='26' />
				</SpinnerWrapper>
			}
		</ButtonWrapper>
	)
}


function isDisabled(props: Partial<IButton>) {
	const backgroundColorGray = 'background-color: Fgray;'
	const backgroundColorWithHover = `
		background-color: ${secondaryColorDark};
        cursor: pointer;
`
	return props.disabled ? backgroundColorGray : backgroundColorWithHover
}


const SpinnerWrapper = styled.div`
  max-height: 50%;
  margin-left: 0.5rem;
`

const Span = styled.span``

const ButtonWrapper = styled.button`
	width: calc(${props => props.textLength}em + 1em);
	height: 2rem;
	color: white;
	border: none;
	${isDisabled};
	outline: none;
	transition: background-color 0.2s;
	text-transform: uppercase;
	letter-spacing: 1px;
	border-radius: 10px;
	font-weight: bold;
	cursor: pointer;
	display: inline-block;
	position: relative;

	${Span} {
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.3s;
	}
	
	&:hover ${Span} {
		padding-right: 20px;
	}


	${Span}:after {
		content: '»';
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	}

	&:hover ${Span}:after {
		opacity: 1;
		right: 0;
	}

`

























































