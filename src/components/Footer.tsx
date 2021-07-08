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
				<Div onClick={() => window.open(ExternalPath.googleMapsLocation)}>
					<Image src={MapIcon} alt="" />
					<Span2> Drottninggatan 38, Göteborg, Västra Götalands län, 411 07, Sverige </Span2> <br /> <br /><br />
				</Div>
				<Image src={CopyRight} alt="" />
				<Span2> Upphovsrätt {getCurrentYear()}, © Codic Education AB. </Span2>
			</CompanyOL>
		</Wrapper>
	)
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
	`

const CompanyListWrapper = styled.ol`
	grid-column: 3/5;
	list-style: none;
`

const ContactListWrapper = styled.ol`
	grid-column: 5/7;
	list-style: none;
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

	&:hover ${Span} {
		padding-right: 20px;
	}

	${Span} {
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
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

const Div = styled.div`
	cursor: pointer;
`

const MinorLi = styled.li`
	color: #D3D3D3;
	font-size: 0.8em;
`

const CompanyOL = styled.ol`
	display: inline;
	grid-column: 9/13;
	justify-self: center;
	align-self: center;
	list-style: none;
`

const Image = styled.img`
	width: 6%;
`

const Span2 = styled.span`
	line-height: 100%;
	margin-top: 6%;
`