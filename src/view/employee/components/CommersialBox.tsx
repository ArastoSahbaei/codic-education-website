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
	{ image: brownDesk, textColor: '#f5cb5c' },
	{ image: whiteDesk, textColor: `${primaryColor}` },
	{ image: greyDesk, textColor: '#c30011' },
	{ image: deskByWindow, textColor: '#f7f3e3' },
	{ image: desktop, textColor: '#6e2594' },	
]

const randomImage = images[Math.floor(Math.random() * images.length)]

export const CommersialBox = () => {
	const history = useHistory()
	
	return (
		<BoxWrapper onClick={() => history.push(RoutingPath.careerView)}>
			<BigText>Hejsan! <br /> {messages[Math.floor(Math.random()*messages.length)]}</BigText>

			<SmallText> Titta då närmare på våra lediga tjänster här ! </SmallText>
		</BoxWrapper>
	)
}

const BoxWrapper = styled.div`
	background-image: url(${randomImage.image});
    background-size: cover;
    height: 100%;
	cursor: pointer;
`

const BigText = styled.p`
    color: ${randomImage.textColor};
	font-size: 2.8rem;
    text-align:center;
    padding: 15px 20px 10px 20px;
`

const SmallText = styled.p`
    color: ${randomImage.textColor};
    font-size: 2.1rem;
    text-align: center;
    padding: 5px 20px 50px 20px;
`