import styled from 'styled-components'
import { CareerCard } from 'components/CareerCard'
import { windowsMaxWidth } from 'shared/data/WindowsSizes'
import { DimensionsInterface } from 'shared/interfaces/DimensionsInterface'
import { CareerCardInterface } from 'shared/interfaces/CareerInterface'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { useState, useEffect } from 'react'
import { NoAvailableCareerOpportunities } from './components/NoAvailableCareerOpportunities'




export const CareerView = () => {
	const [serverResponse, setServerResponse] = useState([])
	const fetchData = async () => {
		try {
			const { data } = await CodicAPIService.getAllJobs()
			setServerResponse(data)
		} catch (error) {
			console.log(error)
		}
	}


	const displayAllCareers = () => {
		return (
			serverResponse.map((item: CareerCardInterface) =>
				<CareerCard key={item.id}
					title={item.title}
					location={item.location}
					jobType={item.jobType}
					image={item.img}
				/>
			)
		)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		serverResponse.length == 0 ? <NoAvailableCareerOpportunities /> :
			<>
				<Div>
					<h1>Team Codic Karriär</h1>
					<Span>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit vero ex ad, sint a possimus voluptas sequi magni laudantium doloribus veritatis non ipsum
						architecto rem minus aliquid laborum, sit alias illum, atque corporis mollitia labore. Rem, quisquam. Rem odio ab repudiandae enim eius explicabo veniam libero error
						consequuntur, aspernatur animi, ratione non laborum deleniti adipisci consectetur facilis iste vitae nulla?
					</Span>
				</Div>
				<GridWrapper dimensions={windowsMaxWidth}>
					{displayAllCareers()}
				</GridWrapper>
				<Space />
			</>
	)
}

const GridWrapper = styled.div<DimensionsInterface>`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin: 0 auto;
	width: 80%;
	padding: 1%;
	grid-gap: 1%;
	@media (max-width: 1450px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 1050px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

const Div = styled.div`
	width: 78%;
	margin: 0 auto;
	padding: 1%;
`

const Span = styled.span`
	font-family: none;
	font-size: 1.3rem;
`

const Space = styled.div`
	padding: 2%;
	@media (max-width: 1450px) {
		padding: 5%;
	}
	@media (max-width: 1050px) {
		padding: 13%;
	}
	@media (max-width: 700px) {
		height: 1450px;
	}
	@media (max-width: 622px) {
		height: 1350px;
	}
	@media (max-width: 566px) {
		height: 1250px;
	}
	@media (max-width: 500px) {
		height: 1100px;
	}
	@media (max-width: 428px) {
		height: 1000px;
	}
	@media (max-width: 380px) {
		height: 900px;
	}
`