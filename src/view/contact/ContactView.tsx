import React from 'react'
import styled from 'styled-components'
import { primaryFont } from '../../shared/styles/GlobalStyle'
import map from './map.png'

export const ContactView = () => {
	return (
		<Wrapper>
			<HeaderWrapper>
				<Header1>Kontakta oss</Header1>
			</HeaderWrapper>
			<ContentWrapper>
				<ColumnWrapper>
					<Padding>
						<p>Vi svarar gärna på frågor angående IT-konsulter, utbildare eller andra eventuella samarbeten
							i
							Göteborg.
							Kontakta oss här nedan eller hör av dig direkt till någon av våra medarbetare. Vi återkommer
							så fort
							vi
							kan.</p>
						<h3>Codic Consulting: +46-765-519-733</h3>
						<h3>Codic Education: +46-768-990-065</h3>
						<h3>hello@codic.se</h3>
						<h1>Här finns vi</h1>
						<p>Drottninggatan 38, Göteborg</p>
						<img src={ map } alt="Karta över Göteborg"/>
					</Padding>
					<Padding>
						<form>
							<label><p>Förnamn</p>
								<input type="text" placeholder={ 'Användarnamn' } autoComplete="on"/>
							</label>
							<label><p>Efternamn</p>
								<input type="text" placeholder={ 'Användarnamn' } autoComplete="on"/>
							</label>
							<label><p>E-Post</p>
								<input type="text" placeholder={ 'Användarnamn' } autoComplete="on"/>
							</label>
							<label><p>Meddelande</p>
								<input type="text" placeholder={ 'Användarnamn' } autoComplete="on"/>
							</label>
							<button>Skicka</button>
						</form>
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
