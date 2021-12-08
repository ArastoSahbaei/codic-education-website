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
			<Div>
				<Title>
					<ColoredParagraph>4</ColoredParagraph>
					<UncoloredParagraph>0</UncoloredParagraph>
					<ColoredParagraph>4</ColoredParagraph>
				</Title>
				<Paragraph>Vi kunde tyvärr inte hittas den sökta sidan.</Paragraph>
				<SmallText> Det kan bero på att sidan har flyttats eller tagits bort,<br />
					eller att något annat har blivit fel.</SmallText>
				<div style={{height: '80px'}} />
				<Link onClick={() => history.push(RoutingPath.initialView)}>Klicka här för att besöka vår startsida!</Link>
				<CountDown />
			</Div>
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

const Div = styled.div`
	position: absolute;
	width: 100%;
	margin-top: 5vh;
	text-align: center;
`

const Title = styled.div`
    color: #f9f9f9;
    font-size: 6.5rem;
	font-weight: 900;
`

const Paragraph = styled.p`
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
	color: #f9f9f9;
	font-size: 2rem;
	font-weight: 600;
`

const SmallText = styled.p`
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
	color: #f9f9f9;
	font-size: 1.4rem;
	font-weight: 500;
`

const Link = styled.a`
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
	color: ${primaryColor};
	font-size: 1.2rem;
	font-weight: 500;
    cursor: pointer;
`

const ColoredParagraph = styled.span`
	color: ${primaryColor};
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
`

const UncoloredParagraph = styled.span`
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
`
