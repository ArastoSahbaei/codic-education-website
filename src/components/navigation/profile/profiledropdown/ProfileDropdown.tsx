import { useHistory } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../../../shared/providers/UserProvider'
import RoutingPath from '../../../../routes/RoutingPath'
import styled from 'styled-components'

export const ProfileDropdown = () => { 
	const [, setAuthenticatedUser] = useContext(UserContext)
	const history = useHistory()
	const logout = () => {
		localStorage.removeItem('token')
		setAuthenticatedUser(false)
		history.push(RoutingPath.initialView)
	}
	return (
		<DropDownWrapper>
			<DropDownItem>Dropdown</DropDownItem>
			<DropDownItem>Dropdown</DropDownItem>
			<DropDownItem>Dropdown</DropDownItem>
			<DropDownItem>Dropdown</DropDownItem>
			<DropDownItem onClick={() => logout()}>Logout</DropDownItem>
		</DropDownWrapper>
	)
}

const DropDownItem = styled.p`
    font-size: 1rem;
    color:white;
`
export const DropDownWrapper = styled.div`
    visibility: hidden;
    position: absolute;
    background-color: #263746;
    padding: 10px 35px;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
`