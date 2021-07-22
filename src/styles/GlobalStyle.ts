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
  .main-body {
    height: 90%;
  }
  .react-bootstrap-table{
    height: 100%;
    margin: 0px;
  }
  .table{
    overflow: auto;
    display: block;
    table-layout: auto;
    white-space: nowrap;
    height: 100%;
  }

  
`
