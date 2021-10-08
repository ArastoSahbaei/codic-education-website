import { useLocation } from 'react-router-dom'
import { useFetch } from 'hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Spinner } from 'components/Spinner'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { CareerInterface } from 'shared/interfaces/CareerInterface'

interface value { id: string }

export const careerDetailsAdminView: React.FC = () => {
	const location = useLocation<CareerInterface>()
	const { id } = useParams<value>()
	const { data, loading } = useFetch(CodicAPIService.getJobWithId(id))

	return (
		loading
			? <Spinner />
			: (
				<>
					<span>title: {location.state ? location.state.title : data?.title}</span> <br />
					<span>description: {location.state ? location.state.description : data?.description}</span> <br />
					<span>jobType: {location.state ? location.state.jobType : data?.jobType}</span> <br />
					<span>lastDate: {location.state ? location.state.lastDate : data?.lastDate}</span> <br />
				</>
			)
	)
}