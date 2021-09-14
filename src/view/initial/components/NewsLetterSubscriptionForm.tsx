import { Button } from 'components/html/Button'
import { Input } from 'components/html/Input'
import { Form, Formik } from 'formik'
import { primaryFont, secondaryFont } from 'shared/styles/GlobalStyle'
import styled from 'styled-components'

export const NewsLetterSubscriptionForm = () => {
	return (
		<Wrapper>
			<MainParagraph>Vi revolutionerar utbildningsbranschen!</MainParagraph>
			<Paragraph>Som prenumerant på vårt nyhetsbrev är du först med att få reda på nya produkter, grymma limited editions och specialerbjudanden.</Paragraph>
			<Formik
				initialValues={{}}
				onSubmit={(values) => console.log(values)}>
				<Form>
					<Input style={{ width: '500px' }} name='personalDetails.firstName' label='Ange E-mail' type='text' /> <br />
					<Button text='Prenumerera' />
				</Form>
			</Formik>
			<SubParagraph>Du kan vara lugn, vi ogillar spam lika mycket som du gör och säljer aldrig din data vidare till tredje part. Läs mer om vår integritetspolicy här.</SubParagraph>
		</Wrapper>
	)
}

const Wrapper = styled.div`
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

const SubParagraph = styled.p`
	font-size: 14px;
	line-height: 22px;
	margin: .8em 0;
	font-weight: 300;
	font-family: none;
`