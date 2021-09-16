import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { StartNewsSubscriptionInterface } from 'shared/interfaces/UserInterface'
import { Form, Formik } from 'formik'
import { primaryFont } from 'shared/styles/GlobalStyle'
import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import styled from 'styled-components'
import { SucessfullNewsLetterSubscription } from './components/SucessfullNewsLetterSubscription'
import Validations from 'shared/validations/Validations'

export const NewsLetterSubscriptionForm = () => {
	const [didSubscribe, setDidSubscribe] = useState(false)
	const history = useHistory()

	const handleSubmit = async (data: StartNewsSubscriptionInterface) => {
		try {
			await CodicAPIService.createNewsLetterSubscription(data)
			setDidSubscribe(true)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		didSubscribe ? <SucessfullNewsLetterSubscription /> :
			<Wrapper>
				<MainParagraph>Vi revolutionerar utbildningsbranschen!</MainParagraph>
				<Paragraph>Som prenumerant på vårt nyhetsbrev är du först med att få reda på nya produkter, grymma limited editions och specialerbjudanden.</Paragraph>
				<Formik
					initialValues={{ email: '', receiveNewsLetters: true }}
					validationSchema={Validations.newsLetterSubscriptionValidation}
					onSubmit={(values) => handleSubmit(values)}>
					<Form>
						<Input style={{ width: '500px' }} name='email' label='Ange E-mail' type='text' /> <br />
						<Button text='Prenumerera' />
					</Form>
				</Formik>
				<SubParagraph>Du kan vara lugn, vi ogillar spam lika mycket som du gör och säljer aldrig din data vidare till tredje part. Läs mer om vår integritetspolicy </SubParagraph>
				<SubParagraph2 onClick={() => history.push('/information/integritetspolicy')}>här.</SubParagraph2>
			</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
   text-align: center;
`

const MainParagraph = styled.p`
	font-family: ${primaryFont} !important;
	font-size: 44px;
	font-weight: 700;
	margin: .8em 0 .4em;
`

const Paragraph = styled.p`
	font-size: 18px;
	line-height: 22px;
	margin: .8em 0;
`

const SubParagraph = styled.span`
	font-size: 14px;
	line-height: 22px;
	margin: .8em 0;
	font-weight: 300;
	font-family: none;
`

const SubParagraph2 = styled.span`
	font-size: 14px;
	line-height: 22px;
	margin: .8em 0;
	font-weight: 300;
	font-family: none;
	cursor: pointer;
	border-bottom: 1px solid black;

`