const initialView = '/'
const employeeView = '/medarbetare'
const signInView = '/autentisera'
const shopView = '/butik'
const orderFinishedView = '/order-finished'
const contactView = '/kontakt'
const careerView = '/career'
const checkoutView = '/checkout'
const retrieveLostPasswordView = '/reset/:token'
const productDetailsView = (id?: string) => { return id ? `/product/${id}` : '/product/:id' }

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
	productDetailsView
}
