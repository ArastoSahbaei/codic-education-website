import { useField } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { secondaryColor } from '../../../shared/styles/GlobalStyle'

export const TextInput = ({...props}: any) => {
	const [field, meta] = useField(props)
	return (
		<>
			<label htmlFor={ props.name }> </label>
			<Input id={ props.name } type={ props.type }{ ...field } { ...props } autoComplete='on'/>
			
			{ meta.touched && meta.error ? (
				<StyledErrorMessage>{ meta.error }</StyledErrorMessage>
			) : null }
		</>
	)
}

const Input = styled.input`
  margin-bottom: 1.5em;
  padding: 0.15em;
  font-size: 1.0em;
  border: 4px solid ${ secondaryColor };
  border-radius: 0.5em;
  width: 100%
`

const StyledErrorMessage = styled.div`
  font-size: 0.8em;
  color: red;
  margin-top: -1.75em;
  margin-bottom: 0.5em;
`
