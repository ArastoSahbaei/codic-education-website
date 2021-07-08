import { useContext } from 'react'
import { toast } from 'react-toastify'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { UserContext } from 'shared/providers/UserProvider'

export const useCart = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const addToCart = async (productId: string) => {
		try {
			const updatedCart = [
				...authenticatedUser?.shoppingCart?.products,
				productId,
			]
			const { data } = await CodicAPIService.updateCart({
				cartId: authenticatedUser.shoppingCart._id,
				products: updatedCart,
			})
			setAuthenticatedUser({
				...authenticatedUser,
				shoppingCart: {
					...authenticatedUser.shoppingCart,
					products: data.products,
				},
			})
			toast.success(' ✔️ Adderat produkt till varukorg')
		} catch (error) {
			console.log(error)
		}
	}

	const removeFromCart = async (productId: string) => {
		try {
			const updatedCart = [...authenticatedUser?.shoppingCart?.products].filter(
				(product) => product._id != productId
			)
			const { data } = await CodicAPIService.updateCart({
				cartId: authenticatedUser.shoppingCart._id,
				products: updatedCart,
			})
			setAuthenticatedUser({
				...authenticatedUser,
				shoppingCart: {
					...authenticatedUser.shoppingCart,
					products: data.products,
				},
			})
			toast.success(' ✔️ Product borttagen')
		} catch (error) {
			console.log(error)
		}
	}

	return { addToCart, removeFromCart }
}
