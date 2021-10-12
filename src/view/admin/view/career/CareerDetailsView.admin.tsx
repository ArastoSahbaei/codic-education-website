import { useLocation } from 'react-router-dom'
import { useFetch } from 'hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Spinner } from 'components/Spinner'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { CareerInterface } from 'shared/interfaces/CareerInterface'
import { useState } from 'react'

interface value { id: string }
export interface updateJobWithId {
    title: string
    description: string
    jobType: string
    location: string
    image: string
    lastDate: Date
}

const populateIfEmpty = () => {
	
}


export const careerDetailsAdminView: React.FC = () => {
	const location = useLocation<CareerInterface>()
	const { id } = useParams<value>()
	const { data, loading } = useFetch(CodicAPIService.getJobWithId(id))

	const [career, setCareer] = useState<updateJobWithId>({title:`${location.state ? location.state.title : data?.title}`, description: '', jobType: '', location: '', image: '', lastDate: new Date})

	function handleChange(event: React.ChangeEvent<HTMLInputElement>, target: keyof updateJobWithId) {
		setCareer({...career, [target]: event.target.value})
	}

	return (
		loading
			? <Spinner />
			: (
				<>
					<span>title: {data.title}</span> <br />
					<span>description: {data.description}</span> <br />
					<span>jobType: {data?.jobType}</span> <br />
					<span>lastDate: {data?.lastDate}</span> <br />

					<h2>Add new info</h2>

					titel: <input onChange={event => handleChange(event, 'title')} type="text" defaultValue={data.title} /> <br />
					description: <input onChange={event => handleChange(event, 'description')} type="text" defaultValue={location.state ? location.state.description : data?.description} /> <br />
					jobType: <input onChange={event => handleChange(event, 'jobType')} type="text" defaultValue={location.state ? location.state.jobType : data?.jobType} /> <br />
					lastDate: <input onChange={event => handleChange(event, 'lastDate')} type="text" defaultValue={location.state ? location.state.lastDate : data?.lastDate} /> <br />
					<button onClick={() => CodicAPIService.updateJobWithId(data._id, career)}>Submit</button>
				</>
			)
	)
}