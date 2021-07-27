import { Form, Formik } from 'formik'
import { ContactForm as IContactForm } from 'shared/interfaces/ContactFormInterface'
import { TextArea } from '../../../components/html/TextArea'
import { Button } from 'components/html/Button'
import { Input } from '../../../components/html/Input'
import { toast } from 'react-toastify'
import Validations from 'shared/validations/Validations'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import styled from 'styled-components'
import { primaryColor, primaryFont, secondaryFont } from 'shared/styles/GlobalStyle'

export const ContactForm = () => {
	const handleSubmit = async (values: IContactForm) => {
		try {
			await CodicAPIService.sendContactEmail(values)
			toast.success('✔️ Tack för ditt meddelande. Vi kommer att återkoppla till dig inom snar tid.')
		} catch (error) {
			toast.error('Ett fel uppstod')
			console.log(error)
		}
	}

	return (
		<Wrapper>
			<MainParagraph>Kom i kontakt!</MainParagraph>
			<SubParagraph>
				Vi svarar gärna på frågor angående IT-konsulter, utbildare eller andra eventuella samarbeten i Göteborg. <br />
				Fyll gärna i formuläret här nedan eller hör av dig direkt till någon av våra medarbetare så återkopplar vi så fort som möjligt.
			</SubParagraph>
			<Formik
				initialValues={{ name: '', email: '', subject: '', message: '' }}
				validationSchema={Validations.contactFormValidation}
				onSubmit={(values, actions) => { handleSubmit(values) && actions.resetForm() }}>
				<Form autoComplete="off">
					<Input name='name' label='Namn' type='text' required style={{ width: '100%' }} />
					<Input name='email' label='E-postadress' type='email' required style={{ width: '100%' }} />
					<Input name='subject' label='Ärende' type='text' required style={{ width: '100%' }} />
					<br />
					<TextArea name='message' type='textarea' placeholder='Meddelande' />
					<Button text='Skicka' />
				</Form>
			</Formik>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 60%;
	margin: 0 auto;
	padding: 5%;
`

const MainParagraph = styled.p`
	font-family: ${primaryFont};
	color: ${primaryColor};
	font-weight: 700;
	font-size: 32px;
	line-height: 1em;
	font-weight: 400;
	font-style: normal;
	font-size: 115px;
	letter-spacing: 0em;
	line-height: .9em;
	text-transform: none;
`

const SubParagraph = styled.p`
	font-family: ${secondaryFont};
	font-size: 16px;
	line-height: 1.6em;
	font-weight: 400;
	font-style: normal;
	font-size: 19px;
	letter-spacing: 0em;
	line-height: 1.8em;
	text-transform: none;
	color: #212121;
`


