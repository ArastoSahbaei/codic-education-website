import styled from 'styled-components'
import logotype from '../../../shared/images/codiclogotype.svg'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { useContext, useMemo } from 'react'
import { UserContext } from '../../../shared/providers/UserProvider'
import { Profile } from '../profile/Profile'
import { ScrollContext } from '../../../shared/providers/ScrollProvider'
import { useNavHeight } from '../../../hooks/useNavHeight'

export const DesktopNavigation= () => {
	const history = useHistory()
	const [authenticatedUser] = useContext(UserContext)
	const { fractions } = useContext(ScrollContext)

	const { navHeight } = useNavHeight()


	const displayAuthentication = () => {
		return authenticatedUser.authenticated ? (
			<Profile />
		) : (
			<Button onClick={() => history.push(RoutingPath.signInView)}>
        Logga in
			</Button>
		)
	}

	const opacity = useMemo(() => Math.max(0.5, 1 - fractions), [fractions])


	return (
		<Wrapper height={navHeight}>
			<WrapperBackground opacity={opacity} />
			<GridCell col="3/3">
				<Image
					src={logotype}
					alt={''}
					onClick={() => history.push(RoutingPath.initialView)}
				/>
			</GridCell>
			<GridCell col="5/9">
				<ParagraphWrapper>
					<Paragraph>Vår Vision</Paragraph>
					<Paragraph onClick={() => history.push(RoutingPath.employeeView)}>
          Team Codic
					</Paragraph>
					<Paragraph onClick={() => history.push(RoutingPath.contactView)}>
          Kontakt
					</Paragraph>
					<Paragraph onClick={() => history.push(RoutingPath.shopView)}>
          Butik
					</Paragraph>
				</ParagraphWrapper>
			</GridCell>
			<GridCell col="18/18">
				{displayAuthentication()}
			</GridCell>
		</Wrapper>
	)
}

const Image = styled.img`
		cursor: pointer;
		max-height: 50%;
`

const GridCell = styled.div`
		grid-column: ${(props: { col?: string }) => props.col};
		display: grid;
		align-items: center;
`

const Wrapper = styled.nav`
		display: grid;
		grid-template-columns: repeat(20, 1fr);
		padding: 0.3%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 300;
		width: 100%;
		height: ${(props: {height?: string}) => props.height};
`

const WrapperBackground = styled.div`
		position: absolute;
		background-color: #263746;
		opacity: ${(props: Partial<{opacity?: number}>) => props.opacity};
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
`

const Paragraph = styled.p`
		font-weight: 600;
		cursor: pointer;
		text-transform: uppercase;
		color: white;
		align-self: center;
`

const Button = styled.p`
		font-weight: 600;
		color: white;
		align-self: center;
		text-transform: uppercase;
		cursor: pointer;
`

export const Paragraph2 = styled.p`
		font-weight: 600;
		color: white;
		align-self: center;
		text-transform: uppercase;
		grid-column: 18/18;
		cursor: pointer;
`

const ParagraphWrapper = styled.div`
		display: flex;
		justify-content: space-between;
`
