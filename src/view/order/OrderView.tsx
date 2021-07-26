import { Card } from 'components/card/card'
import { Button } from 'components/html/Button'
import { ProductList } from 'components/product-list/productList'
import { translate } from 'functions/translate'
import { useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import RoutingPath from 'routes/RoutingPath'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { IOrder } from 'shared/interfaces/Order'
import styled from 'styled-components'

export const OrderView = () => {
	const query = new URLSearchParams(useLocation().search)
	const orderId = useMemo(() => query.get('orderId'), [query])
	const [order, setOrder] = useState<IOrder | null>(null)
	const history = useHistory()

	const fetchOrder = (orderId: string) => {
		CodicAPIService.getOrderById(orderId).then((data) => setOrder(data.data))
	}
	useEffect(() => {
		if (orderId) fetchOrder(orderId)
	}, [orderId])
	const orderContent = useMemo(() => {
		if (!order) return <></>
		return (
			<Card variant="outlined">
				<HeadlineSmall>Order ID: {order._id}</HeadlineSmall>
				<ProductList products={order.products} />
			</Card>
		)
	}, [order])
	return (
		<Wrapper>
			<Section>
				<Headline>{ translate('Order Finished') }</Headline>
				{orderContent}
			</Section>
			<Section>
				<Button text={translate('Keep Shopping')} onClick={() => history.push(RoutingPath.shopView)} />
			</Section>
		</Wrapper>
	)
}

const Wrapper = styled.div`
    width: 60vw;
    margin: auto;
    padding-bottom: 1rem;
`

const Section = styled.section`
    width: 100%;

    &+& {
      margin-top: 1rem;
    }
`

const Headline = styled.h2`
    width: 100%;
    text-align: center;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeadlineSmall = styled.h3`
    width: 100%;
    height: 3.5rem;
`
