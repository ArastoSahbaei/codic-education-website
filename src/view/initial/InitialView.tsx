import { NewsLetterSubscriptionForm } from './components/newslettersubscriptionform/NewsLetterSubscriptionForm'
import { initialViewButtonStyle } from 'shared/styles/Styles'
import { Collaborations } from './components/Collaborations'
import { StudentReviews } from './components/StudentReviews'
import { primaryColor } from 'shared/styles/GlobalStyle'
import { SocialMedia } from './components/SocialMedia'
import { Button } from 'components/html/Button'
import backgroundImage from '../../shared/images/teacher3.jpg'
import styled from 'styled-components'

export const InitialView = () => {
	return (
		<Wrapper>
			<Image src={backgroundImage} alt={'background of a teacher'} />
			<Paragraph>
				Vi <ColoredParagraph>utbildar</ColoredParagraph> Sverige inom <ColoredParagraph>datavetenskap</ColoredParagraph>. <br />
				<Button text={'Om oss'} style={initialViewButtonStyle} /> <br />
				<Button text={'Boka möte'} style={initialViewButtonStyle} /> <br />
				<Button text={'Lediga tjänster'} style={initialViewButtonStyle} /> <br />
			</Paragraph>
			<Collaborations />
			{/* 	<StudentReviews /> */}
			<SectionWrapper>
				<NewsLetterSubscriptionForm />
				{/* <SocialMedia /> */}
			</SectionWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	`

const Image = styled.img`
	grid-column: 1/21;
	width: 100%;
	height: 90vh;
	`

const Paragraph = styled.p`
	position: absolute;
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
	width: 100%;
	text-align: center;
	margin-top: 50vh;
	color: #f9f9f9;
	font-size: 2.5rem;
	font-weight: 700;

`

const ColoredParagraph = styled.span`
	color: ${primaryColor};
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
`

const SectionWrapper = styled.div`
	grid-column: 1/21;
	width: 100%;
	align-self: center;
	justify-self: center;
`