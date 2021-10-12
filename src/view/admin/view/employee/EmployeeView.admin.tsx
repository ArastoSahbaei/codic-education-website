import { useState } from 'react'
import { AddNewEmployee } from './components/AddNewEmployee'
import { ChoiceHeader } from './components/ChoiceHeader'
import { ListAllEmployeesForAdmin } from './components/ListAllEmployeesForAdmin'
import styled from 'styled-components'

export const EmployeeAdminView = () => {
	const [choice, setChoice] = useState<number>(0)
	const [chosenEmployee, setChosenEmployee] = useState()

	const displayChoice = (choice: number) => {
		switch (choice) {
		case 1:
			// Form to add employee
			return <AddNewEmployee />
		case 2:
			// List of all employees without buttons
			return <ListAllEmployeesForAdmin setChoice={setChoice} setChosenEmployee={setChosenEmployee}/>
		case 3:
			// List of all employees with buttons to edit employee
			return <ListAllEmployeesForAdmin toEdit={true} setChoice={setChoice} setChosenEmployee={setChosenEmployee}/>
		case 4:
			// List of all employees with buttons to delete employee
			return <ListAllEmployeesForAdmin toDelete={true} setChoice={setChoice} setChosenEmployee={setChosenEmployee} />
		case 5:
			// Form to edit employee
			console.log(chosenEmployee)
			return 'här kommer ett formulär för redigering'
		default:
			return <Div>Du har inte gjort något val - välj ovan!</Div>
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

const Div = styled.div`
	text-align: center;
	height: 200px;
	font-size: 1.5rem;
	padding-top: 30px;
`