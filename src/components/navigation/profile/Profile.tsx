import styled from 'styled-components'
import { useContext } from 'react'
import { UserContext } from '../../../shared/providers/UserProvider'
import { DropDownWrapper, ProfileDropdown } from './profiledropdown/ProfileDropdown'

export const Profile = () => {
	const authenticatedUser = useContext(UserContext)

	return (
		<ProfileWrapper>
			<Paragraph>{authenticatedUser.username}</Paragraph>
			<ProfileDropdown />
		</ProfileWrapper>
	)
}

const Paragraph = styled.p`
    font-weight: 600;
    color: white;
    align-self: center;
    text-transform: uppercase;
    grid-column: 18/18;
    cursor: pointer;
    padding: 0px 35px;
    height: 100%;
`

const ProfileWrapper = styled.div`
    place-self: center;
    &:hover ${DropDownWrapper} {
        visibility: visible;
        opacity: 1;
    }
`
