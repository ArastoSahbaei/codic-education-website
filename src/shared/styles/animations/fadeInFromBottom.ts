import { keyframes } from 'styled-components'

export const fadeInFromBottom = keyframes`
   from {
      opacity: 0;
      transform: translateY(100%);
   }
   to {
      opacity: 1
      }
   }
`