import { FC } from 'react'
import { Spinner } from 'components/Spinner'
import { MouseEvent } from 'react'
import { primaryColor, secondaryColor } from '../../shared/styles/GlobalStyle'
import styled from 'styled-components'

export interface IButton {
	text: string
	onClick?: (event: MouseEvent) => void
	isLoading?: boolean
	disabled?: boolean
}

export const Button: FC<IButton> = (props: IButton) => {
	const { text, onClick, isLoading, disabled } = props
	return (
		<ButtonWrapper onClick={onClick} disabled={disabled} text={text} isLoading={isLoading}>
			<Span>{isLoading || text}</Span>
			{isLoading && <Spinner height='26' width='26' />}
		</ButtonWrapper>
	)
}


function isDisabled(props: Partial<IButton>) {
	return props.disabled && `
	background-color: #b2b2b2 !important;
	color: black !important;
	cursor: not-allowed !important;
	`
}

const Span = styled.span``

const ButtonWrapper = styled.button<IButton>`
	display: inline-block;
	width: calc(${props => props.text?.length}em + 1em);
	height: 2rem;
	color: white;
	border: none;
	${isDisabled}	
	background-color: ${props => props.isLoading ? secondaryColor : primaryColor};
	outline: none;
	transition: background-color 0.2s;
	text-transform: uppercase;
	letter-spacing: 1px;
	border-radius: 30px;
	font-weight: bold;
	cursor: pointer;

	${Span} {
		display: inline-block;
		position: relative;
		transition: 0.3s;
	}
	
	&:hover ${Span} {
		padding-right: ${props => props.isLoading ? '0px;' : '20px;'}
	}


	${Span}:after {
		content: '${props => props.isLoading ? '' : '»'}';
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