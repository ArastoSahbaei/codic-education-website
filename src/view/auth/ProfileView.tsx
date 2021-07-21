import { UserPersonalDetails } from 'shared/interfaces/UserInterface'
import { Form, Formik } from 'formik'
import { UserContext } from 'shared/providers/UserProvider'
import { useContext } from 'react'
import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import { toast } from 'react-toastify'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export const ProfileView = () => {
	const [authenticatedUser] = useContext(UserContext)

	const handleSubmit = async (values: UserPersonalDetails) => {
		try {
			await CodicAPIService.updateUser(authenticatedUser._id, values)
			toast.success('Information uppdaterad')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<Formik
				initialValues={{ personalDetails: authenticatedUser.personalDetails }}
				/* validationSchema={{}} */
				onSubmit={(values) => { handleSubmit(values) }}>
				<Form>
					<Input name='personalDetails.firstName' type='text' placeholder='Firstname' />
					<Input name='personalDetails.lastName' type='text' placeholder='lastName' />
					<Input name='personalDetails.country' type='text' placeholder='country' />
					<Input name='personalDetails.adress' type='text' placeholder='adress' />
					<Input name='personalDetails.secondaryAdress' type='text' placeholder='secondaryAdress' />
					<Input name='personalDetails.zipCode' type='text' placeholder='zipCode' />
					<Input name='personalDetails.county' type='text' placeholder='county' />
					<Input name='personalDetails.postOffice' type='text' placeholder='postOffice' />
					<Input name='personalDetails.phone' type='text' placeholder='phone' />
					<Input name='personalDetails.secondaryPhone' type='text' placeholder='secondaryPhone' />
					<Button text='Spara' />
				</Form>

			</Formik>

			<h1>1. data and update info</h1>
			<h1>2. change password</h1>
			<h1>3. inactivate account</h1>
			<button onClick={() => console.log(authenticatedUser.personalDetails)}>info</button>
		</div>
	)
}
