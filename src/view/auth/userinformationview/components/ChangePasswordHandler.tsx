import { IChangePassword } from 'shared/interfaces/UserInterface'
import { Form, Formik } from 'formik'
import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import { useAuthentication } from 'hooks/useAuthentication'

export const ChangePasswordHandler = () => {
	const { updatePassword } = useAuthentication()

	return (
		<Formik
			initialValues={{ password: '', newPassword: '' }}
			onSubmit={(values) => updatePassword(values.newPassword)}>
			<Form>
				<h1>BYTE AV LÖSENORD</h1>
				<Input name='password' label='Nuvarande lösenord' type='password' />
				<Input name='newPassword' label='Nytt lösenord' type='password' /> <br />
				<Button text='Uppdatera lösenord' />
			</Form>
		</Formik>
	)
}
