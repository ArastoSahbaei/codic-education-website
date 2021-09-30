import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from 'shared/providers/UserProvider'
import { nonAuthenticatedUser } from 'shared/data/nonAuthenticatedUser'
import LocalStorage from 'shared/cache/LocalStorage'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'

export const Link =
	(props: { drawerHandler: (handler: boolean) => void, icon: any, text: string, path?: string, isCartOpen?: boolean, setIsCartOpen?: (value: boolean) => void }) => {
		const history = useHistory()
		const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
		const { isCartOpen, setIsCartOpen } = props

		const logout = () => {
			localStorage.removeItem(LocalStorage.authenticationToken)
			setAuthenticatedUser(nonAuthenticatedUser)
			history.push(RoutingPath.initialView)
		}

		const displayAmountOfItemsInCart = () => {
			return authenticatedUser.shoppingCart.products.length != 0
				&& <Span>{authenticatedUser.shoppingCart.products.length}</Span>	
		}

		const showCart = () => {
			(setIsCartOpen) ? setIsCartOpen(true) : null
		}

		const handleClick = () => {
			switch (props.path){
			case 'exit':
				logout()
				break
			case 'viewCart':
				showCart()
				break
			default:
				history.push(props.path || '/')
			}		
			props.drawerHandler(false)
		}

		return (
			<Paragraph onClick={() => handleClick()}>
				<Icon src={props.icon} alt={''} />
				{props.text}
				{props.text === 'Varukorg' ? displayAmountOfItemsInCart() : null}
			</Paragraph>
		)
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
	padding: 3%;
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

const Span = styled.span`
	position: relative;
	top: -10px;
	left: -130px;
	width: 16px;
	height: 16px;
	border-radius: 8px;
	background: #ff3c00;
	color: #fff;
	line-height: 16px;
	text-align: center;
	font-size: 12px;
	white-space: nowrap;
	overflow: hidden;
`