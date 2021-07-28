
import { ProfileCard } from 'components/ProfileCard'
import { ProfileSubMenu } from './components/ProfileSubMenu'

export const ProfileView = () => {
	return (
		<>
			<ProfileSubMenu />
			<ProfileCard
				name='arasto'
				title='xdbrodah'
				email='arasto.sahbaei@gmail.com'
				size={20} />
		</>
	)
}
