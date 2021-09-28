import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'
import brownDesk from '../../../shared/images/boximages/brownDesk_400x500.jpg'
import whiteDesk from '../../../shared/images/boximages/whiteDesk_400x524.jpg'
import greyDesk from '../../../shared/images/boximages/greyDesk_400x533.jpg'
import deskByWindow from '../../../shared/images/boximages/deskByWindow_400x533.jpg'
import desktop from '../../../shared/images/boximages/desktop_400x533.jpg'

export const CommercialBox = () => {
	const history = useHistory()
	const [index, setIndex] = useState<number>(0)
	const changeInterval = 5000

	useEffect(() => {
		const interval = setInterval(() => { changeIndex(index) }, changeInterval)
		return () => {
			clearInterval(interval)
		}
	}, [index])

	const imagesWithText = [
		{ image: brownDesk, textColor: '#f5cb5c', text: 'Vill du bli en del av detta glada gäng?' },
		{ image: whiteDesk, textColor: '#f59300', text: 'Kan du se dig här i framtiden?' },
		{ image: greyDesk, textColor: '#c30011', text: 'Funderar du på att byta jobb?' },
		{ image: deskByWindow, textColor: '#f7f3e3', text: 'Söker du nya utmaningar i karriären?' },
		{ image: desktop, textColor: '#6e2594', text: 'Letar du efter nya upplevelser?' },
	]

	const changeIndex = (index: number) => {
		(index === (imagesWithText.length - 1)) ? setIndex(0) : setIndex(index + 1)
	}

	return (
		<BoxWrapper theme={imagesWithText[index]} onClick={() => history.push(RoutingPath.careerView)}>
			<BigText>Hejsan! <br /> {imagesWithText[index].text}</BigText>
			<SmallText> Titta då närmare på våra lediga tjänster här! </SmallText>
		</BoxWrapper>
	)
}

const BoxWrapper = styled.div`
	background-image: url(${props => props.theme.image});
    background-size: cover;
    height: 100%;
	cursor: pointer;
	color: ${props => props.theme.textColor};
	transition: 1s;
`

const BigText = styled.p`
   	font-size: 2.5rem;
    text-align:center;
    padding: 20px 20px 10px 20px;
	@media (max-width: 1200px) {
		font-size: 2.4rem;
		padding: 10px 15px 7px 15px;
	}
	@media (max-width: 1050px) {
		padding: 60px 15px 10px 15px;
	}
	@media (max-width: 800px) {
		padding: 30px 15px 10px 15px;
	}
	@media (max-width: 700px) {
		font-size:2.5rem;
		padding: 150px 20px 20px 20px;
	}
	@media (max-width: 500px) {
		padding: 80px 20px 20px 20px;
	}
	@media (max-width: 400px) {
		padding: 25px 15px 8px 15px;
	}
	@media (max-width: 350px) {
		font-size: 2.1rem;
		padding: 20px 15px 8px 15px;
	}
	@media (max-width: 300px) {
		font-size: 2rem;
		padding: 15px 15px 8px 15px;
	}
	@media (max-width: 200px) {
		font-size: 1.8rem;
		padding: 15px 15px 8px 15px;
	}
`

const SmallText = styled.p`
    font-size: 1.8rem;
    text-align: center;
    padding: 5px 20px 10px 20px;
	@media (max-width: 1200px) {
		font-size: 1.7rem;
	}	padding: 5px 15px 10px 15px;
	@media (max-width: 1050px) {
		padding: 10px 15px 10px 15px;
	}
	@media (max-width: 800px) {
		padding: 7px 15px 10px 15px;
	}
	@media (max-width: 700px) {
		font-size: 1.8rem;
		padding: 20px 20px 150px 20px;
	}
	@media (max-width: 500px) {
		padding: 20px 20px 80px 20px;
	}
	@media (max-width: 400px) {
		padding: 8px 15px 25px 15px;
	}
	@media (max-width: 350px) {
		font-size: 1.4rem;
		padding: 8px 15px 20px 15px;
		
	}
	@media (max-width: 300px) {
		font-size: 1.3rem;
		padding: 8px 15px 15px 15px;
	}
	@media (max-width: 200px) {
		font-size: 1.1rem;
		padding: 8px 15px 15px 15px;
	}
`