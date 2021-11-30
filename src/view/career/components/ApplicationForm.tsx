import { useState } from 'react'
import { Formik, Form } from 'formik'
import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import { CareerInterface } from 'shared/interfaces/CareerInterface'
import Validations from 'shared/validations/Validations'

export const ApplicationForm = (props: { career: CareerInterface }) => {
	const [submitting, setSubmitting] = useState<boolean>(false)

	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		career: props.career._id
	}

	const sendApplicationToDB = (values: any) => {
		setSubmitting(true)
		console.log('Du vill skicka följande till databasen', values)

		setSubmitting(false)
	}

	return (

		<Formik
			initialValues={initialValues}
			onSubmit={sendApplicationToDB}
			validationSchema={Validations.applicationFormValidation}
		>
			<Form autoCorrect='off'>
				<h2> Ansök till tjänsten </h2>
				<Input name='firstName' label='Förnamn' style={{width: '100%'}} />
				<Input name='lastName' label='Efternamn' style={{width: '100%'}} />
				<Input name='phone' label='Telefon' type='tel' style={{width: '100%'}} />
				<Input name='email' label='E-post' type='email' style={{width: '100%'}} />
                <br />
				<Button disabled={submitting} text={submitting ? 'Kontaktar databasen...'
					: 'Skicka ansökan'} />
			</Form>

		</Formik>


	)
}