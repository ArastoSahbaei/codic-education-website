import { Form, Formik } from 'formik'
import { ContactForm as IContactForm } from 'shared/interfaces/ContactFormInterface'
import { PrimaryButton } from '../../../components/button/PrimaryButton'
import { TextInput } from './TextInput'
import { TextArea } from './TextArea'
import Validations from 'shared/validations/Validations'
import CodicAPIService from 'shared/api/services/CodicAPIService'

export const ContactForm = () => {
	const handleSubmit = async (values: IContactForm) => {
		await CodicAPIService.sendContactEmail(values)
	}

	return (
		<Formik
			initialValues={{ name: '', email: '', subject: '', message: '' }}
			validationSchema={Validations.contactFormValidation}
			onSubmit={(values, actions) => { handleSubmit(values) && actions.resetForm() }}>
			<Form>
				<TextInput name='name' type='text' placeholder='Namn' />
				<TextInput name='email' type='email' placeholder='E-Mail' />
				<TextInput name='subject' type='text' placeholder='Ämne' />
				<TextArea name='message' type='textarea' placeholder='Tveka inte att höra av dig till oss vid funderingar!' />
				<PrimaryButton type='submit' text='Skicka' />
			</Form>
		</Formik>
	)
}


