import { Input } from 'components/html/Input'
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'


export const UserInformation = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	return (
		<div>
			<p>Användaruppgifter</p> <br />
			<p>Medlem sedan: {authenticatedUser.createdAt}</p> <br />
			<p>Email: {authenticatedUser.email}</p> <br />
			<p>Användarnamn: {authenticatedUser.username}</p> <br />
			<p>Prenumerar på nyhetsbrev: true</p> <br />
			<p>Inaktivera kontot</p>
			<hr />

		</div>
	)
}
