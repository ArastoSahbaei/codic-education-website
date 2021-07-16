import { Form, Formik } from 'formik'
import { ContactForm as IContactForm } from 'shared/interfaces/ContactFormInterface'
import { PrimaryButton } from '../../../components/button/PrimaryButton'
import { Input } from '../../../components/html/Input'
import { TextArea } from '../../../components/html/TextArea'
import Validations from 'shared/validations/Validations'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { Button } from 'components/html/Button'

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
				<Input name='name' type='text' placeholder='Namn' />
				<Input name='email' type='email' placeholder='E-Mail' />
				<Input name='subject' type='text' placeholder='Ämne' />
				<TextArea name='message' type='textarea' placeholder='Tveka inte att höra av dig till oss vid funderingar!' />
				<Button text='Skicka' />
				{/* <PrimaryButton type='submit' text='Skicka' /> */}
			</Form>
		</Formik>
	)
}


