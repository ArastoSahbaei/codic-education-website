import { SubProfileViewWrapper } from 'shared/styles/Styles'
import { PersonalDetailsHandler } from './components/PersonalDetailsHandler'
import { UploadAvatar } from './components/UploadAvatar'

export const PersonalInformationView = () => {
	return (
		<SubProfileViewWrapper>
			<PersonalDetailsHandler />
			<br />
			<hr />
			<br />
			<UploadAvatar />
		</SubProfileViewWrapper>
	)
}
