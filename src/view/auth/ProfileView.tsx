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
			<p>Övriga uppgifter</p> <br />
			medlem sedan: tid
			email: x
			användarnamn: arasto
			Prenumerar på nyhetsbrev: true
			<hr />
			<Formik
				initialValues={{ personalDetails: authenticatedUser.personalDetails }}
				/* validationSchema={{}} */
				onSubmit={(values) => { handleSubmit(values) }}>
				<Form>
					<p>Dina personliga uppgifter</p> <br />
					<Input name='personalDetails.firstName' label='Namn' type='text' placeholder='Firstname' />
					<Input name='personalDetails.lastName' label='Efternamn' type='text' placeholder='lastName' />
					<Input name='personalDetails.country' label='Land' type='text' placeholder='country' />
					<Input name='personalDetails.adress' label='Address' type='text' placeholder='adress' />
					<Input name='personalDetails.secondaryAdress' label='Sekundär Address' type='text' placeholder='secondaryAdress' />
					<Input name='personalDetails.zipCode' type='text' label='Postnummer' placeholder='zipCode' />
					<Input name='personalDetails.county' type='text' label='Län/Kommun' placeholder='county' />
					<Input name='personalDetails.postOffice' type='text' label='Postort' placeholder='postOffice' />
					<Input name='personalDetails.phone' type='text' label='Telefon' placeholder='phone' />
					<Input name='personalDetails.secondaryPhone' label='Sekundär Telefon' type='text' placeholder='secondaryPhone' />
					<br />
					<Button text='Spara' />
				</Form>
			</Formik>
			<p>Byte av lösenord</p> <br />
			<p>ange befintligt lösenord</p>
			<p>ange nytt lösenord</p>
			<p>ange nytt lösenord</p>
			<button onClick={() => console.log(authenticatedUser.personalDetails)}>info</button>
			{/* TODO: Köphistorik */}
		</div>
	)
}
