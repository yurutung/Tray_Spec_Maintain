import { GlobalStyle } from './styles/GlobalStyle'

import { MemoryRouter, Route, Redirect } from "react-router-dom"
import Home from './components/Home'
import Search from './components/Search'
import Datas from './components/Datas'
import AddTraySpec from './components/AddTraySpec'
import AddTrayMsl from './components/AddTrayMsl'

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <MemoryRouter>
        <Route path="/" exact component={Home} />
        <Route path="/search/:mode" component={Search} />
        <Route path="/datas/:mode/:id" component={Datas} />
        <Route path="/add/tray_spec" component={AddTraySpec} />
        <Route path="/add/tray_msl" component={AddTrayMsl} />
        <Route render={() => <Redirect to="/" />} />
      </MemoryRouter>
    </>
  )
}