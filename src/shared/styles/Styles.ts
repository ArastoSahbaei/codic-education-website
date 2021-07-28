import styled from 'styled-components'
import { USER_PROFILE_WIDTH } from './constants'

export const initialViewButtonStyle = {
	width: '200px !important',
}

export const SubProfileViewWrapper = styled.div`
	width: calc(100% - ${USER_PROFILE_WIDTH}%);
	float: right;
	display: inline-block;
`
