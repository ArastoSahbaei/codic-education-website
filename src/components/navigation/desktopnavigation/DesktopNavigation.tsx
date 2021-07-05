import { useContext, useState, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { Profile } from '../profile/Profile'
import { ScrollContext } from '../../../shared/providers/ScrollProvider'
import { useNavHeight } from '../../../hooks/useNavHeight'
import { UserContext } from '../../../shared/providers/UserProvider'
import { Cart } from '../../cart/Cart'
import { BackDrop } from '../../BackDrop'
import styled from 'styled-components'
import RoutingPath from '../../../routes/RoutingPath'
import logotype from '../../../shared/images/codiclogotype.svg'
import cartIcon from '../../../shared/images/icons/cart.png'

export const DesktopNavigation = () => {
	const history = useHistory()
	const { fractions } = useContext(ScrollContext)

	const { navHeight } = useNavHeight()

	const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
	const [authenticatedUser] = useContext(UserContext)

	const displayAuthentication = () => {
		return authenticatedUser.authenticated ? (
			<ProfileWrapper>
				<Profile />
				<Icon
					src={cartIcon}
					alt={''}
					onClick={() => setIsCartOpen(!isCartOpen)}
				/>
			</ProfileWrapper>
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
			<Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
			{isCartOpen && <BackDrop drawerHandler={setIsCartOpen} />}
			<GridCell col="18/18">{displayAuthentication()}</GridCell>
		</Wrapper>
	)
}

const Icon = styled.img`
  width: 32px;
  height: 32px;
  align-self: center;
  cursor: pointer;
  filter: brightness(0) invert(0.8);
  &:hover {
    filter: brightness(0) invert(1);
  }
`

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
  height: ${(props: { height?: string }) => props.height};
`

const WrapperBackground = styled.div`
  position: absolute;
  background-color: #263746;
  opacity: ${(props: Partial<{ opacity?: number }>) => props.opacity};
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
  display: flex;
`

const ProfileWrapper = styled.div`
    grid-column: 17/19;
    display: flex;
	  justify-content: space-between
	  justify-content: center;
`
