import { useContext } from 'react'
import { toast } from 'react-toastify'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { Product } from 'shared/interfaces/ProductsInterface'
import { UserContext } from 'shared/providers/UserProvider'

export const useCart = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const addToCart = async (product: Product) => {
		try {
			const updatedCart = [
				...authenticatedUser.shoppingCart.products,
				product._id,
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
			toast.success(` ✔️${product.title} adderades till varukorgen`)
			console.log(product)
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
