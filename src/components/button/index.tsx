import { FC } from 'react'
import styled from 'styled-components'
import { translate } from '../../functions/translate'
import { IButton } from './types'

export const Button: FC<IButton> = (props: IButton) => {
	return (
		<ButtonWrapper onClick={props.onClick}>
			{translate(props.text)}
		</ButtonWrapper>
	)
}

const ButtonWrapper = styled.button`
  min-width: 4rem;
  height: 2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #263746;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #585d72;
    transition: background-color 0.2s;
  }
`
