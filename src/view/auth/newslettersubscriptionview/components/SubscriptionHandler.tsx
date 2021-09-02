import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import { Form, Formik } from 'formik'
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'

export const SubscriptionHandler = () => {
	const [authenticatedUser] = useContext(UserContext)

	const subcriptionHandler = () => {
		return authenticatedUser.newsLetterSubscription.receiveNewsLetters
			? <Button text={'Avsluta prenumeration'} />
			: <Button text={'påbörja prenumeration'} />
	}

	return (
		<>
			{subcriptionHandler()}
			<Formik
				initialValues={{ newsLetterSubscription: authenticatedUser.newsLetterSubscription }}
				onSubmit={values => console.log(values)} >
				{/* 	<Form>
					<Input name='newsLetterSubscription.receiveNewsLetters' label='Nyhetsprenumeration' type='text' />
				</Form> */}
			</Formik >
		</>
	)
}
