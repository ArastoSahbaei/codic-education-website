import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { initialViewButtonStyle } from 'shared/styles/Styles'
import { fadeInFromBottom } from 'shared/styles/animations/fadeInFromBottom'
import { primaryColor } from 'shared/styles/GlobalStyle'
import { Button } from 'components/html/Button'
import cookieLove from 'shared/images/cookielove.svg'
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
				<Image src={cookieLove} alt={''} />
				<Paragraph> WOULD YOU LIKE A <br /> CYBER COOKIE? </Paragraph>
				<CloseLink onClick={() => updateLocalStorage('declined')}><span>Stäng</span></CloseLink>
				<Span>
					Vi använder cookies för att förbättra ditt besök på Codic Education.
					Genom att acceptera samtycker du till behandling av personuppgifter.
					Läs om hur vi använder cookies
					<CookieInfoLink onClick={() => history.push(RoutingPath.cookieInformationView)}> här. </CookieInfoLink>
				</Span>
				<br />
				<ButtonPosition>
					<Button text={'Acceptera'} style={initialViewButtonStyle} onClick={() => updateLocalStorage('accepted')} />
				</ButtonPosition>
			</FormWrapper>
		)
	} else {
		return null
	}
}

const Image = styled.img`
	width: 130px;
	@media (max-width: 900px) {
		width: 100px;
	}
	@media (max-width: 600px) {
		display: none;
	}
`

const FormWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	animation: ${fadeInFromBottom} 1000ms ease-in-out;
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
		grid-template-columns: repeat(9, 1fr);
		height: 150px;
	}
	@media (max-width: 600px) {
		display:block;
		height: 180px;
	}
	@media (max-width: 300px) {
		display:block;
		height: 250px;
	}
`

const Paragraph = styled.p`
	align-self: center;
	@media (max-width: 600px) {
		display: block;
		br { 
			content: ' ';
		}
		padding-top: 20px;
	}
`

const Span = styled.span`
	grid-column: 4/10;
	grid-row: 1/1;
	font-family: none;
	font-size: 1.1rem;
	align-self: center;
	@media (max-width: 600px) {
		display:block;				
	}
`

const CookieInfoLink = styled.span`
	cursor: pointer;
	font-family: none;
	font-size: 1.1rem;
	color: ${primaryColor};
`

const CloseLink = styled.span`
	grid-column: 12/12;
	text-decoration: underline;
	span {
		cursor: pointer;
	}
	
	@media (max-width: 900px) {
		grid-column: 9/9;
		grid-row: 1/1;
	}
	@media (max-width: 600px) {
		position:relative;
		top: -20px;
		float: right;
	}
	@media (max-width: 300px) {
		position:relative;
		top: -40px;
		left: 15px;
		float: right;
	}
`

const ButtonPosition = styled.div`
	grid-column: 11/11;
	grid-row: 1/1;
	align-self: center;
	@media (max-width: 900px) {
		grid-column: 8/8;
		align-self: end;
	}
	@media (max-width: 600px) {
		float:right;
	}
	@media (max-width: 300px) {
		float: right;
	}
`