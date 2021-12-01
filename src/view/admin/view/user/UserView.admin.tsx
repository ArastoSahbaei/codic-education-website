import { useState } from 'react'
import { ListAllUsers } from './components/ListAllUsers'
import { RoleForm } from './components/RoleForm'

export const UserAdminView = () => {
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
	})

	return (
		<>
			<h1> Admin-vy rörande användare</h1>
			{choice === 0
				? <ListAllUsers setChoice={setChoice} setChosenRowData={setChosenRowData} />
				: <RoleForm setChoice={setChoice} chosenRowData={chosenRowData} />}

		</>
	)
}