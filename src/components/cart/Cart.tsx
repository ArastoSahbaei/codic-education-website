import { CheckoutOptions } from './CheckoutOptions'
import exit from '../../shared/images/icons/cross.svg'
import trash from '../../shared/images/icons/trash.png'
import styled from 'styled-components'
import { useContext } from 'react'
import { UserContext } from '../../shared/providers/UserProvider'
import CodicAPIService from '../../shared/api/services/CodicAPIService'

export const Cart = (props: { isCartOpen: boolean, setIsCartOpen: (value: boolean) => void }) => {
	const { isCartOpen, setIsCartOpen } = props
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const removeProductFromCart = async (array: [], index: number) => {
		const newArray = [...array.slice(0, index), ...array.slice(index + 1)]

		await CodicAPIService.updateCart({
			cartId: authenticatedUser?.shoppingCart?._id,
			products: newArray
		})
		setAuthenticatedUser({ ...authenticatedUser, shoppingCart: { ...authenticatedUser.shoppingCart, products: newArray } })
	}

	const displayCartWithItems = () => {
		return <DisplayCartWrapper>
			{authenticatedUser?.shoppingCart?.products?.map((product: any, index: number) =>
				<UList key={index}>
					<Image /* onClick={() => navigateToProductDetail(product)} */
						src={'https://picsum.photos/200/200'}
						alt='' />
					<Icon onClick={() => removeProductFromCart(authenticatedUser?.shoppingCart?.products, index)}
						src={trash}
						alt={''} />
					<List>titel: {product.title}</List>
					<List>pris: {product.price} :-</List>
					<hr />
				</UList>
			)}
			<CheckoutOptions setIsCartOpen={setIsCartOpen} />
		</DisplayCartWrapper >
	}

	const displayEmptyCart = () => {
		return <div>
			{/* <img src={emptyCart} alt='' className='emptyCartImg' /> */}
			<p>Your cart is empty.. <br /> Why not fill it with new designs?</p>
			<button/*  onClick={() => navigateToShop()} */>Butik</button> <br />
		</div>
	}

	return (
		<CartWrapper isOpen={isCartOpen}>
			<span>{authenticatedUser.shoppingCart.products.length} föremål i varukorgen</span>
			<ExitImage src={exit} alt={''} onClick={() => setIsCartOpen(false)} />
			{authenticatedUser.shoppingCart.products.length !== 0 ? displayCartWithItems() : displayEmptyCart()}
		</CartWrapper>
	)
}

interface values {
	isOpen: boolean;
}

const CartWrapper = styled.nav<values>`
	height: 100%;
	background: white;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	right: 0;
	width: 70%;
	max-width: 400px;
	z-index: 200;
	transform: translateX(+100%);
	transition: transform 0.3s ease-in-out;
	transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100)'}
`

const DisplayCartWrapper = styled.div`
	height: 78%;
	overflow-y: auto;
`

const UList = styled.ul`
	border-bottom: solid 1px white;
	padding: 1%;
`

const List = styled.li`

`

const Image = styled.img`
	width: 130px;
`

const Icon = styled.img`
	width: 14px;
	height: 16px;
	aspect-ratio: auto 14/16;
	cursor: pointer;
	transition: 0.3s;
	float: right;
	margin-right: 30px;
	&:hover {
		transform: rotate(140deg);
		transition: 0.3s;
	}
`

const ExitImage = styled.img`
	width: 15px;
	height: 15px;
	aspect-ratio: auto 15/15;
	transition: 0.2s;
	cursor: pointer;
	margin-left: 51%;
	&:hover {
		transition: 0.2s;
		transform: rotate(90deg)
	}
`