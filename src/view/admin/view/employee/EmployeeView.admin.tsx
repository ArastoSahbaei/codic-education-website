import { useState } from 'react'
import { ListAllEmployees } from './components/ListAllEmployees'
import { EmployeeForm } from './components/EmployeeForm'

export const EmployeeAdminView = () => {
	const [choice, setChoice] = useState<number>(0)
	const [chosenRowData, setChosenRowData] = useState({
		username: '',
		email: '',
		role: 'basic',
		personalDetails: {
			firstName: '',
			lastName: '',
			phone: '',
		},
		employeeInformation: {
			workPhone: '',
			workEmail: '',
			startEmployeeDate: '',
			lastEmployeeDate: '',
			isEmploymentActive: false,
		},
	})

	return (
		<>
			<h1> Admin-vy rörande anställda</h1>
			{choice === 0 
				? <ListAllEmployees setChoice={setChoice} setChosenRowData={setChosenRowData} /> 
				: <EmployeeForm setChoice={setChoice} chosenRowData={chosenRowData} />}
		</>
	)
}
