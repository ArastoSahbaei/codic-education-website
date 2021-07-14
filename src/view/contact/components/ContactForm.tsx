import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { PrimaryButton } from '../../../components/button/PrimaryButton'
import { TextArea } from './TextArea'
import { TextInput } from './TextInput'

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
				
				<div style={ {textAlign: 'center'} }>
					<PrimaryButton type='submit' text='Skicka'/>
				</div>
			</Form>
		
		</Formik>
	)
}


