import { useContext } from 'react'
import styled from 'styled-components'
import { ProductList } from './components/product-list'
import { UserContext } from '../../shared/providers/UserProvider'
import { useCart } from 'hooks/useCart'

export const CheckoutView = () => {
	const [authenticatedUser] = useContext(UserContext)
	const products = authenticatedUser?.shoppingCart?.products
	const { removeFromCart } = useCart()

	const onRemove = async (productId: string) => await removeFromCart(productId)

	return (
		<Wrapper>
			<Section>
				<Headline>Steg 1 - Din kundvagn</Headline>
				<ProductList products={products} onRemove={onRemove} />
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
