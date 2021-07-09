import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import RoutingPath from '../../routes/RoutingPath'
import freeReturns from '../../shared/images/icons/free-return.svg'
import { UserContext } from '../../shared/providers/UserProvider'

export const CheckoutOptions = (props: { setIsCartOpen: (value: boolean) => void }) => {
	const authenticatedUser = useContext(UserContext)
	const history = useHistory()

	const getTotalPrice = () => {
		let totalPrice = 0
		authenticatedUser.shoppingCart.products.map((item: any) => totalPrice = totalPrice + item.price)
		return totalPrice
	}

	const navigateToCheckout = () => {
		props.setIsCartOpen(false)
		history.push(RoutingPath.checkoutView)
	}

	return (
		<CartDiv>
			<FreeReturnDiv>
				<FreeReturnImage src={freeReturns} alt={''} />
				<Paragraph>100 dagar ångerrätt med gratis retur</Paragraph>
			</FreeReturnDiv>
			<p>frakt: 0kr</p>
			<p>Total summa: {getTotalPrice()}</p>
			<button onClick={() => props.setIsCartOpen(false)}>fortsätt handla</button>
			<button onClick={() => navigateToCheckout()}>Gå vidare till kassan</button>
		</CartDiv>
	)
}

const CartDiv = styled.div`
	position: absolute;
	background-color: white;
	bottom: 0;
	width: 100%;
	display: grid;
`


const FreeReturnDiv = styled.div`
	display: inline-block;	
`

const FreeReturnImage = styled.img`
	width: 42px;
	aspect-ratio: auto 42/41;
	height: 31px;
`


const Paragraph = styled.p`
	font-size: 15px;
	padding: 0 0 0 16px;
`