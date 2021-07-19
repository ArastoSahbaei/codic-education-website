import styled from 'styled-components'
import codic from 'shared/images/icons/codic.png'
import visionary from 'shared/images/icons/visionary.png'
import contact from 'shared/images/icons/contact.png'
import shop from 'shared/images/icons/shop.png'
import { Header } from './components/Header'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }): JSX.Element => {

	return (
		<Drawer isOpen={props.drawerIsOpen}>
			<Header drawerHandler={props.drawerHandler} />
			<hr />
			<Paragraph> <Icon src={codic} alt={''} /> Hem </Paragraph>
			<Paragraph> <Icon src={visionary} alt={''} /> Vår Vision </Paragraph>
			<Paragraph> <Icon src={contact} alt={''} /> Kontakt </Paragraph>
			<Paragraph> <Icon src={shop} alt={''} /> Butik </Paragraph>
			<hr />
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
		transition: 0.3s;
		background-color: orange;
		gap: 10px 50px;
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