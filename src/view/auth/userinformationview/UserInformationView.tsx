import { ChangePasswordHandler } from './components/ChangePasswordHandler'
import { UserInformationHandler } from './components/UserInformationHandler'

export const UserInformationView = () => {
	return (
		<>
			<UserInformationHandler />
			<ChangePasswordHandler />
		</>
	)
}
