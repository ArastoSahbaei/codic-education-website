import { useEffect, useMemo, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import CodicAPIService from 'shared/api/services/CodicAPIService'
import { IOrder } from 'shared/interfaces/Order'
import styled from 'styled-components'

export const OrderView = () => {
	const query = new URLSearchParams(useLocation().search)
	const orderId = useMemo(() => query.get('orderId'), [query])
	const [order, setOrder] = useState<IOrder | null>(null)

	const fetchOrder = (orderId: string) => {
		CodicAPIService.getOrderById(orderId).then((data) => setOrder(data.data))
	}

	useEffect(() => {
		if (orderId) fetchOrder(orderId)
	}, [orderId])

	return (
		<Wrapper>
			<Section>
				<Headline>Nice! Order finished</Headline>
				{order && <i>id: {order._id}</i>}
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
`

const Headline = styled.h2`
  width: 100%;
  text-align: center;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
