import { Product } from 'shared/interfaces/ProductsInterface'

export interface IProductList {
    products: Product[]
    onRemove?: (productId: string) => void
}
