import { FC } from 'react'
import styled from 'styled-components'
import { ISpace } from './types'


export const Space:FC<ISpace> = (props: ISpace) => <Wrapper space={props.space} />


const Wrapper = styled.div`
    margin-top: ${(props: Partial<ISpace>) => props.space}
`
