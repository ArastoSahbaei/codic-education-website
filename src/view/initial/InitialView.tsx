import initialImage from '../../shared/images/teacher3.jpg'
import styled from 'styled-components'
import { Collaborations } from './Collaborations'
import { StudentReviews } from './StudentReviews'
import { useNavHeight } from '../../hooks/useNavHeight'

export const InitialView = () => {
	const { navHeight } = useNavHeight()

	return (
		<Wrapper marginTop={navHeight}>
			<Image src={initialImage} alt={''} />
			<Paragraph>Lorem ipsum dolor sit amet consectetur
				<br /> adipisicing elit. Possimus, fugiat?</Paragraph>
			<Collaborations />
			<StudentReviews />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	margin-top: ${(props: {marginTop?: string}) => props.marginTop}
	`

const Image = styled.img`
	grid-column: 1/21;
	width: 100%;
	height: 90vh;
	`

const Paragraph = styled.p`
	position: absolute;
	width: 100%;
	text-align: center;
	margin-top: 57vh;
	color: #f9f9f9;
	font-size: 2.5rem;
	font-weight: 700;
`
