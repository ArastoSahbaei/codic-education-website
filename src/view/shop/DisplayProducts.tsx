import './DisplayProducts.css'
import { useContext } from 'react'
import { UserContext } from '../../shared/providers/UserProvider'
/* import { ToggleCartContext } from '../../../../shared/provider/ToggleCartProvider' */
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import heartImg from '../../../../shared/images/heart.svg'
import likedHeartImg from '../../../../shared/images/filledHeart.svg'
import { useFetch } from '../../hooks/useFetch'
import CodicAPIService from '../../shared/api/services/CodicAPIService'

export const DisplayProducts = () => {
	const history = useHistory()
	/* const [, setIsShoppingBagOpen] = useContext(ToggleCartContext) */

	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const { data, loading, error } = useFetch(CodicAPIService.getAllProducts)

	const addToCart = async (productId: string) => {
		try {
			const updatedCart = [...authenticatedUser?.shoppingCart?.products, productId]
			const { data } = await CodicAPIService.updateCart({
				cartId: authenticatedUser.shoppingCart._id,
				products: updatedCart
			})
			/* 	setIsShoppingBagOpen(true) */
			setAuthenticatedUser({ ...authenticatedUser, shoppingCart: { ...authenticatedUser.shoppingCart, products: data.products } })
		} catch (error) {
			console.log(error)
		}
	}

	const displayData = () => {
		if (!loading) {
			return data?.map((item: any) =>
				<div className='displayProductWrapper' key={item?._id}>
					<div>
						<div className='productImgWrapper'>
							<img className='productImg' src={'https://picsum.photos/200/200'} alt=''/*  onClick={() => history.push(RoutingPath.productDetailsView(item._id), item)} */ />
						</div>
						<p className='pBrand'>Herbaman Co.</p>
						<p className='pTitle'>{item?.title}</p>
						<p className='pPrice'>{item?.price} kr</p>
					</div>
					<div className='addToCartButton' onClick={() => addToCart(item._id)}>Addera till varukorg</div>
				</div>)
		}
	}

	return (
		loading
			? <h1>LOADING..</h1>
			: <div className='displayProductsContainer'>
				{displayData()}
			</div>
	)
}
