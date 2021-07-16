import { Button } from '../Button'
import { Link, RouteComponentProps, useHistory } from "react-router-dom"
// import { Container, Image, Text } from './styles'

export function Datas({match}: RouteComponentProps<{mode: string, id: string}>) {
  
  console.log(match.params)

  const mode = match.params.mode
  const id = match.params.id

  function test(e: string) {
    console.log(e)
  }
  window.Main.on('send', test)

  return (
      <div>
          <Link to="/" className="btn btn-outline-secondary">Home</Link>
      </div>
  )
}
 
export default Datas