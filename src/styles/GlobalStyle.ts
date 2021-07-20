import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle
`
  html, body, #root{
    height: 100%
  }
  
  .container {
    width: 100%;
    max-width: 100%;
  }
  .table {
    overflow: auto;
    display: block;
    table-layout: auto;
  }
`
