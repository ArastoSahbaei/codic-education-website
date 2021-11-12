import { createGlobalStyle } from 'styled-components'

export const ScrollBarStyle = createGlobalStyle`
/* Set variables value for color here*/
:root{
    --scroll-track-color: #f8f8f8;
    --scroll-thumb-color: #4f4f53;
    --scroll-thumb-hover-color: #7f7f85;
}


/* Works on Firefox - custom colors (radius and padding does not work) */
*{
    scrollbar-width: auto;
    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);
}


/* Works on Chrome, Edge and Safari */
::-webkit-scrollbar{
    width: 16px;
}

::-webkit-scrollbar-track{
    background: var(--scroll-track-color);
}

::-webkit-scrollbar-thumb{
    background-color: var(--scroll-thumb-color);
    border:3px solid var(--scroll-track-color);
    border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover{
    background-color: var(--scroll-thumb-hover-color);
}
`