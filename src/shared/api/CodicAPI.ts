import Axios from 'axios'
import LocalStorage from '../cache/LocalStorage'

const CodicAPI = Axios.create({
	baseURL: 'http://localhost:3001',
	headers: { 'Content-Type': 'application/json' }
})

CodicAPI.interceptors.request.use(function (config) {
	const token = localStorage.getItem(LocalStorage.authenticationToken)
	config.headers.Authorization = token ? `Bearer ${token}` : ''
	return config
})

export default CodicAPI