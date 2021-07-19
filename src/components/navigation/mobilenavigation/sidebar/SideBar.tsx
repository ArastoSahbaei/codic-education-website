import styled from 'styled-components'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }): JSX.Element => {
	return (
		<Drawer isOpen={props.drawerIsOpen}>
			<h1 onClick={() => props.drawerHandler(false)}>close + logo</h1>
			<hr />
			<Paragraph>Hem</Paragraph> <br />
			<Paragraph>Vår Vision</Paragraph> <br />
			<Paragraph>Kontakt</Paragraph> <br />
			<Paragraph>Butik</Paragraph> <br />
		</Drawer>
	)
}

interface values {
	isOpen: boolean;
}

const Paragraph = styled.p`
font-weight: 600;
font-size: 1.4rem;
cursor: pointer;
transition: 0.3s;
&:hover {
	margin-left: 20px;
	transition: 0.3s;
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
	max-width: 400px;
	z-index: 200;
	transform: translateX(-100%);
	transition: transform 0.3s ease-in-out;
	transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100)'}
`