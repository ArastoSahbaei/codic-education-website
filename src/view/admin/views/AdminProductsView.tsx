import { AdminNav } from '../components/nav/AdminNav'
import { CreateProduct } from '../components/products/CreateProduct'
import { CreateProductBrand } from '../components/products/CreateProductBrand'
import { CreateProductCategory } from '../components/products/CreateProductCategory'

export const AdminProductsView = () => {
	return (
		<div>
			<AdminNav />
			<h1>ProductsView</h1>
			<CreateProduct />
			<hr />
			<CreateProductBrand />
			<hr />
			<CreateProductCategory />
			<hr />
		</div>
	)
}
