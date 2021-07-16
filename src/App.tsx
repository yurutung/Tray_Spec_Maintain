import { GlobalStyle } from './styles/GlobalStyle'

import { HashRouter, Route} from "react-router-dom"
import Home from './components/Home' 
import Search from './components/Search' 
import Datas from './components/Datas' 

export function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
          <Route path="/" exact component={ Home } />
          <Route path="/search/:mode" component={ Search } />
          <Route path="/datas/:mode/:id" component={ Datas } />
      </HashRouter>
    </>
  )
}