import { Form, Formik } from 'formik'
import Validations from 'shared/validations/Validations'
import { PrimaryButton } from '../../../components/button/PrimaryButton'
import { TextArea } from './TextArea'
import { TextInput } from './TextInput'

export const ContactForm = () => {

	return (
		<Formik
			initialValues={{ firstName: '', lastName: '', email: '', message: '' }}
			validationSchema={Validations.contactFormValidation}
			onSubmit={values => {
				// TODO: Write send message function here
				alert(JSON.stringify(values, null, 2))
			}}>
			<Form>
				<TextInput name="name" type='text' placeholder='Namn' />
				<TextInput name='email' type='email' placeholder='E-Mail' />
				<TextInput name='subject' type='text' placeholder='Ämne' />
				<TextArea name='message' type='textarea' placeholder='Tveka inte att höra av dig till oss vid funderingar!' />
				<PrimaryButton type='submit' text='Skicka' />
			</Form>
		</Formik>
	)
}


