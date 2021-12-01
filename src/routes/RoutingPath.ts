const initialView = '/'
const employeeView = '/employees'
const signInView = '/signin'
const shopView = '/shop'
const orderFinishedView = '/order-finished'
const careerView = '/career'
const careerDetailsView = (id?: string) => {return id ? `/career/details/${id}` : '/career/details/:id' }
const contactView = '/contact'
const checkoutView = '/checkout'
const resetPasswordView = '/reset/:token'
const productDetailsView = (id?: string) => { return id ? `/product/${id}` : '/product/:id' }
const error404View = '/404'
const aboutUsView = '/about'
const cookieInformationView = '/cookies'
const membershipTermsView = '/membership-terms'
const privacyPolicyView = '/privacy-policy'
const termsOfPurchaseView = '/purchase-terms'

export default {
	initialView,
	employeeView,
	signInView,
	shopView,
	orderFinishedView,
	contactView,
	checkoutView,
	resetPasswordView,
	careerView,
	careerDetailsView,
	productDetailsView,
	error404View,
	aboutUsView,
	cookieInformationView,
	membershipTermsView,
	privacyPolicyView,
	termsOfPurchaseView,
}