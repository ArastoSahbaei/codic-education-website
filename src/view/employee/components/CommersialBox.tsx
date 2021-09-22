import { Link } from 'react-router-dom'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'
import bImage from '../../../shared/images/brownDesk.jpg'

export const CommersialBox = () => {

	return (
		<div style={{ backgroundImage: `url("${bImage}")`, backgroundSize: '100% 100%'}}>
			<BigText>Hej! <br /> Vill du bli en del av detta glada gäng?</BigText>

			<SmallText> Titta då närmare på våra lediga tjänster, <Link to={RoutingPath.careerView}> här</Link> ! </SmallText>
		</div>
	)
}


const BigText = styled.p`
    font-size: 2.5rem;
    text-align:center;
    padding: 40px 20px 15px 20px;
`

const SmallText = styled.p`
    font-size: 1.5rem;
    text-align: center;
    padding: 15px 20px 75px 20px;
`