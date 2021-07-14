import { useFormik } from 'formik'
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
	
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		},
		validationSchema: Yup.object({
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
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		}
	})
	
	return (
		<form onSubmit={ formik.handleSubmit }>
			<label htmlFor='firstName'><p>Förnamn</p></label>
			<Input
				id='firstName'
				type='text'
				autoComplete='on'
				{...formik.getFieldProps('firstName')}
			/>
			{ formik.touched.firstName && formik.errors.firstName ? <div>{ formik.errors.firstName }</div> : null }
			
			<label><p>Efternamn</p></label>
			<Input
				id='lastName'
				type='text'
				autoComplete='on'
				{...formik.getFieldProps('lastName')}
			/>
			{ formik.touched.lastName && formik.errors.lastName ? <div>{ formik.errors.lastName }</div> : null }
			
			<label><p>E-Post</p></label>
			<Input
				id='email'
				type='email'
				autoComplete='on'
				{...formik.getFieldProps('email')}
			/>
			{ formik.touched.email && formik.errors.email ? <div>{ formik.errors.email }</div> : null }
			
			<label><p>Meddelande</p></label>
			<Input
				id='message'
				type='text'
				autoComplete='on'
				{...formik.getFieldProps('message')}
			/>
			{ formik.touched.message && formik.errors.message ? <div>{ formik.errors.message }</div> : null }
			<br/>
			
			<button type='submit'>Skicka</button>
		</form>
	)
}

const Input = styled.input`

`
