import { useState, useEffect } from 'react'
import { windowsMaxWidth } from '../../../shared/data/WindowsSizes'
import { DimensionsInterface } from '../../../shared/interfaces/DimensionsInterface'
import styled from 'styled-components'
import img1 from '../../../shared/images/collaborations/campus_molndal.png'
import img2 from '../../../shared/images/collaborations/ecutbildning.png'
import img3 from '../../../shared/images/collaborations/myndighet.png'
import img4 from '../../../shared/images/collaborations/newton.png'
import img5 from '../../../shared/images/collaborations/jensen.jpg'

export const Collaborations = () => {
	const [currentlyDisplaying, setCurrentlyDisplaying] = useState<number>(0)
	const value = [
		{
			company: '',
			logotype: '',
			quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi.'
		},
		{
			company: '',
			logotype: '',
			quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, reiciendis iste!'
		},
		{
			company: '',
			logotype: '',
			quote: 'Lorem ipsum dolor sit.'
		},
		{
			company: '',
			logotype: '',
			quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		},
		{
			company: '',
			logotype: '',
			quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsa.'
		},
	]


	useEffect(() => {
		const interval = setInterval(() => { setCurrentlyDisplaying(value => (value < 4) ? value + 1 : 0) }, 3000)
		return () => clearInterval(interval)
	}, [currentlyDisplaying])

	return (
		<Wrapper>
			<Paragraph>&quot;{value[currentlyDisplaying].quote}&quot;</Paragraph>
			<ImageWrapper dimensions={windowsMaxWidth}>
				<Image isActive={currentlyDisplaying == 0} src={img2} alt={''} onClick={() => setCurrentlyDisplaying(0)} />
				<Image isActive={currentlyDisplaying == 1} src={img1} alt={''} onClick={() => setCurrentlyDisplaying(1)} />
				<Image isActive={currentlyDisplaying == 2} src={img3} alt={''} onClick={() => setCurrentlyDisplaying(2)} />
				<Image isActive={currentlyDisplaying == 3} src={img4} alt={''} onClick={() => setCurrentlyDisplaying(3)} />
				<Image isActive={currentlyDisplaying == 4} src={img5} alt={''} onClick={() => setCurrentlyDisplaying(4)} />
			</ImageWrapper>
			<hr />
		</Wrapper>
	)
}

interface values {
	isActive: boolean;
}

const Wrapper = styled.div`
	background-color: white;
	grid-column: 1/21;
`

const Paragraph = styled.p`
	color: #1f1d1d;
	font-size: 46px;
	text-align: center;
	padding: 2%;
`

const ImageWrapper = styled.div<DimensionsInterface>`
	margin: 0 auto;
	display: flex;
	width: 65%;
	justify-content: space-between;
	@media (min-width: ${props => props.dimensions.tablet}) {
		width: 100%;
	}
	@media (min-width: ${props => props.dimensions.desktop}) {
		width: 65%;
	}
	@media (max-width: 1100px) {
		justify-content: center;
	}
`

const Image = styled.img<values>`
	transform: ${props => props.isActive ? 'scale(0.5);' : 'scale(0.4);'}
	filter: ${props => props.isActive ? 'grayscale(0%);' : 'grayscale(100%);'}
	cursor: pointer;
	transition: 0.4s;
	width: 240px;
	@media (max-width: 1100px) {
		display: ${props => props.isActive ? '' : 'none;'}
	}
`