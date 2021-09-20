import { Link } from 'react-router-dom'
import { Button } from 'components/html/Button'
import { initialViewButtonStyle } from 'shared/styles/Styles'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'


export const CookieForm = () => {
	

	return (
		<FormWrapper>
			<h2> Cookies </h2>
			<p> 
                Vi använder cookies för att förbättra ditt besök på vår webbplats. 
                Genom att acceptera samtycker du till behandling av personuppgifter.
            </p>
			<Link to={RoutingPath.cookieInformationView} >Läs om hur vi använder cookies</Link> <br />
			<Button text={'Acceptera'} style={initialViewButtonStyle} />
		</FormWrapper>
	)
}

const FormWrapper = styled.div`
background-color: #dfdfdf;
height: 20vh;
margin-top: 1vh;
padding: 2vh;
`