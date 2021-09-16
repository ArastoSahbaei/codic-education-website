import { useHistory } from 'react-router'
import styled from 'styled-components'

import AdminPath from 'routes/AdminPath'
import { primaryColor } from 'shared/styles/GlobalStyle'

export const AdminNav = () => {
	const history = useHistory()

	const navigate = (route: string) => {
		history.push(route)
	}

	return (
		<Nav>
			<NavItem onClick={() => navigate(AdminPath.adminProductsView)}>Products</NavItem>
			<NavItem onClick={() => navigate(AdminPath.adminUsersView)}>Users</NavItem>
			<NavItem onClick={() => navigate(AdminPath.adminEmployeesView)}>Employees</NavItem>
		</Nav>
	)
}

const Nav = styled.div`
    font-size: 1.3rem;
    color: ${primaryColor};
    cursor:pointer;
`
const NavItem = styled.span`
	margin: 20px;
`
