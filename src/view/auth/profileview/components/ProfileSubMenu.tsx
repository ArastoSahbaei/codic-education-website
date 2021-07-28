import { NavLink, useHistory } from 'react-router-dom'
import { primaryColor, secondaryFont } from 'shared/styles/GlobalStyle'
import AuthPath from 'routes/AuthPath'
import styled from 'styled-components'

export const ProfileSubMenu = () => {
	const history = useHistory()

	return (
		<Wrapper>
			<Paragraph to={AuthPath.userInformationView} onClick={() => history.push(AuthPath.userInformationView)}>Användaruppgifter</Paragraph>
			<Paragraph to={AuthPath.personalInformationView} onClick={() => history.push(AuthPath.personalInformationView)}>Personuppgifter</Paragraph>
			<Paragraph to={AuthPath.newsLetterSubscriptionView} onClick={() => history.push(AuthPath.newsLetterSubscriptionView)}>Nyhetsprenumeration</Paragraph>
			<Paragraph to={AuthPath.purchaseHistoryView} onClick={() => history.push(AuthPath.purchaseHistoryView)}>Köphistorik</Paragraph>
		</Wrapper>
	)
}

const Paragraph = styled(NavLink).attrs(({ activeClassName = 'is-active' }) => ({
	activeClassName,
}))`
	cursor: pointer;
    font-family: ${secondaryFont};
    text-decoration: none;
	color: #FFFFFF;
	transition: 0.3s;
	text-transform: uppercase;
	&.is-active {
		color: ${primaryColor};
	  }
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-self: center;
	background-color: #263746;
	padding: 0.5%;
`