import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CareerInterface } from 'shared/interfaces/CareerInterface'
import styled from 'styled-components'
import { ApplicationForm } from './components/ApplicationForm'

export const CareerDetailsView = () => {
	const location = useLocation<CareerInterface>()
	const [chosenCareer, setChosenCareer] = useState<CareerInterface>()

	useEffect(() => {
		setChosenCareer(location.state)
	}, [])

	return (
		<>
			{chosenCareer == undefined
				? <div>Ingen information</div>
				: <CareerWrapper>
					<h2>{chosenCareer.title}</h2>
					<p>Tjänst: </p>
					<Text>{chosenCareer.jobType}</Text>
					<p>Plats:</p>
					<Text>{chosenCareer.location}</Text>
					<p>Beskrivning: </p>
					<Text>{chosenCareer.description}</Text>
					<p>Sista ansökningsdatum: </p>
					<Text>{chosenCareer.lastDate
						? chosenCareer.lastDate.toString().substr(0, 10)
						: chosenCareer.lastDate}
					</Text>
				</CareerWrapper>}
			{chosenCareer && <Div>
				<ApplicationForm career={chosenCareer} />
			</Div>}
		</>
	)
}

const CareerWrapper = styled.div`
	display: block;
	width: 80%;
	background-color: #fdf0db;
	border-radius: 25px;
	margin: 8% auto 1% auto;
	padding: 10px;
	h2 {
		text-align: center;
	}
	hr {
		margin: 15px 0px;
	}
`

const Text = styled.p`
	margin-left: 200px;
`

const Div = styled.div`
	display: block;
	width: 80%;
	background-color: #fdf0db;
	border-radius: 25px;
	margin: 3% auto 1% auto;
	padding: 10px;
	h2 {
		text-align: center;
	}
	button {
		margin-top: 30px;
		margin-bottom: 20px;
		float: right;
	}
`