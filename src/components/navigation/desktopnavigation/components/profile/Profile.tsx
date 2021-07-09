import { useContext } from 'react'
import { UserContext } from '../../../../../shared/providers/UserProvider'
import { DropDownWrapper, ProfileDropdown } from './profiledropdown/ProfileDropdown'
import styled from 'styled-components'

export const Profile = () => {
	const [authenticatedUser] = useContext(UserContext)

	return (
		<ProfileContainer>
			<Paragraph>{authenticatedUser.username}</Paragraph>
			<ProfileDropdown />
		</ProfileContainer>
	)
}

const Paragraph = styled.p`
    font-weight: 600;
    color: white;
    align-self: center;
    text-transform: uppercase;
    grid-column: 18/18;
    cursor: pointer;
    height: 100%;
    &:hover + ${DropDownWrapper} {
        visibility: visible;
        opacity: 1;
    }
`

const ProfileContainer = styled.div`
    place-self: center;
    margin: 0 35px;
`
