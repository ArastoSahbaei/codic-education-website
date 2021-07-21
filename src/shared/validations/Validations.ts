import * as Yup from 'yup'

const contactFormValidation =
	Yup.object({
		name: Yup.string()
			.min(2, 'Måste vara minst 2 tecken långt')
			.required('Detta fält är obligatoriskt.'),
		email: Yup.string()
			.email('Ogiltig email adress')
			.required('Detta fält är obligatoriskt.'),
		subject: Yup.string()
			.min(2, 'Måste vara minst 2 tecken långt')
			.required('Detta fält är obligatoriskt.'),
		message: Yup.string()
			.min(15, 'Måste vara minst 15 tecken långt')
			.required('Detta fält är obligatoriskt.'),
	})

export default {
	contactFormValidation
}