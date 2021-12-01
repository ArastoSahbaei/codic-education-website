import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { CareerCard } from './components/CareerCard'
import { windowsMaxWidth } from 'shared/data/WindowsSizes'
import { DimensionsInterface } from 'shared/interfaces/DimensionsInterface'
import { CareerInterface } from 'shared/interfaces/CareerInterface'
import { NoAvailableCareerOpportunities } from './components/NoAvailableCareerOpportunities'
import styled from 'styled-components'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import RoutingPath from 'routes/RoutingPath'

export const CareerView = () => {
	const [serverResponse, setServerResponse] = useState([])
	const history = useHistory()

	const fetchData = async () => {
		try {
			const { data } = await CodicAPIService.getAllJobs()
			// Filter out and only show career where lastDate is larger or equal than today
			const filteredData = data.filter((item: any) => new Date(item.lastDate) >= new Date())
			setServerResponse(filteredData)
		} catch (error) {
			console.log(error)
		}
	}

	const showDetails = (item: CareerInterface) => {
		history.push({
			pathname: RoutingPath.careerDetailsView(item._id),
			state: item
		})
	}

	const displayAllCareers = () => {
		return (
			serverResponse.map((item: CareerInterface) =>
				<CareerCard key={item._id}
					career={item}
					onClick={() => showDetails(item)}
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
						Skulle du vilja arbeta hos oss? På denna sida kan  du se vilka lediga tjänster vi för närvarande söker personal till. Om någon verkar intressant för dig - klicka på den och få mer information om tjänsten samt möjlighet att söka den.
						<br />
						<br />
						Om det inte finns något som intresserar dig just nu, är du mer än välkommen att återkomma vid senare tillfälle. Vi lägger regelbundet ut ny tjänster här.
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