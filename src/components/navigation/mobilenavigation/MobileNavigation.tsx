import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { fadeInRight } from 'shared/styles/animations/fadeInRight'
import { Cart } from 'components/cart/Cart'
import { BackDrop } from '../../BackDrop'
import { SideBar } from './sidebar/SideBar'
import logotype from 'shared/images/codiclogotype.svg'
import logotypeWhite from 'shared/images/codiclogotype_white.svg'
import styled from 'styled-components'
import RoutingPath from 'routes/RoutingPath'

export const MobileNavigation: React.FC = (): JSX.Element => {
	const [openDrawer, setOpenDrawer] = useState<boolean>(false)
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
	const history = useHistory()
	const location = useLocation()
	const bColor = (location.pathname === RoutingPath.initialView) ? 'white' : 'lightgrey'

	return (
		<Div theme={bColor}>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			<Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
			{isCartOpen && <BackDrop drawerHandler={setIsCartOpen} />}
			<Image src={location.pathname === RoutingPath.initialView ? logotype : logotypeWhite} onClick={()=> history.push(RoutingPath.initialView)} />
			<SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} setIsCartOpen={setIsCartOpen} />
			{openDrawer && <BackDrop drawerHandler={setOpenDrawer} />}
		</Div>
	)
}

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 4%;
	background-color: ${props => props.theme};
	position: sticky;
	top: 0;
	width: 100%;
	vertical-align: middle;
	z-index:1000;
	transition: top 0.3s; 
`

const Image = styled.img`
    cursor: pointer;
    width: 20%;
    animation: ${fadeInRight} 1000ms ease-in-out;
`