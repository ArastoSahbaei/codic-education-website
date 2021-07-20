import { Collaborations } from './components/Collaborations'
import { StudentReviews } from './components/StudentReviews'
import { primaryColor } from 'shared/styles/GlobalStyle'
import backgroundImage from '../../shared/images/teacher3.jpg'
import styled from 'styled-components'

export const InitialView = () => {

	return (
		<Wrapper>
			<Image src={backgroundImage} alt={'background of a teacher'} />
			<Paragraph>Vi <ColoredParagraph>utvecklar</ColoredParagraph> Sverige inom <ColoredParagraph>datavetenskap</ColoredParagraph>.</Paragraph>
			<Collaborations />
			<StudentReviews />
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
	margin-top: 57vh;
	color: #f9f9f9;
	font-size: 2.5rem;
	font-weight: 700;
`

const ColoredParagraph = styled.span`
	color: ${primaryColor};
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
`
