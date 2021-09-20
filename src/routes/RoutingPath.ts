const initialView = '/'
const employeeView = '/employees'
const signInView = '/signin'
const shopView = '/shop'
const orderFinishedView = '/order-finished'
const contactView = '/contact'
const checkoutView = '/checkout'
const retrieveLostPasswordView = '/reset/:token'
const productDetailsView = (id?: string) => { return id ? `/product/${id}` : '/product/:id' }
const error404View = '/404'
const cookieInformationView = '/cookies'

export default {
	initialView,
	employeeView,
	signInView,
	shopView,
	orderFinishedView,
	contactView,
	checkoutView,
	retrieveLostPasswordView,
	productDetailsView,
	error404View,
	cookieInformationView
}
