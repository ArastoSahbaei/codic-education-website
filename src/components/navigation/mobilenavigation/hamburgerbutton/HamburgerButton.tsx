import styled from 'styled-components'

export const HamburgerButton = (props: { drawerHandler: (handler: boolean) => void }): JSX.Element => {
	return (
		<ToggleButton onClick={() => props.drawerHandler(true)}>
			<ToggleButtonLine />
			<ToggleButtonLine />
			<ToggleButtonLine />
		</ToggleButton>
	)
}

const ToggleButton = styled.button`
	align-self: center;
	justify-self: center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 24px;
	width: 30px;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	box-sizing: border-box;
	&:focus {
		outline: none;
	  }
`

const ToggleButtonLine = styled.div`
	width: 30px;
	height: 2px;
	background: #606060;
	`
