import { Form, Formik, useField } from 'formik'
import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { PrimaryButton } from '../../../components/button/PrimaryButton'
import { secondaryColor } from '../../../shared/styles/GlobalStyle'

const required = 'Krävs'
const minLengthName = 2
const minLengthMessage = 15

const minLength = (length: number) => {
	return `Måste vara minst ${ length } tecken långt`
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
				// TODO: Write send message function here
				alert(JSON.stringify(values, null, 2))
			} }>
			<Form>
				<TextInput name='firstName' type='text' placeholder='Förnamn'/>
				<TextInput name='lastName' type='text' placeholder='Efternamn'/>
				<TextInput name='email' type='email' placeholder='E-Post'/>
				<TextArea name='message' type='textarea' placeholder='Meddelande'/>
				
				<br/>
				
				<div style={ {textAlign: 'center'} }>
					<PrimaryButton type='submit' text='Skicka'/>
				</div>
			</Form>
		
		</Formik>
	)
}

const TextInput = ({...props}: any) => {
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

const TextArea = ({...props}: any) => {
	const [field, meta] = useField(props)
	return (
		<>
			<label htmlFor={ props.name }> </label>
			<StyledTextArea
				id={ props.name } { ...field } { ...props }
				rows={ 8 }
				placeholder='Tveka inte att höra av dig till oss vid funderingar!'/>
			
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

const StyledTextArea = styled.textarea`
  font-family: AlegreyaSansRegular, sans-serif;
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
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`
