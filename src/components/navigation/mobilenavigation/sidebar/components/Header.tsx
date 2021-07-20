import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'
import { HamburgerButton } from '../../hamburgerbutton/HamburgerButton'
import logotype from 'shared/images/codiclogotype.svg'
import { useHistory } from 'react-router-dom'

export const Header = (props: { drawerHandler: (handler: boolean) => void }) => {
	const history = useHistory()

	return (
		<Div>
			<HamburgerButton drawerHandler={() => props.drawerHandler(false)} />
			<Image src={logotype} alt={''} onClick={() => history.push(RoutingPath.initialView)} />
		</Div>
	)
}

const Div = styled.div`
	padding: 5%;
	width: 85%;
	display: flex;
	justify-content: space-between;
`

const Image = styled.img`
	cursor: pointer;
`
