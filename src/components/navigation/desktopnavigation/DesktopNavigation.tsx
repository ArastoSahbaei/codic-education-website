import React, { useContext, useState, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { Profile } from '../profile/Profile'
import { ScrollContext } from '../../../shared/providers/ScrollProvider'
import { useNavHeight } from '../../../hooks/useNavHeight'
import { UserContext } from '../../../shared/providers/UserProvider'
import { Cart } from '../../cart/Cart'
import { BackDrop } from '../../BackDrop'
import { CartToggler } from './components/CartToggler'
import styled from 'styled-components'
import RoutingPath from '../../../routes/RoutingPath'
import logotype from '../../../shared/images/codiclogotype.svg'
import { DropDownWrapper } from '../profile/profiledropdown/ProfileDropdown'

export const NavBG = () => {
	const { fractions } = useContext(ScrollContext)

	const opacity = useMemo(() => Math.max(0.5, 1 - fractions), [fractions])

	return <WrapperBackground style={{ opacity: opacity }} />
}

export const DesktopNavigation = () => {
	const history = useHistory()

	const { navHeight } = useNavHeight()

	const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
	const [authenticatedUser] = useContext(UserContext)

	const displayAuthentication = () => {
		return authenticatedUser.authenticated
			? (
				<ProfileWrapper>
					<Profile />
					<CartToggler setIsCartOpen={setIsCartOpen} />
				</ProfileWrapper>
			)
			: <Button onClick={() => history.push(RoutingPath.signInView)}>Logga in</Button>
	}
	const heightStyle = useMemo(
		() => ({ height: `${navHeight}rem` }),
		[navHeight]
	)
	return (
		<Wrapper style={heightStyle}>
			<NavBG />
			<Grid>
				<GridCell col="3/3">
					<Image
						src={logotype}
						alt={''}
						onClick={() => history.push(RoutingPath.initialView)}
					/>
				</GridCell>
				<GridCell col="5/17">
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
			</Grid>
		</Wrapper>
	)
}

const Image = styled.img`
    cursor: pointer;
    max-height: 50%;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    width: 100%;
    height: 100%;
`

const GridCell = styled.div`
    grid-column: ${(props: { col?: string }) => props.col};
    display: grid;
    align-items: center;
    max-height: 100%;
    position: relative;
    height: 100%;
`

const Wrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;
    width: 100%;
`

const WrapperBackground = styled.div`
    position: absolute;
    background-color: #263746;
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
    margin: 0 24px;
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
`

const ProfileWrapper = styled.div`
    grid-column: 17/19;
    display: flex;
    justify-content: space-between
    justify-content: center;
    height: 100%;
    &:hover ${DropDownWrapper} {
    visibility: visible;
    opacity: 1;
    }
`
