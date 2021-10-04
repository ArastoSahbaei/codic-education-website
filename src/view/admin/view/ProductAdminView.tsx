import { CreateProduct } from '../components/CreateProduct'
import { CreateProductBrand } from '../components/CreateProductBrand'
import { CreateProductCategory } from '../components/CreateProductCategory'

export const ProductAdminView = () => {
	return(
		<div>
			<CreateProduct/>
			<CreateProductBrand />
			<CreateProductCategory />
		</div>
	)
}