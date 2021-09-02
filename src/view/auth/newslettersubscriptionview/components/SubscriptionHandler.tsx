import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import { Form, Formik } from 'formik'
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'

export const SubscriptionHandler = () => {
	const [authenticatedUser] = useContext(UserContext)

	const cancelSubscription = () => {
		return <Button
			text={'Avsluta prenumeration'}
			onClick={() => console.log('cancel subscription')} />
	}

	const startSubscription = () => {
		return <Button
			text={'påbörja prenumeration'}
			onClick={() => console.log('start subscription')} />
	}

	return (
		<Formik
			initialValues={{ newsLetterSubscription: authenticatedUser.newsLetterSubscription }}
			onSubmit={values => console.log(values)} >
			<Form>
				<Input name='newsLetterSubscription.receiveNewsLetters' label='Nyhetsprenumeration' type='text' />
				{
					authenticatedUser.newsLetterSubscription.receiveNewsLetters
						? cancelSubscription()
						: startSubscription()
				}
			</Form>
		</Formik >
	)
}
