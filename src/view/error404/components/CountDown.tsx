import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'


export const CountDown = () => {
	const history = useHistory()
	const [timer, setTimer] = useState(30)

	useEffect(() => {
		const interval = setInterval(changeInterval, 1000)
		return () => clearInterval(interval)
	}, [timer])

	const changeInterval = () => {
		timer > 0 ? setTimer(timer - 1) : history.push(RoutingPath.initialView)
	}

	return (
		<SmallText> Du kommer automatiskt att förflyttas till startsidan om {timer} sekunder.</SmallText>
	)
}

const SmallText = styled.p`
	position: absolute;
	text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;
	width: 100%;
	text-align: center;
	margin-top: 65vh;
	color: #f9f9f9;
	font-size: 0.9rem;
	font-weight: 200;
	@media (max-width: 600px) {
		margin-top: 65vh;
	}
	@media (max-width: 300px) {
		margin-top: 75vh;
	}`