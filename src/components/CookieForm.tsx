import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'components/html/Button'
import { initialViewButtonStyle } from 'shared/styles/Styles'
import { primaryColor } from 'shared/styles/GlobalStyle'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'

export const CookieForm = () => {
	const history = useHistory()
	const [acceptedCookies, setAcceptedCookies] = useState<string | undefined>(undefined)

	const getLocalStorage = () => {
		switch (localStorage.getItem('acceptedCookies')) {
		case 'accepted':
			setAcceptedCookies('accepted')
			break
		case 'declined':
			setAcceptedCookies('declined')
			break
		default:
			setAcceptedCookies(undefined)
		}
	}

	const updateLocalStorage = (choice: string) => {
		localStorage.setItem('acceptedCookies', choice)
		setAcceptedCookies(choice)
	}

	useEffect(() => {
		getLocalStorage()
	}, [acceptedCookies])

	if (!acceptedCookies) {
		return (
			<FormWrapper>
				<h3> Cookies </h3>
				<CloseLink onClick={() => updateLocalStorage('declined')}>Stäng</CloseLink>
				<Span>
					Vi använder cookies för att förbättra ditt besök på Codic Education.
					Genom att acceptera samtycker du till behandling av personuppgifter.
					<br />
					Läs om hur vi använder cookies
				</Span>
				<CookieInfoLink onClick={() => history.push(RoutingPath.cookieInformationView)}> här. </CookieInfoLink>
				<br />
				<ButtonDiv>
					<Button text={'Acceptera'} style={initialViewButtonStyle} onClick={() => updateLocalStorage('accepted')} />
				</ButtonDiv>
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
	padding: 10px 20px;
	&:hover {
		opacity: 1;
	}
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
	cursor: pointer;
	font-family: none;
	font-size: 1.1rem;
	color: ${primaryColor};
`

const CloseLink = styled.span`
	position: relative;
	top: -20px;
	float: right;
	text-decoration: underline;
	cursor: pointer;
`

const ButtonDiv = styled.div`
	text-align: right;
	margin-right: 5vw;
	margin-bottom: 1%;
`
