import { useState } from 'react'
import { useHistory } from 'react-router'
import { Formik, Form } from 'formik'
import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import { CareerInterface } from 'shared/interfaces/CareerInterface'
import Validations from 'shared/validations/Validations'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import RoutingPath from 'routes/RoutingPath'

export const ApplicationForm = (props: { career: CareerInterface }) => {
	const [submitting, setSubmitting] = useState<boolean>(false)
	const history = useHistory()

	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		career: props.career._id
	}

	const sendApplicationToDB = async (values: any) => {
		setSubmitting(true)
		console.log('Du vill skicka följande till databasen', values)
		try {
			await CodicAPIService.createApplyforCareer(values)
		} catch (error) {
			console.log(error)
		}
		setSubmitting(false)
		history.push(RoutingPath.careerView)
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={sendApplicationToDB}
			validationSchema={Validations.applicationFormValidation}
		>
			<Form autoComplete='off'>
				<h2> Ansök till tjänsten </h2>
				<Input name='firstName' label='Förnamn' style={{ width: '100%' }} />
				<Input name='lastName' label='Efternamn' style={{ width: '100%' }} />
				<Input name='phone' label='Telefon' type='tel' style={{ width: '100%' }} />
				<Input name='email' label='E-post' type='email' style={{ width: '100%' }} />
				<br />
				<Button disabled={submitting} text={submitting ? 'Kontaktar databasen...'
					: 'Skicka ansökan'} />
			</Form>
		</Formik>
	)
}