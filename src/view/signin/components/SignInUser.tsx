import { SignInProps } from '../../../shared/interfaces/SingInInterface'
import { Wrapper } from '../../../shared/styles/SiginStyles'
import { RecoverPassword } from './RecoverPassword'
import { SignIn } from './SignIn'

export const SignInUser: React.FC<SignInProps> = ({ data }: SignInProps) => {
	return (
		<Wrapper>
			{data.showRecoverPasswordView
				? <RecoverPassword data={data} />
				: <SignIn data={data} />
			}
		</Wrapper>
	)
}
