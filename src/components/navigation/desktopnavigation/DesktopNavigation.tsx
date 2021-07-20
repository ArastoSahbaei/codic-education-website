import { useContext, useState, useMemo } from 'react'
import { useHistory, NavLink, useLocation } from 'react-router-dom'
import { primaryColor, secondaryFont } from '../../../shared/styles/GlobalStyle'
import { ScrollContext } from '../../../shared/providers/ScrollProvider'
import { useNavHeight } from '../../../hooks/useNavHeight'
import { UserContext } from '../../../shared/providers/UserProvider'
import { CartToggler } from './components/CartToggler'
import { fadeInRight } from 'shared/styles/animations/fadeInRight'
import { BackDrop } from '../../BackDrop'
import { Profile } from './components/profile/Profile'
import { Button } from 'components/html/Button'
import { Cart } from '../../cart/Cart'
import styled from 'styled-components'
import RoutingPath from '../../../routes/RoutingPath'
import logotype from '../../../shared/images/codiclogotype.svg'
import logotypeWhite from '../../../shared/images/codiclogotype_white.svg'

export const NavBG = () => {
	const { fractions } = useContext(ScrollContext)
	const opacity = useMemo(() => Math.max(0.5, 1 - fractions), [fractions])
	return <WrapperBackground style={{ opacity: opacity }} />
}

export const DesktopNavigation = () => {
	const history = useHistory()
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
	const [authenticatedUser] = useContext(UserContext)
	const { navHeight } = useNavHeight()
	const location = useLocation()

	const displayAuthentication = () => {
		return authenticatedUser.authenticated
			? (
				<ProfileWrapper>
					<Profile />
					<CartToggler setIsCartOpen={setIsCartOpen} />
				</ProfileWrapper>
			)
			: <Button text={'Logga in'} onClick={() => history.push(RoutingPath.signInView)} />
	}
	const heightStyle = useMemo(
		() => ({ height: `${navHeight}rem` }),
		[navHeight]
	)
	return (
		<Wrapper style={heightStyle}>
			<NavBG />
			<Grid>
				<GridCell column1="3/3" column2="3/3" column3="3/3">
					<Image
						src={location.pathname === RoutingPath.initialView ? logotype : logotypeWhite}
						alt={''}
						onClick={() => history.push(RoutingPath.initialView)}
					/>
				</GridCell>
				<GridCell column1="5/9" column2="5/10" column3="5/12">
					<ParagraphWrapper>
						<Paragraph to="vision">Vår Vision</Paragraph>
						<Paragraph to={RoutingPath.employeeView}>
							Team Codic
						</Paragraph>
						<Paragraph to={RoutingPath.contactView}>
							Kontakt
						</Paragraph>
						<Paragraph to={RoutingPath.shopView}>
							Butik
						</Paragraph>
					</ParagraphWrapper>
				</GridCell>
				<Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
				{isCartOpen && <BackDrop drawerHandler={setIsCartOpen} />}
				<GridCell column1="18/18" column2="18/18" column3="17/19">
					{displayAuthentication()}
				</GridCell>
			</Grid>
		</Wrapper>
	)
}

interface x {
	column1?: string | '',
	column2?: string | ''
	column3?: string | ''
}

const Image = styled.img`
    cursor: pointer;
    max-height: 50%;
    animation: ${fadeInRight} 1000ms ease-in-out;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    width: 100%;
    height: 100%;
`

const GridCell = styled.div<x>`
    grid-column: ${(props) => props.column1};
    display: grid;
    align-items: center;
    max-height: 100%;
    position: relative;
    height: 100%;
	@media(max-width: 1750px) {
		grid-column: ${(props) => props.column2};
	}
	@media(max-width: 1750px) {
		grid-column: ${(props) => props.column2};
	}
	@media(max-width: 1400px) {
		grid-column: ${(props) => props.column3};
	}
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
const Paragraph = styled(NavLink).attrs(({ activeClassName = 'is-active' }) => ({
	activeClassName,
}))`
  font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    font-family: ${secondaryFont};
    text-decoration: none;
    color: white;
    align-self: center;
    &.is-active {
      color: ${primaryColor};
    }
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
    height: 100%;
`
