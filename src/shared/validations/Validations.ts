import * as Yup from 'yup'

const contactFormValidation =
	Yup.object({
		name: Yup.string()
			.min(2, 'Ange ditt namn')
			.required('Detta fält är obligatoriskt.'),
		email: Yup.string()
			.email('Ogiltig email adress')
			.required('Detta fält är obligatoriskt.'),
		subject: Yup.string()
			.min(2, 'Ange vad ärendet gäller. Ex: Ang. utbildning')
			.required('Detta fält är obligatoriskt.'),
		message: Yup.string()
			.min(15, 'Ditt meddelande är för kort')
			.required('Detta fält är obligatoriskt.'),
	})

const newsLetterSubscriptionValidation =
	Yup.object({
		email: Yup.string()
			.email('Ogiltig email adress')
			.required('Detta fält är obligatoriskt.'),
	})

const applicationFormValidation =
	Yup.object({
		firstName: Yup.string()
			.required('Detta fält är obligatoriskt.'),
		lastName: Yup.string()
			.required('Detta fält är obligatoriskt.'),
		email: Yup.string()
			.email('Ogiltig email adress')
			.required('Detta fält är obligatoriskt.'),
		phone: Yup.string()
			.required('Detta fält är obligatoriskt.'),
	})

const adminCareerFormValidation =
	Yup.object({
		title: Yup.string()
			.required('Detta fält är obligatoriskt.'),
		jobType: Yup.string()
			.required('Detta fält är obligatoriskt.'),
		location: Yup.string()
			.required('Detta fält är obligatoriskt.'),
		description: Yup.string()
			.required('Detta fält är obligatoriskt.'),
		lastDate: Yup.string()
			.required('Detta fält är obligatoriskt.')
	})

export default {
	contactFormValidation,
	newsLetterSubscriptionValidation,
	applicationFormValidation,
	adminCareerFormValidation
}