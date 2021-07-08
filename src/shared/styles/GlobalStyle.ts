import { createGlobalStyle } from 'styled-components'
import Oleoscript from '../fonts/OleoScript.ttf'
import AlegreyaSans from '../fonts/AlegreyaSans.ttf'
import AlegreyaSansRegular from '../fonts/AlegreyaSansRegular.ttf'

export const primaryColor = '#f59300'
export const secondaryColor = '#585d72'
export const primaryFont = 'Oleoscript'
export const secondaryFont = 'AlegreyaSans'
export const primaryBackgroundColor = '#263746;'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Oleoscript;
    src: url(${ Oleoscript }) format('truetype');
  }

  @font-face {
    font-family: AlegreyaSans;
    src: url(${ AlegreyaSans }) format('truetype');
  }

  @font-face {
    font-family: AlegreyaSansRegular;
    src: url(${ AlegreyaSansRegular }) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.4s;
  }

  span, h1, h2, h3, h4, h5, h6 {
    font-family: AlegreyaSans,serif;
  }

  p {
    font-family: AlegreyaSansRegular,sans-serif;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`
