/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContactForm } from 'shared/interfaces/ContactFormInterface'
import { StartNewsSubscriptionInterface, LoginCredentials, RegisterNewUser, RetrieveLostAccount, UpdatePassword } from 'shared/interfaces/UserInterface'
import { AdminView } from 'view/admin/AdminView'
import http from '../CodicAPI'


const authenticatedRouteExample = () => {
	return http.get('/rofl')
}

const registerNewUser = (data: RegisterNewUser) => {
	return http.post('/user/register', data)
}

const login = (credentials: LoginCredentials) => {
	return http.post('/user/login', credentials)
}

const getAllUsers = () => {
	return http.get('/user')
}

const getUserWithID = (ID: string) => {
	return http.get(`/user/${ID}`)
}

const getUserWithQuery = (usernameQuery: string) => {
	return http.get(`/searchuser?username=${usernameQuery}`)
}

const updateUser = (userId: string, data: any) => {
	return http.put(`/user/${userId}`, data)
}

const deleteUserWithID = () => {
	return http.delete('/user/:userId')
}

const retrieveLostAccount = (email: RetrieveLostAccount) => {
	return http.post('/retrieveaccount', email)
}

const resetPassword = (newPasswordAndToken: any) => {
	return http.put('/resetpassword', newPasswordAndToken)
}

const createNewsLetterSubscription = (data: StartNewsSubscriptionInterface) => {
	return http.post('/newsletter/subscribe', data)
}

const updatePassword = (data: UpdatePassword) => {
	return http.put('/updatepassword', data)
}

const updateCart = (data: any) => {
	return http.put('/shoppingcart/add', data)
}

const updateNewsLetterSubscription = (userNewsLetterId: string, subscriptionValue: boolean) => {
	return http.put(`/newsletter/${userNewsLetterId}`, { receiveNewsLetters: subscriptionValue })
}

const updateFavouriteProducts = (data: any) => {
	return http.put('/favouriteproducts', data)
}

const getProductByID = (id: string) => {
	return http.get(`/product/${id}`)
}


const sendContactEmail = (data: ContactForm) => {
	return http.post('/contact', data)
}

// Admin privilege required to use the functions below

const createProduct = (productData: any) => {
	return http.post('/product', productData)
}

const createProductCategory = (productCategoryName: any) => {
	return http.post('/productcategory', productCategoryName)
}

const createJob = (careerData: any) => {
	return http.post('/career', careerData)
}

const getAllProducts = () => {
	return http.get('/product')
}

const getOrderById = (id: string) => {
	return http.get(`/order/${id}`)
}

const getAllProductCategories = () => {
	return http.get('/productcategory')
}

const createProductBrand = (productBrandData: any) => {
	return http.post('/productbrand', productBrandData)
}

const getAllProductBrands = () => {
	return http.get('/productbrand')
}

const getAllJobs = () => {
	return http.get('/career')
}

const updateJobWithId = (jobId: string, data: any) =>{
	http.put(`/career/${jobId}`, data)
}

const getJobWithId = (_id : string) => {
	return http.get(`/career/${_id}`)
}

export default {
	createProduct,
	createProductBrand,
	createProductCategory,
	createNewsLetterSubscription,
	getAllUsers,
	getOrderById,
	getUserWithID,
	getProductByID,
	getAllProducts,
	getUserWithQuery,
	getAllProductBrands,
	getAllProductCategories,
	getAllJobs,
	updateUser,
	updateCart,
	updatePassword,
	updateFavouriteProducts,
	updateNewsLetterSubscription,
	deleteUserWithID,
	login,
	resetPassword,
	registerNewUser,
	sendContactEmail,
	retrieveLostAccount,
	authenticatedRouteExample,
	createJob,
	updateJobWithId,
	getJobWithId
}
