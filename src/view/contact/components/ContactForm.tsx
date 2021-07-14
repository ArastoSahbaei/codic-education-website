import { Form, Formik, useField } from 'formik'
import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'

const required = 'Krävs'
const minLengthName = 2
const minLengthMessage = 15

const minLength = (length: number) => {
	return `Måste vara minst ${ length } tecken långt`
}

const TextInput = ({label, ...props}: any) => {
	const [field, meta] = useField(props)
	return (
		<>
			<Label htmlFor={ props.id || props.name }><p>{ label }</p></Label>
			<input className='text-input' { ...field } { ...props } />
			{ meta.touched && meta.error ? (
				<StyledErrorMessage>{ meta.error }</StyledErrorMessage>
			) : null }
		</>
	)
}

export const ContactForm = () => {
	
	return (
		<Formik
			initialValues={ {firstName: '', lastName: '', email: '', message: ''} }
			validationSchema={ Yup.object({
				firstName: Yup.string()
					.min(minLengthName, minLength(minLengthName))
					.required(required),
				lastName: Yup.string()
					.min(minLengthName, minLength(minLengthName))
					.required(required),
				email: Yup.string()
					.email('Ogiltig email adress')
					.required(required),
				message: Yup.string()
					.min(minLengthMessage, minLength(minLengthMessage))
					.required(required),
			}) }
			onSubmit={ values => {
				alert(JSON.stringify(values, null, 2))
			} }>
			<Form>
				<TextInput label='Förnamn' name='firstName' type='text'/>
				<TextInput label='Efternamn' name='lastName' type='text'/>
				<TextInput label='E-Post' name='email' type='email'/>
				<TextInput label='Meddelande' name='message' type='text'/>
				
				<br/>
				
				<button type='submit'>Skicka</button>
			</Form>
		
		</Formik>
	)
}

const Input = styled.input`

`
const StyledErrorMessage = styled.div`
  font-size: 0.8em;
  color: red;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`

const Label = styled.label`
  font-weight: bold;
`
