import { useHistory } from 'react-router-dom'
import { primaryColor } from 'shared/styles/GlobalStyle'
import { CountDown } from './components/CountDown'
import backgroundImage from '../../shared/images/stop-sign2.jpg'
import styled from 'styled-components'
import RoutingPath from '../../routes/RoutingPath'

export const ErrorNotAuthView = () => {
	const history = useHistory()

	return (
		<Wrapper>
			<Image src={backgroundImage} alt={'stopp-skylt'} />
			<Div>
				<Title> Tillträde ej tillåtet! </Title>
				<div style={{ height: '250px' }} />
				<Paragraph>Du har inte behörighet att se innehållet på denna sida. </Paragraph>
				<br />
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

const Div = styled.div`
	position: absolute;
	width: 100%;
	margin-top: 5vh;
	text-align: center;
`

const Image = styled.img`
	grid-column: 1/21;
	width: 100%;
	height: 500px;
	@media (max-width: 600px) {
		height: 600px;
	}
	@media (max-width: 400px) {
		height: 700px;
	}
	@media (max-width: 300px) {
		height: 800px;
	}
`

const Title = styled.div`
   	color: #f9f9f9;
    font-size: 4rem;
	font-weight: 900;
`

const Paragraph = styled.p`
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
	color: #f9f9f9;
	font-size: 2rem;
	font-weight: 600;
`
const Link = styled.a`
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
	color: ${primaryColor};
	font-size: 1.2rem;
	font-weight: 500;
    cursor: pointer;
`