import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { fadeInRight } from 'shared/styles/animations/fadeInRight'
import { Cart } from 'components/cart/Cart'
import { BackDrop } from '../../BackDrop'
import { SideBar } from './sidebar/SideBar'
import logotype from 'shared/images/codiclogotype.svg'
import styled from 'styled-components'
import RoutingPath from 'routes/RoutingPath'

export const MobileNavigation: React.FC = (): JSX.Element => {
	const [openDrawer, setOpenDrawer] = useState<boolean>(false)
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
	const history = useHistory()

	return (
		<Div>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			<Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
			{isCartOpen && <BackDrop drawerHandler={setIsCartOpen} />}
			<Image src={logotype} onClick={()=> history.push(RoutingPath.initialView)} />
			<SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} setIsCartOpen={setIsCartOpen} />
			{openDrawer && <BackDrop drawerHandler={setOpenDrawer} />}
		</Div>
	)
}

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 4%;
`

const Image = styled.img`
    cursor: pointer;
    width: 20%;
    animation: ${fadeInRight} 1000ms ease-in-out;
`
