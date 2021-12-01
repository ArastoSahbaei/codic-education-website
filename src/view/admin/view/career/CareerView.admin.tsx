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

	const showContent = () => {
		switch (choice) {
		case 1:
			return <CareerForm setChoice={setChoice} chosenRowData={chosenRowData} method='create' />
		case 2:
			return <CareerForm setChoice={setChoice} chosenRowData={chosenRowData} method='update' />
		default:
			return <ListAllCareers setChoice={setChoice} setChosenRowData={setChosenRowData} />
		}
	}

	return (
		<>
			<h1> Admin-vy rörande Lediga tjänster</h1>

			{showContent()}
		</>
	)
}
