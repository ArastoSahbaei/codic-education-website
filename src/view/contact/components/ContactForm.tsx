import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'

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
				alert(JSON.stringify(values, null, 2))
			} }>
			<Form>
				<label htmlFor='firstName'><p>Förnamn</p></label>
				<Field name='firstName' type='text'/>
				<ErrorMessage name='firstName'/>
				
				<label><p>Efternamn</p></label>
				<Field name='lastName' type='text'/>
				<ErrorMessage name='lastName'/>
				
				<label><p>E-Post</p></label>
				<Field name='email' type='email'/>
				<ErrorMessage name='email'/>
				
				<label><p>Meddelande</p></label>
				<Field name='message' type='text'/>
				<ErrorMessage name='message'/>
				
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

  &:before {
    content: "❌ ";
    font-size: 0.7em;
  }
`
