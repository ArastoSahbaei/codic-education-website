import { useContext } from 'react'
import { UserContext } from '../../../../shared/providers/UserProvider'
import cartIcon from '../../../../shared/images/icons/cart.png'
import styled from 'styled-components'

export const CartToggler = (props: { setIsCartOpen: (handler: boolean) => void }) => {
	const { setIsCartOpen } = props
	const [authenticatedUser] = useContext(UserContext)

	const displayAmountOfItemsInCart = () => {
		return authenticatedUser.shoppingCart.products.length != 0 &&
			<Span>{authenticatedUser.shoppingCart.products.length}</Span>
	}

	return (
		<>
			<Icon onClick={() => setIsCartOpen(true)}
				src={cartIcon}
				alt=''
			/>
			{displayAmountOfItemsInCart()}
		</>
	)
}

const Icon = styled.img`
	width: 32px;
	height: 32px;
	align-self: center;
	cursor: pointer;
	filter: brightness(0) invert(0.8);
	&:hover {
		filter: brightness(0) invert(1);
	}
`

const Span = styled.span`
	width: 18px;
	height: 18px;
	border-radius: 9px;
	background: #ff3c00;
	color: #fff;
	line-height: 18px;
	text-align: center;
	font-size: 13px;
	white-space: nowrap;
	overflow: hidden;
`