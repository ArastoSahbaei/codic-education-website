import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'components/html/Button'
import { initialViewButtonStyle } from 'shared/styles/Styles'
import { primaryColor } from 'shared/styles/GlobalStyle'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'

export const CookieForm = () => {
	const history = useHistory()
	const [acceptedCookies, setAcceptedCookies] = useState<string>('false')

	const checkLocalStoreForAcceptedCookies = () => {
		localStorage.getItem('acceptedCookies') ? setAcceptedCookies('true') : setAcceptedCookies('false')
	}

	const updateLocalStoreWithAcceptedCookies = () =>{
		localStorage.setItem('acceptedCookies', 'true')
		setAcceptedCookies('true')
	}

	useEffect(() => {
		checkLocalStoreForAcceptedCookies()
	}, [acceptedCookies])
		

	if (acceptedCookies === 'false') {
		return (
			<FormWrapper>
				<h3> Cookies </h3>
				<Span> 
					Vi använder cookies för att förbättra ditt besök på vår webbplats. 
					Genom att acceptera samtycker du till behandling av personuppgifter.
				</Span> <br />
				<Span >Läs om hur vi använder cookies <CookieInfoLink onClick={() => history.push(RoutingPath.cookieInformationView)}>här</CookieInfoLink></Span> <br />
				<Div>
					<Button text={'Acceptera'} style={initialViewButtonStyle} onClick = {updateLocalStoreWithAcceptedCookies} />
				</Div>
			</FormWrapper>
		)
	} else {
		return null
	}
}

const FormWrapper = styled.div`
position: fixed;
bottom: 0;
left: 0;
z-index: 10;
width:100%;
background-color: #dfdfdf;
opacity: 0.9;
height: 130px;
margin-top: 10px;
padding: 15px 30px;
@media (max-width: 900px) {
	height: 150px;
}
@media (max-width: 600px) {
	height: 180px;
}
@media (max-width: 300px) {
	height: 200px;
}
`

const Span = styled.span`
	font-family: none;
	font-size: 1.1rem;
`

const CookieInfoLink = styled.span`
	text-decoration: underline;
	cursor: pointer;
	color: ${primaryColor};
`

const Div = styled.div`
	text-align: right;
	margin-right: 10vw;
	margin-top: 1%;
`
