import { useState } from 'react'
import { AddEmployeeForm } from './components/AddEmployeeForm'
import { ListAllEmployeesForAdmin } from './components/ListAllEmployeesForAdmin'

export const EmployeeAdminView = () => {
	const [choice, setChoice] = useState<number>(2)

	const displayChoice = (choice:number) =>
	{
		switch(choice){
		case 1:
			return <AddEmployeeForm />
		case 2:
			return <ListAllEmployeesForAdmin />
		default:
			return <p>Du har inte valt att lägga till användare</p>
		}

	}

	return(
		<>
			{displayChoice(choice)}
		</>
	)

}