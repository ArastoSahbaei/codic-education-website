/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContactForm } from 'shared/interfaces/ContactFormInterface'
import { StartNewsSubscriptionInterface, LoginCredentials, RegisterNewUser, RetrieveLostAccount, UpdatePassword } from 'shared/interfaces/UserInterface'
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

const updateUser = (data: any) => {
	return http.put('/user', data)
}

const deleteUserWithID = () => {
	return http.delete('/user/:userId')
}

const uploadAvatar = (ID: string, data: FormData) => {
	return http.put(`/user/upload/${ID}`, data)
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

const getAllEmployees = () => {
	return http.get('/employee')
}

const sendContactEmail = (data: ContactForm) => {
	return http.post('/contact', data)
}

const getAllJobs = () => {
	return http.get('/career')
}

const getJobById = (id: string) => {
	return http.get(`/career/${id}`)
}

const createApplyforCareer = (data: any) => {
	return http.post('/applicant', data)
}

const checkIfEmailExists = (data: any) => {
	return http.post('/newsletter/check', data)
}

// Admin privilege required to use the functions below

const createJob = (data: any) => {
	return http.post('/career', data)
}

const updateJob = (id: string, data: any) => {
	return http.put(`/career/${id}`, data)
}

const getApplicantById = (id: string) =>{
	return http.get(`/applicant/${id}`)
}

const getAllApplicants = () =>{
	return http.get('/applicant')
}

const createProduct = (productData: any) => {
	return http.post('/product', productData)
}

const createProductCategory = (productCategoryName: any) => {
	return http.post('/productcategory', productCategoryName)
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

const updateUserRole = (userId: string, reqBody: any) => {
	return http.put(`/admin/updateuserrole/${userId}`, reqBody)
}

const updateEmployeeInformation = (userId: string, employeeAdminData: any) => {
	return http.put(`/admin/updateemployeeinfo/${userId}`, employeeAdminData)
}

const uploadEmployeeAvatar = (employeeId: string, avatar: any) => {
	return http.put(`/employee/upload/${employeeId}`, avatar, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
}

export default {
	createJob,
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
	checkIfEmailExists,
	getJobById,
	getApplicantById,
	getAllApplicants,
	createApplyforCareer,
	updateUser,
	uploadAvatar,
	updateCart,
	updateJob,
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
	getAllEmployees, 
	updateUserRole,
	updateEmployeeInformation,
	uploadEmployeeAvatar,
}
