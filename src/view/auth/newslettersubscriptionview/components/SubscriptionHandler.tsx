import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import { Form, Formik } from 'formik'
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'

export const SubscriptionHandler = () => {
	const [authenticatedUser] = useContext(UserContext)

	const isSubcribing = () => {
		return <>
			<p>Du prenumerar till vårt nyhetsbrev</p>
			<Button text={'Avsluta prenumeration'} />
		</>
	}

	const notSubscribing = () => {
		return <>
			<p>Du saknar prenumeration till vårt nyhetsbrev</p>
			<Button text={'starta prenumeration'} />
		</>
	}

	const subcriptionHandler = () => {
		return authenticatedUser.newsLetterSubscription.receiveNewsLetters
			? isSubcribing()
			: notSubscribing()
	}

	return (
		<>
			{subcriptionHandler()}
			{/* 			<Formik
				initialValues={{ newsLetterSubscription: authenticatedUser.newsLetterSubscription }}
				onSubmit={values => console.log(values)} >
				<Form>
					<Input name='newsLetterSubscription.receiveNewsLetters' label='Nyhetsprenumeration' type='text' />
				</Form>
			</Formik > */}
		</>
	)
}
