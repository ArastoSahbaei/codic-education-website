import { useState } from 'react'
import CodicAPIService from '../../../../../shared/api/services/CodicAPIService'

export const CreateProductCategory = () => {
	const [categoryName, setCategoryName] = useState<string>('')

	return (
		<div>
			<h1>Skapa ny Produkt-kategori:</h1> <br />
			<h1>{categoryName}</h1>
			<input onChange={event => setCategoryName(event.target.value)} />
			<button onClick={() => CodicAPIService.createProductCategory({ productCategoryName: categoryName })}>Skapa Produkt-kategori</button>
		</div>
	)
}
