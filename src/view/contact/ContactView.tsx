import styled from 'styled-components'
import { windowsMaxWidth } from '../../shared/data/WindowsSizes'
import contact_us from '../../shared/images/contact_us.jpg'
import { DimensionsInterface } from '../../shared/interfaces/DimensionsInterface'
import { primaryFont } from '../../shared/styles/GlobalStyle'
import { ContactForm } from './components/ContactForm'
import { ContactInfo } from './components/ContactInfo'

export const ContactView = () => {
	return (
		<BackgroundColor>
			<BackgroundImage src={ contact_us } alt='Backgrundsbild på en laptop'/>
			<GridWrapper dimensions={ windowsMaxWidth }>
				<HeaderWrapper dimensions={ windowsMaxWidth }>
					<Header1>Kontakta oss</Header1>
				</HeaderWrapper>
				<ContentWrapper dimensions={ windowsMaxWidth }>
					<ColumnWrapper dimensions={ windowsMaxWidth }>
						<Padding>
							<ContactInfo/>
						</Padding>
						<Padding>
							<ContactForm/>
						</Padding>
					</ColumnWrapper>
				</ContentWrapper>
			</GridWrapper>
		</BackgroundColor>
	)
}

const BackgroundColor = styled.div`
  z-index: -2;
  background-color: #F2F2F2;
`

const GridWrapper = styled.div<DimensionsInterface>`
  display: grid;
  @media (min-width: ${ props => props.dimensions.tablet }) {
    grid-template-columns: repeat(20, 1fr);
`

const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  max-height: 30%;
  z-index: 0;
`

const HeaderWrapper = styled.div<DimensionsInterface>`
  grid-column: 3/19;
  font-size: 1.5em;
  z-index: 1;

  @media (max-width: ${ props => props.dimensions.mobile }) {
    margin-top: -2em;
  }
  @media (min-width: ${ props => props.dimensions.tablet }) {
    margin-top: 2em;
  }
  @media (min-width: ${ props => props.dimensions.laptop }) {
    //grid-column: 4/18;
  }
  @media (min-width: ${ props => props.dimensions.desktop }) {
    //grid-column: 4/18;
  }
  @media (min-width: ${ props => props.dimensions.qHd }) {
    grid-column: 4/18;
  }
  @media (min-width: ${ props => props.dimensions.ultraWide }) {
    grid-column: 5/17;
  }
  @media (min-width: ${ props => props.dimensions.ultraHd }) {
    grid-column: 6/16;
  }
`

const Header1 = styled.h1`
  font-family: ${ primaryFont };
  margin-top: 0;
  margin-bottom: 0.5em;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`

const ContentWrapper = styled.div<DimensionsInterface>`
  justify-content: space-between;
  background-color: white;
  z-index: 1;
  @media (max-width: ${ props => props.dimensions.mobile }) {
    grid-column: 3/19;
  }
  @media (min-width: ${ props => props.dimensions.tablet }) {
    grid-column: 3/19;
  }
  @media (min-width: ${ props => props.dimensions.laptop }) {
    //grid-column: 4/18;
  }
  @media (min-width: ${ props => props.dimensions.desktop }) {
    grid-column: 4/18;
  }
  @media (min-width: ${ props => props.dimensions.qHd }) {
    grid-column: 5/17;
  }
  @media (min-width: ${ props => props.dimensions.ultraWide }) {
    grid-column: 6/16;
  }
  @media (min-width: ${ props => props.dimensions.ultraHd }) {
    grid-column: 7/15;
  }
`

const ColumnWrapper = styled.div<DimensionsInterface>`
  @media (max-width: ${ props => props.dimensions.mobile }) {
    width: 100%;
  }
  @media (min-width: ${ props => props.dimensions.tablet }) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${ props => props.dimensions.laptop }) {
  }
  @media (min-width: ${ props => props.dimensions.desktop }) {
    grid-template-columns: 3fr 2fr;
  }
  @media (min-width: ${ props => props.dimensions.qHd }) {
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: ${ props => props.dimensions.ultraWide }) {
  }
  @media (min-width: ${ props => props.dimensions.ultraHd }) {
  }
`

const Padding = styled.div`
  padding: 1em;
`
