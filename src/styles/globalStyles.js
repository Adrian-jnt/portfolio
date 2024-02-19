import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

* {
box-sizing: border-box;
padding: 0;
margin: 0;
font-family: "Sora", sans-serif;
} 

h1, h2, p, .btn, .input, .textarea, div {
color: #fff;
}

`

export default GlobalStyle;