import { Form, Formik } from 'formik'
import { ContactForm as IContactForm } from 'shared/interfaces/ContactFormInterface'
import { TextArea } from '../../../components/html/TextArea'
import { Button } from 'components/html/Button'
import { Input } from '../../../components/html/Input'
import Validations from 'shared/validations/Validations'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { toast } from 'react-toastify'

export const ContactForm = () => {
	const handleSubmit = async (values: IContactForm) => {
		try {
			await CodicAPIService.sendContactEmail(values)
			toast.success('✔️ Tack för ditt meddelande. Vi kommer att återkoppla till dig inom snar tid.')
		} catch (error) {
			console.log(error)
		}
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
			</Form>
		</Formik>
	)
}


