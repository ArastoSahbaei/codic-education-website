import { useHistory } from 'react-router'
import { useContext } from 'react'
import { UserContext } from '../../../../../../shared/providers/UserProvider'
import { useNavHeight } from '../../../../../../hooks/useNavHeight'
import { nonAuthenticatedUser } from '../../../../../../shared/data/nonAuthenticatedUser'
import RoutingPath from '../../../../../../routes/RoutingPath'
import styled from 'styled-components'
import LocalStorage from '../../../../../../shared/cache/LocalStorage'
import profile from '../../../../../../shared/images/icons/user.png'
import heart from '../../../../../../shared/images/icons/heart.png'
import language from '../../../../../../shared/images/icons/language.png'
import location from '../../../../../../shared/images/icons/location.png'
import data from '../../../../../../shared/images/icons/data.png'
import help from '../../../../../../shared/images/icons/help.png'
import feedback from '../../../../../../shared/images/icons/feedback.png'
import exit from '../../../../../../shared/images/icons/logout.png'
import AuthPath from '../../../../../../routes/AuthPath'

export const ProfileDropdown = () => {
	const [, setAuthenticatedUser] = useContext(UserContext)
	const { navHeight } = useNavHeight()
	const history = useHistory()

	const logout = () => {
		localStorage.removeItem(LocalStorage.authenticationToken)
		setAuthenticatedUser(nonAuthenticatedUser)
		history.push(RoutingPath.initialView)
	}

	const newDropdownItem = (icon: string, text: string, navigationPath?: string) => {
		return (
			<Div onClick={() => navigationPath && history.push(navigationPath)}>
				<Image src={icon} alt={''} />
				<DropDownItem> {text} </DropDownItem> <br />
			</Div>
		)
	}

	return (
		<DropDownWrapper style={{ top: `${navHeight}rem` }}>
			{newDropdownItem(profile, 'Din Profil', AuthPath.userInformationView)}
			{newDropdownItem(heart, 'Sparade Produkter (4)')}
			<Div onClick={() => logout()}>
				<Image src={exit} alt={''} />
				<DropDownItem> Logga ut </DropDownItem> <br />
			</Div>
			<HR />
			{newDropdownItem(language, 'Språk: Svenska')}
			{newDropdownItem(location, 'Plats: Sverige')}
			{newDropdownItem(data, 'Din data från Codic')}
			{newDropdownItem(help, 'Hjälp')}
			{newDropdownItem(feedback, 'Skicka Feedback')}
		</DropDownWrapper>
	)
}


const Image = styled.img`
		width: 24px;
		height: 24px;
		filter: brightness(0) invert(0.7);
		align-self: center;
`

const Div = styled.div`
		cursor: pointer;
		display: flex;
		&:hover ${Image} {
		filter: brightness(0) invert(1);
		}
`

const DropDownItem = styled.p`
    font-size: 1.1rem;
    color: white;
		display: inline-block;
		padding-left: 1rem;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
`

const HR = styled.hr`
		display: block;
		height: 1px;
		border: 0;
		border-top: 1px solid #ccc;
		margin: 1em 0;
		padding: 0;
`

export const DropDownWrapper = styled.div`
	margin-left: -100px;
	width: 20rem;
    visibility: hidden;
    position: absolute;
    background-color: #263746;
    padding: 10px 35px;
	padding-top: 45px;
	margin-top: -35px;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
		z-index: 10;

		&:hover {
    visibility: visible;
    opacity: 1;
    }
`
