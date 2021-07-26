import { IChangePassword } from 'shared/interfaces/UserInterface'
import { Form, Formik } from 'formik'
import { UserContext } from 'shared/providers/UserProvider'
import { useContext } from 'react'
import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export const ChangePasswordHandler = () => {
	const [authenticatedUser] = useContext(UserContext)

	const handleSubmit = async (values: IChangePassword) => {
		try {
			CodicAPIService.updatePassword({ newPassword: values.newPassword, userId: authenticatedUser._id })
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Formik
			initialValues={{ password: '', newPassword: '' }}
			onSubmit={(values) => handleSubmit(values)}>
			<Form>
				<p>Byte av lösenord</p>
				<Input name='password' label='Nuvarande lösenord' type='password' />
				<Input name='newPassword' label='Nytt lösenord' type='password' />
				<Button text='Uppdatera lösenord' />
			</Form>
		</Formik>
	)
}
