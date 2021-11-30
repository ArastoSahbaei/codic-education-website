import { useState } from 'react'
import { CareerForm } from './components/CareerForm'
import { ListAllCareers } from './components/ListAllCareers'

export const CareerAdminView = () => {
	const [choice, setChoice] = useState<number>(0)
	const [chosenRowData, setChosenRowData] = useState({
		_id: '',
		title: '',
		jobType: '',
		location: '',
		description: '',
		lastDate: '',
	})

	return(
		<>
			<h1> Admin-vy rörande Lediga tjänster</h1>
			{choice === 0 
				? <ListAllCareers setChoice={setChoice} setChosenRowData={setChosenRowData} /> 
				: <CareerForm setChoice={setChoice} chosenRowData={chosenRowData} />}
		</>
	)
} 
