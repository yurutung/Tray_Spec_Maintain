import { GlobalStyle } from './styles/GlobalStyle'

import { HashRouter, Route } from "react-router-dom"
import Home from './components/Home'
import Search from './components/Search'
import Datas from './components/Datas'
import AddTraySpec from './components/AddTraySpec'
import AddTrayMsl from './components/AddTrayMsl'

export function App() {

  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Route path="/" exact component={Home} />
        <Route path="/search/:mode" component={Search} />
        <Route path="/datas/:mode/:id" component={Datas} />
        <Route path="/add/tray_spec" component={AddTraySpec} />
        <Route path="/add/tray_msl" component={AddTrayMsl} />
      </HashRouter>
    </>
  )
}