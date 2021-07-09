import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { Spinner } from '../../components/Spinner'
import { Product } from '../../shared/interfaces/ProductsInterface'
import CodicAPIService from '../../shared/api/services/CodicAPIService'

export const ProductDetailView: React.FC = () => {
	const location = useLocation<Product>()
	const { data, loading, error } = useFetch(CodicAPIService.getProductByID('60e406cab4843a4d10746354'))

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
					{/* 	<button onClick={() => addToCart(location.state._id)}>Add to cart</button> */}
				</>
			)
	)
}
