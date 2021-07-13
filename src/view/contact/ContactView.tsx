import React from 'react'
import styled from 'styled-components'
import { primaryFont } from '../../shared/styles/GlobalStyle'
import { ContactForm } from './components/ContactForm'
import { ContactInfo } from './components/ContactInfo'

export const ContactView = () => {
	return (
		<Wrapper>
			<HeaderWrapper>
				<Header1>Kontakta oss</Header1>
			</HeaderWrapper>
			<ContentWrapper>
				<ColumnWrapper>
					<Padding>
						<ContactInfo/>
					</Padding>
					<Padding>
						<ContactForm/>
					</Padding>
				</ColumnWrapper>
			</ContentWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
`

const BackgroundImage = styled.img`
  z-index: -1;
  grid-column: 1/21;
  width: 100%;
`

const HeaderWrapper = styled.div`
  grid-column: 3/19;
  margin-top: 2em;
  font-size: 1.5em;
`

const Header1 = styled.h1`
  font-family: ${ primaryFont };
  margin-top: 0;
  margin-bottom: 0.5em;
`

const ContentWrapper = styled.div`
  grid-column: 5/17;
  justify-content: space-between
`

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

const Padding = styled.div`
  padding: 1em;
`
