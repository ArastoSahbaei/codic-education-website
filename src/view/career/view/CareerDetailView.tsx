import { useLocation } from "react-router-dom"
import { CareerCardInterface } from "shared/interfaces/CareerInterface"
import { Form, Formik } from 'formik'
import { TextArea } from '../../../components/html/TextArea'
import { Button } from 'components/html/Button'
import { Input } from '../../../components/html/Input'
import { primaryColor, primaryFont, secondaryFont } from 'shared/styles/GlobalStyle'
import Validations from 'shared/validations/Validations'
import styled from 'styled-components'

export const CareerDetailView = () => {
    const location = useLocation <CareerCardInterface>() 
    
    return (
        <Wrapper>
			<MainParagraph>{}</MainParagraph>
			<SubParagraph>
				Personal information
			</SubParagraph>
			<Formik
				initialValues={{ firstname: '', lastname: '', email: '', phonenumber: '', message: '', cvFil: '', otherfile: '' }}
				validationSchema={Validations.contactFormValidation}
				onSubmit={(values, actions) => { (values) && actions.resetForm() }}>
				<Form autoComplete="off">
					<Input name='firstname' label='Förnamn' type='text' required style={{ width: '100%' }} />
					<Input name='lastname' label='Efternamn' type='text' required style={{ width: '100%' }} />
					<Input name='email' label='E-postadress' type='email' required style={{ width: '100%' }} />
					<Input name='phonenumber' label='Mobilnummer' type='number' required style={{ width: '100%' }} />
					<Input name='cv' label='CV' type='file' required style={{ width: '100%' }} />
					<Input name='otherfile' label='Annan fil' type='file' required style={{ width: '100%' }} />
					<br />
					<TextArea name='coverletter' type='textarea' placeholder='Personligt brev' />
					<Button text='Skicka' />
				</Form>
			</Formik>
		</Wrapper>
    )
}


const Wrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	padding: 5%;
	@media (max-width: 1050px) {
		width: 90%;
	}
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
	@media (max-width: 1050px) {
		font-size: 3rem;
		text-align: center;
		margin-top: 40vh;
	}
`

const SubParagraph = styled.p`
	font-family: ${secondaryFont};
	font-size: 16px;
	line-height: 1.6em;
	font-weight: 400;
	font-style: normal;
	font-size: 40px;
	letter-spacing: 0em;
	line-height: 1.8em;
	text-transform: none;
	color: #212121;
    text-align: center;
`


