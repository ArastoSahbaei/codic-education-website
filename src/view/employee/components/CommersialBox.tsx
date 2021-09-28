import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'
import brownDesk from '../../../shared/images/boximages/brownDesk.jpg'
import whiteDesk from '../../../shared/images/boximages/whiteDesk.jpg'
import greyDesk from '../../../shared/images/boximages/greyDesk.jpg'
import deskByWindow from '../../../shared/images/boximages/deskByWindow.jpg'
import desktop from '../../../shared/images/boximages/desktop.jpg'

const imagesWithText = [
	{ image: brownDesk, textColor: '#f5cb5c', text: 'Vill du bli en del av detta glada gäng?' },
	{ image: whiteDesk, textColor: '#f59300', text: 'Kan du se dig här i framtiden?' },
	{ image: greyDesk, textColor: '#c30011', text: 'Funderar du på att byta jobb?' },
	{ image: deskByWindow, textColor: '#f7f3e3', text: 'Söker du nya utmaningar i karriären?' },
	{ image: desktop, textColor: '#6e2594', text: 'Letar du efter nya upplevelser?' },
]

export const CommersialBox = () => {
	const history = useHistory()
	const [index, setIndex] = useState<number>(0)
	const changeInterval = 5000

	useEffect(() => {
		const interval = setInterval(() => {changeIndex(index)}, changeInterval)
		return () => {
			clearInterval(interval)
		}
	}, [index])

	const changeIndex = (index:number) => {
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
`

const BigText = styled.p`
   	font-size: 2.5rem;
    text-align:center;
    padding: 15px 20px 10px 20px;
`

const SmallText = styled.p`
    font-size: 1.8rem;
    text-align: center;
    padding: 5px 20px 10px 20px;
`