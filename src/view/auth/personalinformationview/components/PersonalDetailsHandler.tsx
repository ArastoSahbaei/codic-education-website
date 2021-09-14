import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import { Form, Formik } from 'formik'
import { useAuthentication } from 'hooks/useAuthentication'
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'

export const PersonalDetailsHandler = () => {
	const [authenticatedUser] = useContext(UserContext)
	const { updatePersonalInformation } = useAuthentication()

	return (
		<Formik
			initialValues={{ personalDetails: authenticatedUser.personalDetails }}
			/* validationSchema={{}} */
			onSubmit={(values) => { updatePersonalInformation(values) }}>
			<Form>
				<h1>PERSONUPPGIFTER</h1> <br />
				<Input name='personalDetails.firstName' type='text' label='Namn' />
				<Input name='personalDetails.lastName' type='text' label='Efternamn' />
				<Input name='personalDetails.country' type='text' label='Land' />
				<Input name='personalDetails.adress' type='text' label='Address' />
				<Input name='personalDetails.secondaryAdress' type='text' label='Sekundär Address' />
				<Input name='personalDetails.zipCode' type='text' label='Postnummer' />
				<Input name='personalDetails.county' type='text' label='Län/Kommun' />
				<Input name='personalDetails.postOffice' type='text' label='Postort' />
				<Input name='personalDetails.phone' type='text' label='Telefon' />
				<Input name='personalDetails.secondaryPhone' type='text' label='Sekundär Telefon' />
				<br />
				<Button text='Spara' />
			</Form>
		</Formik>
	)
}
