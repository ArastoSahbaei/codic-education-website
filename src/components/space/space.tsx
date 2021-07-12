import { FC } from 'react'
import { ISpace } from './types'
import styled from 'styled-components'

export const Space: FC<ISpace> = (props: ISpace) => <Wrapper space={props.space} />

const Wrapper = styled.div`
    margin-top: ${(props: Partial<ISpace>) => props.space}rem
`
