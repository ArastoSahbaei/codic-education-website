import styled from 'styled-components'
import logotype from '../../../shared/images/codiclogotype.svg'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const DesktopNavigation = () => {
	const history = useHistory()

	return (
		<Wrapper>
			<Image src={logotype} alt={''} onClick={() => history.push(RoutingPath.initialView)} />
			<ParagraphWrapper>
				<Paragraph>Vår Vision</Paragraph>
				<Paragraph onClick={() => history.push(RoutingPath.employeeView)}>Team Codic</Paragraph>
				<Paragraph>Kontakt</Paragraph>
				<Paragraph onClick={() => history.push(RoutingPath.shopView)}>Butik</Paragraph>
			</ParagraphWrapper>
			<Button onClick={() => history.push(RoutingPath.signInView)}>Logga in</Button>
		</Wrapper>
	)
}

const Image = styled.img`
	padding: 10px;
	grid-column: 3/3;
	cursor: pointer;
`

const Wrapper = styled.nav`
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	background-color: #263746;
	padding: 0.3%;
	`

const Paragraph = styled.p`
	font-weight: 600;
	cursor: pointer;
	text-transform: uppercase;
	color: white;
	align-self: center;
	`

const Button = styled.p`
	font-weight: 600;
	color: white;
	align-self: center;
	text-transform: uppercase;
	grid-column: 18/18;
	cursor: pointer;
`

const ParagraphWrapper = styled.div`
	grid-column: 5/9;
	display: flex;
	justify-content: space-between
	`