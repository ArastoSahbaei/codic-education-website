import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import { UserContext } from '../../../shared/providers/UserProvider'
import { Product } from '../../../shared/interfaces/ProductsInterface'
import { Spinner } from '../../../components/Spinner'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import RoutingPath from '../../../routes/RoutingPath'
import CodicAPIService from '../../../shared/api/services/CodicAPIService'


export const DisplayProducts = () => {
	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const { data, loading, error } = useFetch(CodicAPIService.getAllProducts)

	const addToCart = async (product: Product) => {
		try {
			const updatedCart = [...authenticatedUser.shoppingCart.products, product._id]
			const { data } = await CodicAPIService.updateCart({
				cartId: authenticatedUser.shoppingCart._id,
				products: updatedCart
			})
			setAuthenticatedUser({ ...authenticatedUser, shoppingCart: { ...authenticatedUser.shoppingCart, products: data.products } })
			toast.success(` ✔️${product.title} adderades till varukorgen`)
			console.log(product)
		} catch (error) {
			console.log(error)
		}
	}

	const displayData = () => {
		if (!loading) {
			return data?.map((item: Product) =>
				<ProductWrapper key={item._id}>
					<ImageParent>
						<Image src={'https://picsum.photos/200/200'} alt='' onClick={() => history.push(RoutingPath.productDetailsView(item._id), item)} />
					</ImageParent> <br />
					<Paragraph>Herbaman Co.</Paragraph> <br />
					<Paragraph>{item.title}</Paragraph> <br />
					<Paragraph>{item.price} kr</Paragraph> <br />
					<Button onClick={() => addToCart(item)}>Addera till varukorg</Button>
				</ProductWrapper>
			)
		}
	}

	return (
		loading
			? <Spinner />
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