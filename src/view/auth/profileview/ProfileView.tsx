
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthPath from 'routes/AuthPath'
import RoutingPath from 'routes/RoutingPath'
import { UserContext } from 'shared/providers/UserProvider'
import { ChangePassword } from './components/ChangePassword'
import { PersonalDetails } from './components/PersonalDetails'
import { UserInformation } from './components/UserInformation'

export const ProfileView = () => {
	const history = useHistory()
	const [authenticatedUser] = useContext(UserContext)

	return (
		<div>
			{/* 	<UserInformation />
			<PersonalDetails />
			<ChangePassword />
			<button onClick={() => console.log(authenticatedUser.personalDetails)}>info</button> */}
			{/* TODO: Köphistorik */}
			<p onClick={() => history.push(AuthPath.userInformationView)}>Användaruppgifter</p>
			<p onClick={() => history.push(AuthPath.personalInformationView)}>Personuppgifter</p>
			<p onClick={() => history.push(AuthPath.newsLetterSubscriptionView)}>Nyhetsprenumeration</p>
			<p onClick={() => history.push(AuthPath.purchaseHistoryView)}>Köphistorik</p>
			<p>Logga ut</p>
		</div>
	)
}
