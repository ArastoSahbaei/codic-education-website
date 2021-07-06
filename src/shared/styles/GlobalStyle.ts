import { createGlobalStyle } from 'styled-components'
import Oleoscript from '../fonts/OleoScript.ttf'
import AlegreyaSans from '../fonts/AlegreyaSans.ttf'

export const primaryColor = '#f59300'
export const secondaryColor = '#585d72'
export const primaryFont = 'Oleoscript'
export const secondaryFont = 'AlegreyaSans'

export const GlobalStyle = createGlobalStyle`

* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

@font-face {
    font-family: Oleoscript;
    src: url(${Oleoscript}) format('truetype');
  }

@font-face {
    font-family: AlegreyaSans;
    src: url(${AlegreyaSans}) format('truetype');
  }

  body {
	margin: 0;
	padding: 0;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 0.4s;
}

p, span, h1, h2, h3, h4, h5, h6 {
	font-family: AlegreyaSans;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	
	100% {
		opacity: 1;
	}
`
