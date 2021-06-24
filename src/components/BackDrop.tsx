import styled from 'styled-components'

export const BackDrop = (props: { drawerHandler: (handler: boolean) => void }) => {
	const { drawerHandler } = props
	return <Div onClick={() => { if (drawerHandler) drawerHandler(false) }} />
}

const Div = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 100;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
`