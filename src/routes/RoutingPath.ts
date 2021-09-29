const initialView = '/'
const employeeView = '/employees'
const signInView = '/signin'
const shopView = '/shop'
const orderFinishedView = '/order-finished'
const careerView = '/career'
const careerDetailsView = (id?: string) => { return id ? `${careerView}/${id}` : `${careerView}/:id` }
const contactView = '/contact'
const checkoutView = '/checkout'
const retrieveLostPasswordView = '/reset/:token'
const productDetailsView = (id?: string) => { return id ? `/product/${id}` : '/product/:id' }
const error404View = '/404'

export default {
	initialView,
	employeeView,
	signInView,
	shopView,
	orderFinishedView,
	contactView,
	checkoutView,
	retrieveLostPasswordView,
	careerView,
	careerDetailsView,
	productDetailsView,
	error404View
}
