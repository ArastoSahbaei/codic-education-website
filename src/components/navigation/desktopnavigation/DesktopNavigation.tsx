import styled from 'styled-components'
import logotype from '../../../shared/images/codiclogotype.svg'

export const DesktopNavigation = () => {
	return (
		<Wrapper>
			<Image src={logotype} alt={''} />
			<ParagraphWrapper>
				<Paragraph>Vår Vision</Paragraph>
				<Paragraph>Team Codic</Paragraph>
				<Paragraph>Kontakt</Paragraph>
				<Paragraph>Butik</Paragraph>
			</ParagraphWrapper>
			{/* <Paragraph2>Logga in</Paragraph2> */}
		</Wrapper>
	)
}

const Image = styled.img`
	padding: 10px;
	grid-column: 2/2;
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

const ParagraphWrapper = styled.div`
	grid-column: 4/8;
	display: flex;
	justify-content: space-between
	`