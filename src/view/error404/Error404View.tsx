import { useHistory } from 'react-router-dom'
import { primaryColor } from 'shared/styles/GlobalStyle'
import { CountDown } from './components/CountDown'
import backgroundImage from '../../shared/images/magnifyingGlass.jpg'
import styled from 'styled-components'
import RoutingPath from '../../routes/RoutingPath'


export const Error404View = () => {
	const history = useHistory()

	return (
		<Wrapper>
			<Image src={backgroundImage} alt={'magnifying glass'} />
			<Title>
				<ColoredParagraph>4</ColoredParagraph>
				<UncoloredParagraph>0</UncoloredParagraph>
				<ColoredParagraph>4</ColoredParagraph>
			</Title>
			<Paragraph>Vi kunde tyvärr inte hittas den sökta sidan.</Paragraph>
			<SmallText> Det kan bero på att sidan har flyttats eller tagits bort,<br />
				eller att något annat har blivit fel.</SmallText>
			<Link onClick={() => history.push(RoutingPath.initialView)}>Klicka här för att besöka vår startsida!</Link>
			<CountDown />
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

const Title = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    margin-top: 20vh;
    color: #f9f9f9;
    font-size: 6.5rem;
	font-weight: 900;
	@media (max-width: 600px) {
		margin-top: 5vh;
	}
`

const Paragraph = styled.p`
	position: absolute;
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
	width: 100%;
	text-align: center;
	margin-top: 40vh;
	color: #f9f9f9;
	font-size: 2rem;
	font-weight: 600;
	@media (max-width: 600px) {
		margin-top: 25vh;
	}
`

const SmallText = styled.p`
	position: absolute;
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
	width: 100%;
	text-align: center;
	margin-top: 48vh;
	color: #f9f9f9;
	font-size: 1.4rem;
	font-weight: 500;
	@media (max-width: 600px) {
		margin-top: 40vh;
	}
	@media (max-width: 300px) {
		margin-top: 45vh;
	}
`

const Link = styled.a`
	position: absolute;
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
	width: 100%;
	text-align: center;
	margin-top: 60vh;
	color: ${primaryColor};
	font-size: 1.2rem;
	font-weight: 500;
    cursor: pointer;
	@media (max-width: 300px) {
		margin-top: 65vh;
	}

`

const ColoredParagraph = styled.span`
	color: ${primaryColor};
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
`

const UncoloredParagraph = styled.span`
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
`
