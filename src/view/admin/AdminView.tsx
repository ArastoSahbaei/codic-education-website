import { useHistory } from 'react-router'
import AdminPath from 'routes/AdminPath'

export const AdminView = () => {
	const history = useHistory()

	return (
		<>
			<span onClick={() => history.push(AdminPath.careerAdminView)}>Careers</span> <br />
			<span onClick={() => history.push(AdminPath.productAdminView)}>Products</span> <br />
			<span onClick={() => history.push(AdminPath.employeeAdminView)}>Employees</span> <br />
			<span onClick={() => history.push(AdminPath.userAdminView)}>Users</span> <br />
		</>
	)
}
