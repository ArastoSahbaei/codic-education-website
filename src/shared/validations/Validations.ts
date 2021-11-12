import CodicAPIService from 'shared/api/services/CodicAPIService'
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
			.required('Detta fält är obligatoriskt.')
			.test(
				'email-backend-validation', 
				'Epost-adressen är redan registrerad', 
				async function (value) {
					// Data is true if post exists and false if not
					const { data } = await CodicAPIService.checkIfEmailExists({email: value})
					console.log(data)
					return !data
				}),
		
	})
			

export default {
	contactFormValidation,
	newsLetterSubscriptionValidation
}