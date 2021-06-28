import { useState, useEffect } from 'react'
import styled from 'styled-components'
import img1 from '../../shared/images/collaborations/campus_molndal.png'
import img2 from '../../shared/images/collaborations/ecutbildning.png'
import img3 from '../../shared/images/collaborations/myndighet.png'
import img4 from '../../shared/images/collaborations/newton.png'
import img7 from '../../shared/images/collaborations/jensen.jpg'

export const Collaborations = () => {
	const [currentlyDisplaying, setCurrentlyDisplaying] = useState<number>(0)
	const [value, setValue] = useState([
		{
			company: '',
			logotype: '',
			quote: '0Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi.'
		},
		{
			company: '',
			logotype: '',
			quote: '1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, reiciendis iste!'
		},
		{
			company: '',
			logotype: '',
			quote: '2Lorem ipsum dolor sit.'
		},
		{
			company: '',
			logotype: '',
			quote: '3Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		},
		{
			company: '',
			logotype: '',
			quote: '4Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsa.'
		},
	])

	useEffect(() => {
		const interval = setInterval(() => { setCurrentlyDisplaying(value => (value < 4) ? value + 1 : 0) }, 3000)
		return () => clearInterval(interval)
	}, [])

	return (
		<Wrapper>
			<Paragraph>&quot;{value[currentlyDisplaying].quote}&quot;</Paragraph>
			<Wrapper2>
				<Image src={img2} alt={''} onClick={() => setCurrentlyDisplaying(0)} />
				<Image src={img1} alt={''} onClick={() => setCurrentlyDisplaying(1)} />
				<Image src={img3} alt={''} onClick={() => setCurrentlyDisplaying(2)} />
				<Image src={img4} alt={''} onClick={() => setCurrentlyDisplaying(3)} />
				<Image src={img7} alt={''} style={{ width: 220 }} onClick={() => setCurrentlyDisplaying(4)} />
			</Wrapper2>
		</Wrapper>
	)
}

const Image = styled.img`
	transform: scale(0.4);
	cursor: pointer;
	filter: grayscale(100%);
	transition: 0.3s;
	&:hover {
		transform: scale(0.5);
		filter: grayscale(0%);
		transition: 0.3s;
	  }
`

const Wrapper = styled.div`
	background-color: white;
	grid-column: 1/21;
`

const Paragraph = styled.div`
	color: #1f1d1d;
	font-weight: 700;
	font-size: 52px;
	text-align: center;
	padding: 3%;
`

const Wrapper2 = styled.div`
	margin: 0 auto;
	display: flex;
	width: 65%;
	justify-content: space-between
	`