export interface IOrder {
    _id: string;
    paypalOrderId: string
    paypalCaptureId: string
    paypalAuthorizeId: string
    paypalToken: string
    price:string
    products:string
    user:string
    shippedAt:string
    status:string
}
