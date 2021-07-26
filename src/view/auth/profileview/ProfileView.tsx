
import { useHistory } from 'react-router-dom'
import AuthPath from 'routes/AuthPath'
import styled from 'styled-components'

export const ProfileView = () => {
	const history = useHistory()

	return (
		<div>
			<Paragraph onClick={() => history.push(AuthPath.userInformationView)}>Användaruppgifter</Paragraph>
			<Paragraph onClick={() => history.push(AuthPath.personalInformationView)}>Personuppgifter</Paragraph>
			<Paragraph onClick={() => history.push(AuthPath.newsLetterSubscriptionView)}>Nyhetsprenumeration</Paragraph>
			<Paragraph onClick={() => history.push(AuthPath.purchaseHistoryView)}>Köphistorik</Paragraph>
			<Paragraph>Logga ut</Paragraph>
			<hr />
		</div>
	)
}

const Paragraph = styled.p`
	cursor: pointer;
	color: red;
	transition: 0.3s;

	&:hover {
		transition: 0.3s;

		margin: 0.3%;
	}
`