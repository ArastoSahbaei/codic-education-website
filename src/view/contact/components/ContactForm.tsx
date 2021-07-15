import { Form, Formik } from 'formik'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import Validations from 'shared/validations/Validations'
import { PrimaryButton } from '../../../components/button/PrimaryButton'
import { TextArea } from './TextArea'
import { TextInput } from './TextInput'

export const ContactForm = () => {

	const handleSubmit = async (values: any) => {
		await CodicAPIService.sendContactEmail(values)
	}

	return (
		<Formik
			initialValues={{}}
			validationSchema={Validations.contactFormValidation}
			onSubmit={values => { handleSubmit(values) }}>
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


