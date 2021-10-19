import  styled  from 'styled-components'
import { useFetch } from 'hooks/useFetch'
import { useHistory } from 'react-router'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { CareerInterface } from 'shared/interfaces/CareerInterface'
import RoutingPath from 'routes/RoutingPath'
import { primaryColor } from 'shared/styles/GlobalStyle'
import { DimensionsInterface } from 'shared/interfaces/DimensionsInterface'
import { windowsMaxWidth } from 'shared/data/WindowsSizes'

export const UpdateJob = () => {
	const history = useHistory()
	const {data, loading} = useFetch(CodicAPIService.getAllJobs())

	const displayData = () => {
		if (!loading) {
			return data?.map((item: CareerInterface) => 
			
				<Div key={item._id} onClick={() => history.push(RoutingPath.careerDetailsAdminView(item._id), item)}>
					<Paragraph  onClick={() => history.push(RoutingPath.careerDetailsAdminView(item._id), item)}>{item.title}</Paragraph>
					<h5>{item.description}</h5>
					<h5>{item.jobType}</h5>
					<h6>{item.lastDate}</h6>
				</Div>
			)
		}
	}
	return(
		<>
			<div>
				<h1>Update an existing job</h1>
				<GridWrapper dimensions={windowsMaxWidth}>
					{displayData()}
				</GridWrapper>
			</div>
		</>
	)
}



const Wrapper = styled.div`
    cursor: pointer;
	padding: 5%;
	display: flex;
	justify-content: center;
    text-align: center;
`

const Div = styled.div`
	width: 100%;
	background-color: ${primaryColor};
	padding: 0.5%;
	box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

const Image = styled.img`
	background-color: white;
    width: 100%;
    height: 200px;
`

const GridWrapper = styled.div<DimensionsInterface>`
	cursor: pointer;
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
const Paragraph = styled.p`    
	font-family: Alegreya Sans;
	font-weight: 400;
	font-style: normal;
	letter-spacing: .01em;
	text-transform: none;
	line-height: 1.5em;
`