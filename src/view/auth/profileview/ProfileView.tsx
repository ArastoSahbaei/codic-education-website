
import { useHistory } from 'react-router-dom'
import AuthPath from 'routes/AuthPath'

export const ProfileView = () => {
	const history = useHistory()

	return (
		<div>
			<p onClick={() => history.push(AuthPath.userInformationView)}>Användaruppgifter</p>
			<p onClick={() => history.push(AuthPath.personalInformationView)}>Personuppgifter</p>
			<p onClick={() => history.push(AuthPath.newsLetterSubscriptionView)}>Nyhetsprenumeration</p>
			<p onClick={() => history.push(AuthPath.purchaseHistoryView)}>Köphistorik</p>
			<p>Logga ut</p>
		</div>
	)
}
