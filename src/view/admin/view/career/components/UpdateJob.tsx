import  styled  from 'styled-components'
import { useFetch } from 'hooks/useFetch'
import { useHistory } from 'react-router'
import RoutingPath from 'routes/RoutingPath'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { CareerInterface } from 'shared/interfaces/CareerInterface'

export const UpdateJob = () => {
	const history = useHistory()
	const {data, loading} = useFetch(CodicAPIService.getAllJobs())

	const displayData = () => {
		if (!loading) {
			return data?.map((item: CareerInterface) => 
				<ProductWrapper key={item._id}>
					<h3 onClick={() => history.push(RoutingPath.careerDetailsView(item._id), item)}>{item.title}</h3>
					<h5>{item.description}</h5>
					<h5>{item.jobType}</h5>
					<h6>{item.lastDate}</h6>
				</ProductWrapper>
			)
		}
	}


	return(
		<>
			<div>
				<h1>Update an existing job</h1>
				<Wrapper>
					{displayData()}
				</Wrapper>
			</div>
		</>
	)
}

const Wrapper = styled.div`
	display: grid;
	width: 80%;
	margin: 0 auto;
	grid-template-columns: repeat(4, 1fr);
`

const ProductWrapper = styled.div`
	grid-template-columns: repeat(12, 1fr);
	padding: 5%;
`

const ImageParent = styled.div`
	overflow: hidden;
`

const Image = styled.img`
	width: 100%;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	transition: transform .75s, visibility .75s ease-in;
	&:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
`

const Paragraph = styled.p`
	color: #313942;
	line-height: px;
	font-family: MuseoSans-500, arial;
	font-size: 0.875rem;
	font-weight: 600;
`

const Button = styled.div`
	background-color: #4084b5;
	text-align: center;
	padding: 1.5%;
	color: white;
	font-size: 0.75rem;
	font-weight: 600;
	&:hover {
		cursor: pointer;
	}
`
