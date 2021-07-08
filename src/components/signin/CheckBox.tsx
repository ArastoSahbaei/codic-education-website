import React from 'react'
import styled from 'styled-components'
import { primaryColor, secondaryColor } from '../../shared/styles/GlobalStyle'

interface CheckboxProps {
	className?: string
	checked: boolean
}

export const Checkbox = ({className, checked}: CheckboxProps) => {
	return (
		<CheckboxContainer className={ className }>
			<HiddenCheckbox checked={ checked }/>
			<StyledCheckbox checked={ checked }>
				<Icon viewBox="0 0 24 24">
					<polyline points="20 6 9 17 4 12"/>
				</Icon>
			</StyledCheckbox>
		</CheckboxContainer>
	)
}

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-top: 0.4em;
`

const Icon = styled.svg`
  fill: none;
  stroke: ${ primaryColor };
  stroke-width: 4px;
  border-radius: 4px;
`

const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
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
  transition: all 150ms;
  border: 4px solid ${ secondaryColor };

  ${ HiddenCheckbox }:focus + & {
    box-shadow: 0 0 0 3px ${ primaryColor };
  }

  ${ Icon } {
    visibility: ${ props => (props.checked ? 'visible' : 'hidden') }
  }
`
