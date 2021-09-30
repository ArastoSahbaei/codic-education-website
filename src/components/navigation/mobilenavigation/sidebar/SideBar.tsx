import { useContext } from 'react'
import { Header } from './components/Header'
import { Link } from './components/Link'
import { primaryColor } from 'shared/styles/GlobalStyle'
import { UserContext } from 'shared/providers/UserProvider'
import styled from 'styled-components'
import codic from 'shared/images/icons/codic.png'
import visionary from 'shared/images/icons/visionary.png'
import contact from 'shared/images/icons/contact.png'
import shop from 'shared/images/icons/shop.png'
import profile from 'shared/images/icons/user.png'
import cartIcon from 'shared/images/icons/cart.png'
import data from 'shared/images/icons/data.png'
import help from 'shared/images/icons/help.png'
import feedback from 'shared/images/icons/feedback.png'
import team from 'shared/images/icons/team.png'
import enter from 'shared/images/icons/login.png'
import exit from 'shared/images/icons/logout.png'
import RoutingPath from 'routes/RoutingPath'
import AuthPath from 'routes/AuthPath'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }): JSX.Element => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	
	const displayMobileAuthentication = () => {
		return authenticatedUser.authenticated
			? <div>
				<MenuText> Inloggad som {authenticatedUser.username} </MenuText>
				<Link drawerHandler={props.drawerHandler} icon={profile} text={'Din profil'} path={AuthPath.profileView} />
				<Link drawerHandler={props.drawerHandler} icon={cartIcon} text={'Varukorg'} path={'viewCart'} />
				<Link drawerHandler={props.drawerHandler} icon={exit} text={'Logga ut'} path={'exit'} />
				<hr />
				<Link drawerHandler={props.drawerHandler} icon={data} text={'Din data från Codic'} path={'/TBA'} />
				<Link drawerHandler={props.drawerHandler} icon={help} text={'Hjälp'} path={'/TBA'} />
				<Link drawerHandler={props.drawerHandler} icon={feedback} text={'Skicka Feedback'} path={'/TBA'} />
			</div>
			: <Link drawerHandler={props.drawerHandler} icon={enter} text={'Logga in'} path={RoutingPath.signInView} />
	}

	return (
		<Drawer isOpen={props.drawerIsOpen}>
			<Header drawerHandler={props.drawerHandler} />
			<hr />
			<Link drawerHandler={props.drawerHandler} icon={codic} text={'Hem'} path={RoutingPath.initialView} />
			<Link drawerHandler={props.drawerHandler} icon={visionary} text={'Vår Vision'} />
			<Link drawerHandler={props.drawerHandler} icon= {team} text={'Utbildare'} path={RoutingPath.employeeView} />
			<Link drawerHandler={props.drawerHandler} icon={contact} text={'Kontakt'} path={RoutingPath.contactView} />
			<Link drawerHandler={props.drawerHandler} icon={shop} text={'Butik'} path={RoutingPath.shopView} />
			<hr />
			{displayMobileAuthentication()}
		</Drawer>
	)
}

interface values {
	isOpen: boolean;
}

const MenuText = styled.p`
	color: ${primaryColor};
	margin: 5px 10px 0px 10px;
`

const Drawer = styled.nav<values>`
	height: 100%;
	background: white;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 70%;
	max-width: 270px;
	z-index: 200;
	transform: translateX(-100%);
	transition: transform 0.3s ease-in-out;
	transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100)'}
`