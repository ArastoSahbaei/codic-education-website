import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from 'shared/providers/UserProvider'
import { useFetch } from '../../../hooks/useFetch'
import { useCart } from 'hooks/useCart'
import { Product } from '../../../shared/interfaces/ProductsInterface'
import { Spinner } from '../../../components/Spinner'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import RoutingPath from '../../../routes/RoutingPath'
import CodicAPIService from '../../../shared/api/services/CodicAPIService'


export const DisplayProducts = () => {
	const { addToCart } = useCart()
	const history = useHistory()
	const { data, loading } = useFetch(CodicAPIService.getAllProducts())
	const [authenticatedUser] = useContext(UserContext)

	const handleAddToCart = (item: Product) => {
		authenticatedUser.authenticated
			? addToCart(item)
			: toast.info('Autentisering krävs') && history.push(RoutingPath.signInView)
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
					<Button onClick={() => handleAddToCart(item)}>Addera till varukorg</Button>
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
