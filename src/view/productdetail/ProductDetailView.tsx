import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'
import { Product } from '../../shared/interfaces/ProductsInterface'
import CodicAPIService from '../../shared/api/services/CodicAPIService'

interface value { id: string }

export const ProductDetailView: React.FC = () => {
	const location = useLocation<Product>()
	const { id } = useParams<value>()
	const { data, loading, error } = useFetch(CodicAPIService.getProductByID(id))

	return (
		loading
			? <Spinner />
			: (
				<>
					<span>{location.state ? location.state.price : data?.price}</span> <br />
					<span>{location.state ? location.state.productBrandName : data?.productBrandName}</span> <br />
					<span>{location.state ? location.state.productCategoryName : data?.productCategoryName}</span> <br />
					<span>{location.state ? location.state.quantity : data?.quantity}</span> <br />
					<span>{location.state ? location.state.title : data?.title}</span> <br />
					<button /* onClick={() => addToCart(location.state._id)} */>Add to cart</button>
				</>
			)
	)
}
