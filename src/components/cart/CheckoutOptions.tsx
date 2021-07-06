import styled from 'styled-components'
import freeReturns from '../../shared/images/icons/free-return.svg'

export const CheckoutOptions = (props: { setIsCartOpen: (value: boolean) => void }) => {
	return (
		<CartDiv>
			<FreeReturnDiv>
				<FreeReturnImage src={freeReturns} alt={''} />
				<Paragraph>100 dagar ångerrätt med gratis retur</Paragraph>
			</FreeReturnDiv>
			<p>frakt: 0kr</p>
			{/* <p>Total summa: {getTotalPrice()}</p> */}
			<button onClick={() => props.setIsCartOpen(false)}>fortsätt handla</button>
			<button>Gå vidare till kassan</button>
		</CartDiv>
	)
}

const CartDiv = styled.div`
	position: absolute;
	background-color: white;
	bottom: 0;
	width: 100%;
	display: grid;
`


const FreeReturnDiv = styled.div`
	display: inline-block;	
`

const FreeReturnImage = styled.img`
	width: 42px;
	aspect-ratio: auto 42/41;
	height: 31px;
`


const Paragraph = styled.p`
	font-size: 15px;
	padding: 0 0 0 16px;
`