import { primaryColor } from 'shared/styles/GlobalStyle'
import styled from 'styled-components'

export const CareerCard = (props: { title: string, jobType: string, location: string, image?: string, size?: number }) => {
	return (
		<Wrapper>
			<Div size={props.size}>
				<Image src={props.image || 'https://image.spreadshirtmedia.net/image-server/v1/mp/compositions/T1188A70MPA2649PT10X3Y25D172357765FS1994/views/1,width=550,height=550,appearanceId=70,backgroundColor=FFFFFF,noPt=true/soet-bjoern-ansikte-ritning-iphone-78-skal.jpg'} alt={''} />
				<ParagraphName>{props.title}</ParagraphName>
				<Paragraph>{props.location}</Paragraph>
				<Paragraph>{props.jobType}</Paragraph>
			</Div>
		</Wrapper>
	)
}

interface values {
	size: number | undefined
}

const Wrapper = styled.div`
    cursor: pointer;
	padding: 5%;
	display: flex;
	justify-content: center;
    text-align: center;
`

const Div = styled.div<values>`
	width: ${props => props.size ? `${props.size}%;` : '100%;'}
	background-color: ${primaryColor};
	padding: 0.5%;
	box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

const Image = styled.img`
	background-color: white;
    width: 100%;
    height: 200px;
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