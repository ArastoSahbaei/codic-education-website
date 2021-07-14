import { useFormik } from 'formik'
import React from 'react'
import styled from 'styled-components'

export const ContactForm = () => {
	
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		},
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
				value={ formik.values.firstName }
			/>
			<label><p>Efternamn</p></label>
			<Input
				id='lastName'
				name='lastName'
				type='text'
				autoComplete='on'
				onChange={ formik.handleChange }
				value={ formik.values.lastName }
			/>
			
			<label><p>E-Post</p></label>
			<Input
				id='email'
				name='email'
				type='email'
				autoComplete='on'
				onChange={ formik.handleChange }
				value={ formik.values.email }
			/>
			
			<label><p>Meddelande</p></label>
			<Input
				id='message'
				name='message'
				type='text'
				autoComplete='on'
				onChange={ formik.handleChange }
				value={ formik.values.message }
			/>
			<br/>
			
			<button type='submit'>Skicka</button>
		</form>
	)
}

const Input = styled.input`

`
