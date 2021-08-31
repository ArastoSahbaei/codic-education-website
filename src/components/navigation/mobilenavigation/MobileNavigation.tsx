import React, { useState } from 'react'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { fadeInRight } from 'shared/styles/animations/fadeInRight'
import { BackDrop } from '../../BackDrop'
import { SideBar } from './sidebar/SideBar'
import logotype from '../../../shared/images/codiclogotype.svg'
import styled from 'styled-components'

export const MobileNavigation: React.FC = (): JSX.Element => {
	const [openDrawer, setOpenDrawer] = useState<boolean>(false)

	return (
		<Div>
			<HamburgerButton drawerHandler={setOpenDrawer} />
			<Image src={logotype} />
			<SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
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
