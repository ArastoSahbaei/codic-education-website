import { contactPersonList } from 'shared/data/contactPersonList'
import { windowsMaxWidth } from 'shared/data/WindowsSizes'
import { DimensionsInterface } from 'shared/interfaces/DimensionsInterface'
import { primaryColor } from 'shared/styles/GlobalStyle'
import styled from 'styled-components'

interface IcontactPersonList {
	img: string
	name: string
	role: string
	email: string
	tel: string
}

export const ShowContactPersons = () => {

	const display = () => {
		return (
			contactPersonList.map((item: IcontactPersonList) =>
				<Wrapper key={item.name}>
					<Div>
						<Image src={item.img} alt={''} />
						<ParagraphName>{item.name}</ParagraphName>
						<Paragraph>{item.role}</Paragraph>
						<Paragraph>{item.email}</Paragraph>
						<Paragraph>{item.tel}</Paragraph>
					</Div>
				</Wrapper>
			)
		)
	}

	return (
		<GridWrapper dimensions={windowsMaxWidth}>
			{display()}
		</GridWrapper>

	)
}

const GridWrapper = styled.div<DimensionsInterface>`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin: 0 auto;
	width: 80%;
	grid-gap: 1%;
	@media (max-width: 1450px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 1050px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

const Wrapper = styled.div`
	padding: 5%;
`

const Div = styled.div`
	background-color: ${primaryColor};
	padding: 1%;
	box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

const Image = styled.img`
	width: 100%;
	background-color: white;
`

const ParagraphName = styled.p`
	font-family: Arial;
	font-weight: 700;
	font-style: normal;
	letter-spacing: 0em;
	text-transform: none;
	line-height: 1.2em;
`
const Paragraph = styled.p`    
	font-family: Alegreya Sans;
	font-weight: 400;
	font-style: normal;
	letter-spacing: .01em;
	text-transform: none;
	line-height: 1.5em;
`

