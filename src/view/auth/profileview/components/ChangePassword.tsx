import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import { Form, Formik } from 'formik'
import { useContext } from 'react'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { IChangePassword } from 'shared/interfaces/UserInterface'
import { UserContext } from 'shared/providers/UserProvider'



export const ChangePassword = () => {
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
				DIN NUVARANDE E-POSTADRESS ÄR ARASTO.SAHBAEI@GMAIL.COM <br />
				<Input name='password' label='Nuvarande lösenord' type='password' />
				<Input name='newPassword' label='Nytt lösenord' type='password' />
				<Button text='Uppdatera lösenord' />
			</Form>
		</Formik>
	)
}
