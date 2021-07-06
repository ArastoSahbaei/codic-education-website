import { useContext } from 'react'
import { UserContext } from '../../shared/providers/UserProvider'
import styled from 'styled-components'
/* import { ToggleCartContext } from '../../../../shared/provider/ToggleCartProvider' */
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import CodicAPIService from '../../shared/api/services/CodicAPIService'

export const DisplayProducts = () => {
	const history = useHistory()
	/* const [, setIsShoppingBagOpen] = useContext(ToggleCartContext) */

	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const { data, loading, error } = useFetch(CodicAPIService.getAllProducts)

	const addToCart = async (productId: string) => {
		try {
			const updatedCart = [...authenticatedUser?.shoppingCart?.products, productId]
			const { data } = await CodicAPIService.updateCart({
				cartId: authenticatedUser.shoppingCart._id,
				products: updatedCart
			})
			/* 	setIsShoppingBagOpen(true) */
			setAuthenticatedUser({ ...authenticatedUser, shoppingCart: { ...authenticatedUser.shoppingCart, products: data.products } })
		} catch (error) {
			console.log(error)
		}
	}

	const displayData = () => {
		if (!loading) {
			return data?.map((item: any) =>
				<ProductWrapper key={item?._id}>
					<ImageParent>
						<Image src={'https://picsum.photos/200/200'} alt=''/*  onClick={() => history.push(RoutingPath.productDetailsView(item._id), item)} */ />
					</ImageParent>
					<Paragraph>Herbaman Co.</Paragraph>
					<Paragraph>{item.title}</Paragraph>
					<Paragraph>{item.price} kr</Paragraph>
					<Button onClick={() => addToCart(item._id)}>Addera till varukorg</Button>
				</ProductWrapper>
			)
		}
	}

	return (
		loading
			? <h1>LOADING..</h1>
			: <Wrapper>
				{displayData()}
			</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	width: 80%;
	margin: 0 auto;
	grid-template-columns: repeat(4, 1fr);
`

const ProductWrapper = styled.div`
	grid-template-columns: repeat(12, 1fr);
	padding: 5%;
`

const ImageParent = styled.div`
	overflow: hidden;
`

const Image = styled.img`
	width: 100%;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	transition: transform .75s, visibility .75s ease-in;
	&:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
`

const Paragraph = styled.p`
	color: #313942;
	line-height: 5px;
	font-family: MuseoSans-500, arial;
	font-size: 0.875rem;
	font-weight: 600;
`

const Button = styled.div`
	background-color: #4084b5;
	text-align: center;
	padding: 1.5%;
	color: white;
	font-size: 0.75rem;
	font-weight: 600;
	&:hover {
		cursor: pointer;
	}
`