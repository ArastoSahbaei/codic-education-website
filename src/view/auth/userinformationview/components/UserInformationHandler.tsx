import { Input } from 'components/html/Input'
import { Form, Formik } from 'formik'
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'

export const UserInformationHandler = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const handleSubmit = (x: any) => {
		console.log(x)
	}

	return (
		<>
			<p>Användaruppgifter</p> <br />
			<Formik
				initialValues={{
					createdAt: authenticatedUser.createdAt,
					email: authenticatedUser.email,
					username: authenticatedUser.username
				}}
				onSubmit={values => { handleSubmit(values) }}>
				<Form>
					<Input name='createdAt' label='Medlem sedan:' type='text' disabled />
					<Input name='email' label='Email' type='text' disabled />
					<Input name='username' label='Användarnamn' type='text' disabled />
				</Form>
			</Formik>
			{/* TODO: <p>Inaktivera kontot</p> */}
			<hr />

		</ >
	)
}
