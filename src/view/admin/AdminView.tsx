import { useHistory } from 'react-router'
import AdminPath from 'routes/AdminPath'

export const AdminView = () => {
	const history = useHistory()

	return (
		<>
			<span onClick={() => history.push(AdminPath.careerAdminView)}>Jobbannonser</span> <br />
			<span onClick={() => history.push(AdminPath.productAdminView)}>Produkter</span> <br />
			<span onClick={() => history.push(AdminPath.employeeAdminView)}>Anställda</span> <br />
			<span onClick={() => history.push(AdminPath.userAdminView)}>Användare</span> <br />
		</>
	)
}
