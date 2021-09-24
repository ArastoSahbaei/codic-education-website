import { useHistory } from 'react-router-dom'
import { primaryColor } from 'shared/styles/GlobalStyle'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'
import bImage from '../../../shared/images/brownDesk.jpg'

export const CommersialBox = () => {
	const history = useHistory()

	return (
		<BoxWrapper >
			<BigText>Hej! <br /> Vill du bli en del av detta glada gäng?</BigText>

			<SmallText> Titta då närmare på våra lediga tjänster, <CareerLink onClick={() => history.push(RoutingPath.careerView)}> här</CareerLink> ! </SmallText>
		</BoxWrapper>
	)
}

const BoxWrapper = styled.div`
    background-image: url(${bImage});
    background-size: cover;
    height: 100%
`

const BigText = styled.p`
    color: #f7b045;
    font-size: 2.5rem;
    text-align:center;
    padding: 15px 20px 10px 20px;
`

const SmallText = styled.p`
    color: #f7b045;
    font-size: 1.5rem;
    text-align: center;
    padding: 5px 20px 50px 20px;
`

const CareerLink = styled.span`
    color: ${primaryColor};
    text-decoration: underline;
    cursor: pointer;
`