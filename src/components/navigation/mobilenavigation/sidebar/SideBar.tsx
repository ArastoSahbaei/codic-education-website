import { Header } from './components/Header'
import { Link } from './components/Link'
import styled from 'styled-components'
import codic from 'shared/images/icons/codic.png'
import visionary from 'shared/images/icons/visionary.png'
import contact from 'shared/images/icons/contact.png'
import shop from 'shared/images/icons/shop.png'
import RoutingPath from 'routes/RoutingPath'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }): JSX.Element => {

	return (
		<Drawer isOpen={props.drawerIsOpen}>
			<Header drawerHandler={props.drawerHandler} />
			<hr />
			<Link drawerHandler={props.drawerHandler} icon={codic} text={'Hem'} path={RoutingPath.initialView} />
			<Link drawerHandler={props.drawerHandler} icon={visionary} text={'Vår Vision'} />
			<Link drawerHandler={props.drawerHandler} icon={contact} text={'Kontakt'} path={RoutingPath.contactView} />
			<Link drawerHandler={props.drawerHandler} icon={shop} text={'Butik'} path={RoutingPath.shopView} />
			<hr />
		</Drawer>
	)
}

interface values {
	isOpen: boolean;
}

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