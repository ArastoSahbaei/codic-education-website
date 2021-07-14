import React from 'react'
import styled from 'styled-components'
import { primaryFont } from '../../../shared/styles/GlobalStyle'
import map from '../map.png'

export const ContactInfo = () => {
	
	return (
		<>
			<Div>
				<p>Vi svarar gärna på frågor angående IT-konsulter, utbildare eller andra eventuella samarbeten
					i Göteborg. Kontakta oss här nedan eller hör av dig direkt till någon av våra medarbetare.
					Vi återkommer så fort vi kan.</p>
			</Div>
			<Div>
				<h3>+46-768-990-065</h3>
				<h3>hello@codic.se</h3>
			</Div>
			<Div>
				<Header1>Här finns vi</Header1>
				<Paragraph>Drottninggatan 38, Göteborg</Paragraph>
				<img src={ map } alt='Karta över Göteborg'/>
			</Div>
		</>
	)
}

const Div = styled.div`
  margin-bottom: 2em;
`

const Header1 = styled.h1`
  font-family: ${ primaryFont };
  margin-top: 0;
  margin-bottom: 0;
`

const Paragraph = styled.p`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`
