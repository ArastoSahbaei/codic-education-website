import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export const Link =
	(props: { drawerHandler: (handler: boolean) => void, icon: any, text: string, path?: string }) => {
		const history = useHistory()

		const handleClick = () => {
			history.push(props.path || '/')
			props.drawerHandler(false)
		}

		return (
			<Paragraph onClick={() => handleClick()}>
				<Icon src={props.icon} alt={''} />
				{props.text}
			</Paragraph>
		)
	}

const Icon = styled.img`
		width: 24px;
		height: 24px;
		filter: brightness(0) invert(0.7);
`

const Paragraph = styled.p`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 10px 30px;
	padding: 5%;
	font-weight: 600;
	font-size: 1rem;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		transition: 0.3s;
		background-color: orange;
		gap: 10px 50px;
	}
	&:hover ${Icon}{
		filter: brightness(0);
	}
`