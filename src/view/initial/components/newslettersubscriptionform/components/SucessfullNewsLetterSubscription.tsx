import { primaryColor, primaryFont } from 'shared/styles/GlobalStyle'
import styled from 'styled-components'


export const SucessfullNewsLetterSubscription = () => {
	return (
		<Wrapper>
			<MainParagraph>Kanon - du är nu registrerad!</MainParagraph>
			<SubParagraph>Alla kommande e-mail kommer med ett avslutningsalternativ för din nya prenumeration.</SubParagraph>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	text-align: center;
	padding: 5%;
`

const MainParagraph = styled.p`
	font-family: ${primaryFont} !important;
	font-size: 44px;
	font-weight: 700;
	margin: .8em 0 .4em;
	color: ${primaryColor}
`
const SubParagraph = styled.p`
	font-size: 14px;
	line-height: 22px;
	margin: .8em 0;
	font-weight: 600;
`
