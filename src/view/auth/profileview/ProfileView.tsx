
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'
import { ChangePassword } from './components/ChangePassword'
import { PersonalDetails } from './components/PersonalDetails'
import { UserInformation } from './components/UserInformation'

export const ProfileView = () => {
	const [authenticatedUser] = useContext(UserContext)

	return (
		<div>
			<UserInformation />
			<h1>Personlig information</h1>
			<PersonalDetails />
			<h1>Byte av lösenord</h1>
			<ChangePassword />
			<button onClick={() => console.log(authenticatedUser.personalDetails)}>info</button>
			{/* TODO: Köphistorik */}
		</div>
	)
}
