import React from 'react'
import styled from 'styled-components'
import contact_us from '../../shared/images/contact_us.jpg'
import { primaryFont } from '../../shared/styles/GlobalStyle'
import { ContactForm } from './components/ContactForm'
import { ContactInfo } from './components/ContactInfo'

export const ContactView = () => {
	return (
		<>
			<BackgroundImage src={ contact_us } alt="Backgrundsbild på en laptop"/>
			<GridWrapper>
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
			</GridWrapper>
		</>
	)
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
`

const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  max-height: 30%;
  z-index: -1;
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
  justify-content: space-between;
  background-color: white;
`

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

const Padding = styled.div`
  padding: 1em;
`
