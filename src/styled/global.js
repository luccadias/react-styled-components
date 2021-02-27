import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body, #root { 
        font-family: 'Sans-Serif';
        width: 100%;
        height: 100%;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyle
