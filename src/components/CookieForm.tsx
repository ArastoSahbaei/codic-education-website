import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'components/html/Button'
import { initialViewButtonStyle } from 'shared/styles/Styles'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'

export const CookieForm = () => {
	const [acceptedCookies, setAcceptedCookies] = useState<string | undefined>(undefined)

	const getLocalStorage = () => {
		localStorage.getItem('acceptedCookies')
			? setAcceptedCookies('accepted')
			: setAcceptedCookies(undefined)
	}

	const updateLocalStorage = () => {
		localStorage.setItem('acceptedCookies', 'accepted')
		setAcceptedCookies('accepted')
	}

	useEffect(() => {
		getLocalStorage()
	}, [acceptedCookies])

	if (!acceptedCookies) {
		return (
			<FormWrapper>
				<h3> Cookies </h3>
				<Span>
					Vi använder cookies för att förbättra ditt besök på vår webbplats.
					Genom att acceptera samtycker du till behandling av personuppgifter.
				</Span>
				<br />
				<Link to={RoutingPath.cookieInformationView}>Läs om hur vi använder cookies</Link>
				<br />
				<Div>
					<Button text={'Acceptera'} style={initialViewButtonStyle} onClick={() => updateLocalStorage()} />
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

const Div = styled.div`
	text-align: right;
	margin-right: 10vw;
	margin-top: 1%;
`
