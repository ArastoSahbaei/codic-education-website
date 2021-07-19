import { keyframes } from 'styled-components'

export const fadeInRight = keyframes`
0% {
	opacity: 0;
	transform: translateX(-180px);
}
100% {
	opacity: 1;
	transform: translateY(0);
}
`