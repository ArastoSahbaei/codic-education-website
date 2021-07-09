import { useCallback, useContext, MouseEvent } from 'react'
import styled from 'styled-components'
import { ProductList } from './components/product-list'
import { UserContext } from '../../shared/providers/UserProvider'
import { useCart } from 'hooks/useCart'
import { Button } from 'components/button'
import { Product } from 'shared/interfaces/ProductsInterface'

export const CheckoutView = () => {
	const [authenticatedUser] = useContext(UserContext)
	const products = authenticatedUser?.shoppingCart?.products
	const { removeFromCart } = useCart()

	const onRemove = async (productId: string) => await removeFromCart(productId)

	const onClickButton = useCallback(
		async (event: MouseEvent) => {
			const productIds = products
				.map((product: Product) => product._id)
				.join(',')
			window.location.href = `http://localhost:3001/payment/create-order/${productIds}/${authenticatedUser._id}`
		},
		[products]
	)

	return (
		<Wrapper>
			<Section>
				<Headline>Steg 1 - Din kundvagn</Headline>
				<ProductList products={products} onRemove={onRemove} />
				<Button text="Finish order" onClick={onClickButton} />
			</Section>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  width: 86vw;
  margin: auto;
  padding-bottom: 1rem;
`

const Section = styled.section`
  width: 100%;
`

const Headline = styled.h2`
  width: 100%;
  text-align: center;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
