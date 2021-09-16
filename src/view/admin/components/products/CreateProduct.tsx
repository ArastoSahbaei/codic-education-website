import { useEffect, useState } from 'react'
import CodicAPIService from '../../../../shared/api/services/CodicAPIService'

export interface createNewProduct {
	title: string
	price: number
	quantity: number
	productCategory: string,
	productBrand: string
}

export interface productCategoryNameId {
	productCategoryName: string,
	_id?: string
}

export const CreateProduct = () => {
	const [productCategories, setProductCategories] = useState<[productCategoryNameId]>([{ productCategoryName: '', _id: '' }])
	const [productBrands, setProductBrands] = useState([{ productBrandName: '', _id: '' }])
	const [product, setProduct] = useState<createNewProduct>({ title: '', price: 0, quantity: 0, productBrand: '', productCategory: '' })

	const fetchProductCategoriesData = async () => {
		const { data } = await CodicAPIService.getAllProductCategories()
		setProductCategories(data)
	}

	const fetchProductBrandsData = async () => {
		const { data } = await CodicAPIService.getAllProductBrands()
		setProductBrands(data)
	}

	const handleSelectedBrandChange = (event: any, target: keyof createNewProduct) => {
		const find = (productBrands.find(({ productBrandName }) => productBrandName === event.target.value))
		setProduct({ ...product, [target]: find?._id })
	}

	const handleSelectedCategoryChange = (event: any, target: keyof createNewProduct) => {
		const find = (productCategories.find(({ productCategoryName }) => productCategoryName === event.target.value))
		setProduct({ ...product, [target]: find?._id })
	}

	const selectCategory = () => {
		return <select onChange={(event) => handleSelectedCategoryChange(event, 'productCategory')} >
			{productCategories.map((x: productCategoryNameId) => <option key={x?._id}>{x?.productCategoryName}</option>)}
		</select>
	}

	const selectBrand = () => {
		return <select onChange={(event) => handleSelectedBrandChange(event, 'productBrand')} >
			{productBrands.map((x: any) => <option key={x?._id}>{x?.productBrandName}</option>)}
		</select>
	}

	useEffect(() => {
		fetchProductCategoriesData()
		fetchProductBrandsData()
	}, [])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof createNewProduct) => {
		setProduct({ ...product, [target]: event.target.value })
	}

	return (
		<div>
			<h1>Create a new product:</h1>
			productCategory: {selectCategory()} <br />
			productBrand: {selectBrand()} <br />
			title: <input placeholder='title' onChange={event => handleChange(event, 'title')} /> <br />
			price: <input placeholder='price' onChange={event => handleChange(event, 'price')} /> <br />
			quantity: <input placeholder='quantity' onChange={event => handleChange(event, 'quantity')} /> <br />
			<button onClick={() => CodicAPIService.createProduct(product)}>Create Product</button>
		</div>
	)
}