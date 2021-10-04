import { CreateProduct } from './CreateProduct'
import { CreateProductBrand } from './CreateProductBrand'
import { CreateProductCategory } from './CreateProductCategory'

export const ProductAdminView = () => {
	return(
		<div>
			<CreateProduct/>
			<CreateProductBrand />
			<CreateProductCategory />
		</div>
	)
}