import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../../shared/providers/UserProvider'
import { Profile } from '../profile/Profile'
import { Cart } from '../../cart/Cart'
import { BackDrop } from '../../BackDrop'
import { CartToggler } from './components/CartToggler'
import styled from 'styled-components'
import RoutingPath from '../../../routes/RoutingPath'
import logotype from '../../../shared/images/codiclogotype.svg'

export const DesktopNavigation = () => {
	const history = useHistory()
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
	const [authenticatedUser,] = useContext(UserContext)

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

	return (
		<Wrapper>
			<Image src={logotype} alt={''} onClick={() => history.push(RoutingPath.initialView)} />
			<ParagraphWrapper>
				<Paragraph>Vår Vision</Paragraph>
				<Paragraph onClick={() => history.push(RoutingPath.employeeView)}>Team Codic</Paragraph>
				<Paragraph onClick={() => history.push(RoutingPath.contactView)}>Kontakt</Paragraph>
				<Paragraph onClick={() => history.push(RoutingPath.shopView)}>Butik</Paragraph>
			</ParagraphWrapper>
			<Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
			{isCartOpen && <BackDrop drawerHandler={setIsCartOpen} />}
			{displayAuthentication()}
		</Wrapper>
	)
}

const Image = styled.img`
	padding: 10px;
	grid-column: 3/3;
	cursor: pointer;
`

const Wrapper = styled.nav`
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	background-color: #263746;
	padding: 0.3%;
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
	grid-column: 18/18;
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
	grid-column: 5/9;
	display: flex;
	justify-content: space-between
	`

const ProfileWrapper = styled.div`
    grid-column: 17/19;
	display: flex;
	justify-content: space-between
	justify-content: center;
`