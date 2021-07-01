import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: aliceblue;
  margin: 1em;
  padding: 2em;
  display: grid;
  grid-template-rows: 200px 1fr 1fr 0.5fr;
`

export const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100px;
`

export const CenterWrapper = styled.div`
  text-align: center;
`
