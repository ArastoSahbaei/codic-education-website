import { useState } from 'react'
import CodicAPIService from '../../../../../shared/api/services/CodicAPIService'

export const CreateProductCategory = () => {
	const [categoryName, setCategoryName] = useState<string>('')

	return (
		<div>
			<h1>Create new ProductCategory:</h1> <br />
			<h1>{categoryName}</h1>
			<input onChange={event => setCategoryName(event.target.value)} />
			<button onClick={() => CodicAPIService.createProductCategory({ productCategoryName: categoryName })}>Create ProductCategory</button>
		</div>
	)
}
