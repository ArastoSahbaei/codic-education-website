const initialView = '/'
const employeeView = '/medarbetare'
const signInView = '/autentisera'
const shopView = '/butik'
const contactView = '/kontakt'
const checkoutView = '/checkout'
const productDetailsView = (id?: string) => { return id ? `/product/${id}` : '/product/:id' }

export default {
	initialView,
	employeeView,
	signInView,
	shopView,
	contactView,
	checkoutView,
	productDetailsView
}