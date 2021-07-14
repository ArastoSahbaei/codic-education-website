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
				name: Yup.string()
					.min(minLengthName, minLength(minLengthName))
					.required(required),
				email: Yup.string()
					.email('Ogiltig email adress')
					.required(required),
				subject: Yup.string()
					.min(minLengthName, minLength(minLengthName))
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
				<TextInput name="name" type='text' placeholder='Namn'/>
				<TextInput name='email' type='email' placeholder='E-Mail'/>
				<TextInput name='subject' type='text' placeholder='Ämne'/>
				<TextArea name='message' type='textarea' placeholder='Tveka inte att höra av dig till oss vid funderingar!'/>
				
				<div style={ {textAlign: 'center'} }>
					<PrimaryButton type='submit' text='Skicka'/>
				</div>
			</Form>
		
		</Formik>
	)
}


