import { Link } from 'react-router-dom'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'

export const CommersialBox = () => {

	return (
		<>
			<BigText>Hej! <br /> Vill du bli en del av detta glada gäng?</BigText>

			<SmallText> Titta då närmare på våra lediga tjänster, <Link to={RoutingPath.careerView}> här</Link> ! </SmallText>
		</>
	)
}


const BigText = styled.p`
    font-size: 2.5rem;
    text-align:center;
    margin: 40px 20px 15px 20px;
`

const SmallText = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin: 15px 20px;
`