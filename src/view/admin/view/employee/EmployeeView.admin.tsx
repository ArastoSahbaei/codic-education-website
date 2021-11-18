import { useState } from 'react'
import { ChoiceHeader } from './components/ChoiceHeader'
import { AddNewEmployee } from './components/AddNewEmployee'
import { ListAllEmployeesForAdmin } from './components/ListAllEmployeesForAdmin'
import { UpdateEmployee } from './components/UpdateEmployee'
import { DeleteEmployee } from './components/DeleteEmployee'
import styled from 'styled-components'
import { ListAllEmployeesForAdminMaterialTable } from './components/ListAllEmployeesForAdminMaterialTable'

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
			return <ListAllEmployeesForAdminMaterialTable/>
		case 3:
			// List of all employees with buttons to edit employee
			return <ListAllEmployeesForAdmin toEdit={true} setChoice={setChoice} setChosenEmployee={setChosenEmployee}/>
		case 4:
			// List of all employees with buttons to delete employee
			return <ListAllEmployeesForAdmin toDelete={true} setChoice={setChoice} setChosenEmployee={setChosenEmployee} />
		case 5:
			// Form to edit employee
			return <UpdateEmployee employee={chosenEmployee} setChoice={setChoice} />
		case 6:
			// Form to delete employee
			return <DeleteEmployee employee={chosenEmployee} setChoice={setChoice} />
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