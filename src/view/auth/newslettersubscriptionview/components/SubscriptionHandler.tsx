import { Input } from 'components/html/Input'
import { Form, Formik } from 'formik'
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'

export const SubscriptionHandler = () => {
	const [authenticatedUser] = useContext(UserContext)

	return (
		<Formik
			initialValues={{ newsLetterSubscription: authenticatedUser.newsLetterSubscription }}
			onSubmit={values => console.log(values)} >
			<Form>
				<Input name='newsLetterSubscription.receiveNewsLetters' label='Nyhetsprenumeration' type='text' />
			</Form>
		</Formik >
	)
}
