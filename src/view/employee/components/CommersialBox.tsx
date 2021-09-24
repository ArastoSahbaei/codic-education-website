import { useHistory } from 'react-router-dom'
import { primaryColor } from 'shared/styles/GlobalStyle'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'
import brownDesk from '../../../shared/images/boximages/brownDesk.jpg'
import whiteDesk from '../../../shared/images/boximages/whiteDesk.jpg'
import greyDesk from '../../../shared/images/boximages/greyDesk.jpg'
import deskByWindow from '../../../shared/images/boximages/deskByWindow.jpg'
import desktop from '../../../shared/images/boximages/desktop.jpg'

const messages = [
	'Vill du bli en del av detta glada gäng?',
	'Kan du se dig här i framtiden?',
	'Funderar du på att byta jobb?',
	'Söker du nya utmaningar i karriären?'
]

const images = [
	brownDesk,
	whiteDesk,
	greyDesk,
	deskByWindow,
	desktop
]

const randomImage = images[Math.floor(Math.random() * images.length)]

export const CommersialBox = () => {
	const history = useHistory()
	
	return (
		<BoxWrapper >
			<BigText>Hejsan! <br /> {messages[Math.floor(Math.random()*messages.length)]}</BigText>

			<SmallText> Titta då närmare på våra lediga tjänster, <CareerLink onClick={() => history.push(RoutingPath.careerView)}> här</CareerLink> ! </SmallText>
		</BoxWrapper>
	)
}

const BoxWrapper = styled.div`
	background-image: url(${randomImage});
    background-size: cover;
    height: 100%;
	opacity:0.9;
`

const BigText = styled.p`
    color: #ff7b00;
	font-size: 2.5rem;
    text-align:center;
    padding: 15px 20px 10px 20px;
`

const SmallText = styled.p`
    color: #ff7b00;
    font-size: 1.5rem;
    text-align: center;
    padding: 5px 20px 50px 20px;
`

const CareerLink = styled.span`
    color: ${primaryColor};
    text-decoration: underline;
    cursor: pointer;
`