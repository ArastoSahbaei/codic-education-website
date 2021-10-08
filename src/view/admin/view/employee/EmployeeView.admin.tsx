import { useState } from "react"
import { AddEmployeeForm } from "./components/AddEmployeeForm"

export const EmployeeAdminView = () => {
	const [choice, setChoice] = useState<number>(1)

	const displayChoice = (choice:number) =>
	{
		switch(choice){
		case 1:
			return <AddEmployeeForm />
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