const initialView = '/'
const employeeView = '/employees'
const signInView = '/signin'
const shopView = '/shop'
const orderFinishedView = '/order-finished'
const careerView = '/career'
const contactView = '/contact'
const checkoutView = '/checkout'
const retrieveLostPasswordView = '/reset/:token'
const productDetailsView = (id?: string) => { return id ? `/product/${id}` : '/product/:id' }
const error404View = '/404'
const aboutUsView = '/about'
const cookieInformationView = '/cookies'
const gdprInfoView = '/gdpr'
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
	retrieveLostPasswordView,
	careerView,
	productDetailsView,
	error404View,
	aboutUsView,
	cookieInformationView,
	gdprInfoView,
	membershipTermsView,
	privacyPolicyView,
	termsOfPurchaseView,
}
