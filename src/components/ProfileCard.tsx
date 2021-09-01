import { primaryColor } from 'shared/styles/GlobalStyle'
import styled from 'styled-components'

export const ProfileCard = (props: { name: string, email: string, number?: string, image?: string, size?: number, title?: string, }) => {
	return (
		<Wrapper>
			<Div size={props.size}>
				<Image src={props.image || 'https://image.spreadshirtmedia.net/image-server/v1/mp/compositions/T1188A70MPA2649PT10X3Y25D172357765FS1994/views/1,width=550,height=550,appearanceId=70,backgroundColor=FFFFFF,noPt=true/soet-bjoern-ansikte-ritning-iphone-78-skal.jpg'} alt={''} />
				<ParagraphName>{props.name}</ParagraphName>
				<Paragraph>{props.title}</Paragraph>
				<Paragraph>{props.email}</Paragraph>
				<Paragraph>{props.number}</Paragraph>
			</Div>
		</Wrapper>
	)
}

interface values {
	size: number | undefined
}

const Wrapper = styled.div`
	padding: 5%;
	display: flex;
	justify-content: center;
`

const Div = styled.div<values>`
	width: ${props => props.size ? `${props.size}%;` : '100%;'}
	background-color: ${primaryColor};
	padding: 0.5%;
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
