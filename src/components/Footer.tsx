import { useHistory } from 'react-router-dom'
import { getCurrentYear } from '../functions/getCurrentYear'
import { primaryColor, secondaryColor, primaryFont } from '../shared/styles/GlobalStyle'
import styled from 'styled-components'
import MapIcon from '../shared/images/map_icon.svg'
import CopyRight from '../shared/images/copyright.svg'
import RoutingPath from '../routes/RoutingPath'
import ExternalPath from '../routes/ExternalPath'

export const Footer = () => {
	const history = useHistory()

	const display = (text: string, navigate: string) => {
		return (
			<List>
				<Span onClick={() => history.push(navigate)}>{text}</Span>
			</List>
		)
	}

	return (
		<Wrapper>
			<InformationListWrapper>
				<Title>Information</Title>
				{display('Cookies', '/TBA')}
				{display('Köpvilkor', '/TBA')}
				{display('Medlemsvilkor', '/TBA')}
				{display('Integritetspolicy', '/TBA')}
				{display('Returnera en vara', '/TBA')}
			</InformationListWrapper>

			<CompanyListWrapper>
				<Title>Codic Education</Title>
				{display('Om Oss', '/TBA')}
				{display('Samhällsarbete', '/TBA')}
				{display('Press & Media', '/TBA')}
				{display('Karriär', '/TBA')}
				{display('App', '/TBA')}
			</CompanyListWrapper>

			<ContactListWrapper>
				<Title>Kontakt</Title>
				{display('Kontaktform', RoutingPath.contactView)}
				<Span>Direktlinje: +46 768 99 0065</Span>
				<MinorLi>Veckodagar: 10:00 - 23:00</MinorLi>
				<MinorLi>Helgdagar: 12:00 - 16:00</MinorLi>
				{display('Live Chat', '/TBA')}
			</ContactListWrapper>

			<CompanyOL>
				<Div hasCursor={true} onClick={() => window.open(ExternalPath.googleMapsLocation)}>
					<Image src={MapIcon} alt="" />
					<Span2> Drottninggatan 38, Göteborg, Västra Götalands län, 411 07, Sverige </Span2> <br /> <br /><br />
				</Div>
				<Div>
					<Image src={CopyRight} alt="" />
					<Span2> Upphovsrätt {getCurrentYear()}, © Codic Education AB. </Span2>
				</Div>
			</CompanyOL>
		</Wrapper>
	)
}

interface values {
	hasCursor?: boolean | false
}

const Wrapper = styled.div`
	width: 100%;
	background-color: ${secondaryColor};
	color: white;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
`

const InformationListWrapper = styled.ol`
	grid-column: 1/3;
	list-style: none;
	@media(max-width: 1100px) {
		grid-column: 1/12;
		grid-row: 1/1;
	}
	`

const CompanyListWrapper = styled.ol`
	grid-column: 4/6;
	list-style: none;
	@media(max-width: 1100px) {
		grid-column: 1/12;
		grid-row: 2/2;
	}
`

const ContactListWrapper = styled.ol`
	grid-column: 7/9;
	list-style: none;
	@media(max-width: 1100px) {
		grid-column: 1/12;
		grid-row: 3/3;
	}
`

const CompanyOL = styled.ol`
	grid-column: 9/13;
	justify-self: center;
	align-self: center;
	@media(max-width: 1100px) {
		grid-column: 1/12;
		grid-row: 4/4;
	}
`

const Title = styled.li`
font-size: 1.3em;
	border-bottom: 0.1em solid #ffffff;
	font-family: ${primaryFont};
	color: ${primaryColor};
`

const Span = styled.span`
`

const List = styled.li`
	color: white;
	margin-top: 0.3em;

	${Span} {
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}
	
	&:hover ${Span} {
		padding-right: 20px;
	}


	${Span}:after {
		content: '»';
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	}

	&:hover ${Span}:after {
		opacity: 1;
		right: 0;
	}
`

const Div = styled.div<values>`
	display: flex;
	cursor: ${props => props.hasCursor ? 'pointer;' : ''};
`

const MinorLi = styled.li`
	color: #D3D3D3;
	font-size: 0.8em;
`


const Image = styled.img`
	width: 40px;
	margin: 10px;
`

const Span2 = styled.span`
	align-self: center;
`