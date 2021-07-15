import * as Yup from 'yup'

const contactFormValidation =
	Yup.object({
		name: Yup.string()
			.min(2, 'Måste vara minst 2 tecken långt')
			.required('Krävs'),
		email: Yup.string()
			.email('Ogiltig email adress')
			.required('Krävs'),
		subject: Yup.string()
			.min(2, 'Måste vara minst 2 tecken långt')
			.required('Krävs'),
		message: Yup.string()
			.min(15, 'Måste vara minst 15 tecken långt')
			.required('Krävs'),
	})

export default {
	contactFormValidation
}