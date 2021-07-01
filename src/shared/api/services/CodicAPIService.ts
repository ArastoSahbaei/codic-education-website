/* eslint-disable @typescript-eslint/no-explicit-any */
import http from '../CodicAPI'

const authenticatedRouteExample = () => {
	return http.get('/rofl')
}

const registerNewUser = (data: any) => {
	return http.post('/user/register', data)
}

const login = (credentials: any) => {
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

const updateValuesOfExistingUser = () => {
	return http.get('/user/:userId')
}

const deleteUserWithID = () => {
	return http.delete('/user/:userId')
}

const forgotPassword = (email: any) => {
	return http.post('/forgotpassword', email)
}

const resetPassword = (newPasswordAndToken: any) => {
	return http.put('/resetpassword', newPasswordAndToken)
}

// Admin privilege required to use the functions below

const createProduct = (productData: any) => {
	return http.post('/product', productData)
}

const createProductCategory = (productCategoryName: any) => {
	return http.post('/productcategory', productCategoryName)
}

const getAllProducts = () => {
	return http.get('/product')
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

const updateCart = (data: any) => {
	return http.put('/shoppingcart/add', data)
}

const updateFavouriteProducts = (data: any) => {
	return http.put('/favouriteproducts', data)
}

export default {
	authenticatedRouteExample,
	registerNewUser,
	login,
	getAllUsers,
	getUserWithID,
	getUserWithQuery,
	updateValuesOfExistingUser,
	deleteUserWithID,
	forgotPassword,
	resetPassword,
	createProductCategory,
	createProduct,
	getAllProductCategories,
	getAllProducts,
	createProductBrand,
	getAllProductBrands,
	updateCart,
	updateFavouriteProducts
}