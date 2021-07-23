import { Product } from './ProductsInterface'

export interface IOrder {
    _id: string;
    paypalOrderId: string
    paypalCaptureId: string
    paypalAuthorizeId: string
    paypalToken: string
    price:string
    products:Product[]
    user:string
    shippedAt:string
    status:string
}
