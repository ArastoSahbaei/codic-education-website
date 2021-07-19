import { HamburgerButton } from '../hamburgerbutton/HamburgerButton'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import logotype from 'shared/images/codiclogotype.svg'
import icon from 'shared/images/icons/language.png'
import RoutingPath from 'routes/RoutingPath'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }): JSX.Element => {
	const history = useHistory()

	return (
		<Drawer isOpen={props.drawerIsOpen}>
			<Div>
				<HamburgerButton drawerHandler={() => props.drawerHandler(false)} />
				<img src={logotype} alt={''} onClick={() => history.push(RoutingPath.initialView)} />
			</Div>
			<hr />
			<Paragraph> <Icon src={icon} alt={''} />Hem</Paragraph>
			<Paragraph> <Icon src={icon} alt={''} />Vår Vision</Paragraph>
			<Paragraph> <Icon src={icon} alt={''} />Kontakt</Paragraph>
			<Paragraph> <Icon src={icon} alt={''} />Butik</Paragraph>
			<hr />
			<Paragraph>Ditt Konto</Paragraph>
		</Drawer>
	)
}

interface values {
	isOpen: boolean;
}

const Icon = styled.img`
		width: 24px;
		height: 24px;
		filter: brightness(0) invert(0.7);

`

const Div = styled.div`
	padding: 5%;
	width: 85%;
	display: flex;
	justify-content: space-between;
`

const Paragraph = styled.p`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 10px 30px;
	padding: 5%;
	font-weight: 600;
	font-size: 1rem;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		margin-left: 20px;
		transition: 0.3s;
	}
	&:hover ${Icon}{
		filter: brightness(0);
	}
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