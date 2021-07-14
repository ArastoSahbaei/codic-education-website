import { useFormik } from 'formik'
import React from 'react'
import styled from 'styled-components'

const required = 'Krävs'
const minLength = (length: number) => {
	return `Måste vara minst ${ length } tecken långt`
}

interface Values {
	firstName: string
	lastName: string
	email: string
	message: string
}

const validate = (values: Values) => {
	const errors: Values = {
		firstName: '',
		lastName: '',
		email: '',
		message: ''
	}
	if (!values.firstName) {
		errors.firstName = required
	} else if (values.firstName.length < 2) {
		errors.firstName = minLength(2)
	}
	
	if (!values.lastName) {
		errors.lastName = required
	} else if (values.lastName.length < 2) {
		errors.lastName = minLength(2)
	}
	
	if (!values.email) {
		errors.email = required
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Ogiltig email adress'
	}
	
	if (!values.message) {
		errors.message = required
	} else if (values.message.length < 15) {
		errors.message = minLength(15)
	}
	
	return errors
}

export const ContactForm = () => {
	
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		}
	})
	
	return (
		<form onSubmit={ formik.handleSubmit }>
			<label htmlFor='firstName'><p>Förnamn</p></label>
			<Input
				id='firstName'
				name='firstName'
				type='text'
				autoComplete='on'
				onChange={ formik.handleChange }
				onBlur={formik.handleBlur}
				value={ formik.values.firstName }
			/>
			{ formik.touched.firstName && formik.errors.firstName ? <div>{ formik.errors.firstName }</div> : null }
			
			<label><p>Efternamn</p></label>
			<Input
				id='lastName'
				name='lastName'
				type='text'
				autoComplete='on'
				onChange={ formik.handleChange }
				onBlur={formik.handleBlur}
				value={ formik.values.lastName }
			/>
			{ formik.touched.lastName && formik.errors.lastName ? <div>{ formik.errors.lastName }</div> : null }
			
			<label><p>E-Post</p></label>
			<Input
				id='email'
				name='email'
				type='email'
				autoComplete='on'
				onChange={ formik.handleChange }
				onBlur={formik.handleBlur}
				value={ formik.values.email }
			/>
			{ formik.touched.email && formik.errors.email ? <div>{ formik.errors.email }</div> : null }
			
			<label><p>Meddelande</p></label>
			<Input
				id='message'
				name='message'
				type='text'
				autoComplete='on'
				onChange={ formik.handleChange }
				onBlur={formik.handleBlur}
				value={ formik.values.message }
			/>
			{ formik.touched.message && formik.errors.message ? <div>{ formik.errors.message }</div> : null }
			<br/>
			
			<button type='submit'>Skicka</button>
		</form>
	)
}

const Input = styled.input`

`
