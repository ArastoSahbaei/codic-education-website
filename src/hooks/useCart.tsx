import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'
import { Product } from 'shared/interfaces/ProductsInterface'
import { toast } from 'react-toastify'
import CodicAPIService from 'shared/api/services/CodicAPIService'

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

	const removeFromCart2 = async (array: [], index: number) => {
		const newArray = [...array.slice(0, index), ...array.slice(index + 1)]
		console.log(array)
		try {
			await CodicAPIService.updateCart({
				cartId: authenticatedUser.shoppingCart._id,
				products: newArray
			})
		} catch (error) {
			console.log(error)
		}
		setAuthenticatedUser({ ...authenticatedUser, shoppingCart: { ...authenticatedUser.shoppingCart, products: newArray } })
		toast.info('Produkt har tagits bort ifrån varukorgen')
	}

	return { addToCart, removeFromCart, removeFromCart2 }
}
