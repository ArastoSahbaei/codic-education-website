import { useLocation } from 'react-router-dom'
import { Product } from '../../shared/interfaces/ProductsInterface'

export const ProductDetailView: React.FC = () => {
	const location = useLocation<Product>()

	return (
		<div>
			<h1>worked</h1>
			<span>{location.state.price}</span> <br />
			<span>{location.state.productBrandName}</span> <br />
			<span>{location.state.productCategoryName}</span> <br />
			<span>{location.state.quantity}</span> <br />
			<span>{location.state.title}</span> <br />
			{/* 	<button onClick={() => addToCart(location.state._id)}>Add to cart</button> */}
			<button onClick={() => console.log(location.state)}>show location state</button> <br />
			<button onClick={() => console.log(location.state)}>omg</button>
		</div>
	)
}
