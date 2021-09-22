import { FC } from 'react'
import { ISpace } from './types'
import { MOBILE_NAV_THRESHOLD } from 'shared/styles/constants'
import { useWindowDimensions } from 'hooks/useWindowDimensions'
import styled from 'styled-components'

export const Space: FC<ISpace> = (props: ISpace) => {
	const { width } = useWindowDimensions()
	return width >= MOBILE_NAV_THRESHOLD ? <Wrapper space={props.space} /> : <></>
}

const Wrapper = styled.div`
  margin-top: ${(props: Partial<ISpace>) => props.space}rem;
`
