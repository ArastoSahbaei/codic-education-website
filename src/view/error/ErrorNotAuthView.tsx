import { useHistory } from 'react-router-dom'
import { primaryColor } from 'shared/styles/GlobalStyle'
import { CountDown } from './components/CountDown'
import backgroundImage from '../../shared/images/magnifyingGlass.jpg'
import styled from 'styled-components'
import RoutingPath from '../../routes/RoutingPath'


export const ErrorNotAuthView = () => {
	const history = useHistory()

	return (
		<Wrapper>
			<Image src={backgroundImage} alt={'magnifying glass'} />
			<Title> Sidan är inte tillgänglig </Title>
			<Paragraph>Du har inte behörighet att se innehållet på denna sida. </Paragraph>
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
    font-size: 4rem;
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