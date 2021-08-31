import React, { useState } from 'react'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import { BackDrop } from '../../BackDrop'
import logotype from '../../../shared/images/codiclogotype.svg'
import styled from 'styled-components'
import { fadeInRight } from 'shared/styles/animations/fadeInRight'

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
