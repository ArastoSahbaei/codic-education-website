import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
	margin: 0;
	padding: 0;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 0.4s;
	font-family: MessinaSansWeb, Helvetica, Arial !important;
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	
	100% {
		opacity: 1;
	}
`