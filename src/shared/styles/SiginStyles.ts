import styled from 'styled-components'
import { primaryColor, primaryFont, secondaryColor } from './GlobalStyle'

export const Wrapper = styled.div`
  padding: 2em;
`

export const RowWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
`

export const Header1 = styled.h1`
  font-family: ${ primaryFont };
  margin-top: 0;
  margin-bottom: 0.5em;
`

export const Form = styled.form`
  text-align: center;
  align-self: center;
`

export const Input = styled.input`
  margin-bottom: 1.5em;
  padding: 0.5em;
  font-size: 1.0em;
  border: 4px solid ${ secondaryColor };
  border-radius: 0.25em;
  width: 80%
`

export const Button = styled.button`
  margin-top: 1em;
  padding: 0.5em 2em;
  border: none;
  border-radius: 0.25em;
  background-color: ${ primaryColor };
  font-size: 1.25em;
  color: white;
  cursor: pointer;
`
