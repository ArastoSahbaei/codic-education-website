import { FC } from 'react'
import { Redirect } from 'react-router-dom'
import CountDown from 'react-countdown'
import RoutingPath from 'routes/RoutingPath'
import styled from 'styled-components'
import { ICountDown } from './types'

export const CountDownToMove = () => {

	/* Change the delay time in miliseconds here! Started with 30 seconds */
	const delay = 30000
	
	const renderer:FC<ICountDown> = ({ seconds, completed}) => {

		if(completed) {
			return <Redirect to={RoutingPath.initialView} />
		} else {
			return <SmallText> Du kommer automatiskt att förflyttas till startsidan om { seconds } sekunder.</SmallText>
		}
	}

	return(
		
		<CountDown 
			date = {Date.now() + delay}
			renderer = { renderer } />
		
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
    cursor: pointer;
	@media (max-width: 600px) {
		margin-top: 65vh;
	}
	@media (max-width: 300px) {
		margin-top: 75vh;
	}`