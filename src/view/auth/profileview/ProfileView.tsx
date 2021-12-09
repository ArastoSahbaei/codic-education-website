import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'
import { ProfileCard } from 'components/ProfileCard'
import { ProfileSubMenu } from './components/ProfileSubMenu'
import { USER_PROFILE_WIDTH } from 'shared/styles/constants'
import styled from 'styled-components'

export const ProfileView = () => {
	const [authenticatedUser] = useContext(UserContext)
		
	return (
		<>
			<ProfileSubMenu />
			<Wrapper>
				{authenticatedUser.avatar
					? <ProfileCard
						image={'http://localhost:3001/' + authenticatedUser.avatar.filePath}
						name={authenticatedUser.personalDetails.firstName + ' ' + authenticatedUser.personalDetails.lastName}
						email={authenticatedUser.email}
						size={50} />
					: <ProfileCard
						name={authenticatedUser.personalDetails.firstName + ' ' + authenticatedUser.personalDetails.lastName}
						email={authenticatedUser.email}
						size={50} />
				}
			</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	width: ${USER_PROFILE_WIDTH}%;
	display: inline-block;
`
