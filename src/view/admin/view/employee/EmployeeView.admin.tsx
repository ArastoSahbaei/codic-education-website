import { useState } from 'react'
import { AddEmployeeForm } from './components/AddEmployeeForm'
import { ChoiceHeader } from './components/ChoiceHeader'
import { ListAllEmployeesForAdmin } from './components/ListAllEmployeesForAdmin'

export const EmployeeAdminView = () => {
	const [choice, setChoice] = useState<number>(2)

	const displayChoice = (choice: number) => {
		switch (choice) {
		case 1:
			// Form to add employee
			return <AddEmployeeForm />
		case 2:
			// List of all employees without buttons
			return <ListAllEmployeesForAdmin setChoice={setChoice} />
		case 3:
			// List of all employees with buttons to edit employee
			return <ListAllEmployeesForAdmin toEdit={true} setChoice={setChoice} />
		case 4:
			// List of all employees with buttons to delete employee
			return <ListAllEmployeesForAdmin toDelete={true} setChoice={setChoice} />
		case 5:
			// Form to edit employee
			return 'här kommer ett formulär för redigering'
		default:
			return <p>Du har inte gjort något val</p>
		}

	}

	return (
		<>
			<ChoiceHeader setChoice={setChoice} />
			<hr />
			{displayChoice(choice)}
		</>
	)

}