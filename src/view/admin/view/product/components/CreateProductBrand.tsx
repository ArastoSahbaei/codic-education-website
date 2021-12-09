import { useState } from 'react'
import CodicAPIService from '../../../../../shared/api/services/CodicAPIService'
/* import { createNewProductBrand } from '../../../shared/interface/Interface' */

export interface NewProductBrandInterface {
	productBrandName: string,
	brandDescription?: string,
	brandCountry?: string
}

export const CreateProductBrand = () => {
	const [brandName, setBrandName] = useState<NewProductBrandInterface>({ productBrandName: '' })

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof NewProductBrandInterface) => {
		setBrandName({ ...brandName, [target]: event.target.value })
	}

	return (
		<div>
			<h1>Skapa nytt Produkt-märke:</h1> <br />
			<h1>{brandName.productBrandName}</h1>
			<input onChange={event => handleChange(event, 'productBrandName')} />
			<button onClick={() => CodicAPIService.createProductBrand(brandName)}>Skapa Produkt-märke</button>
		</div>
	)
}
