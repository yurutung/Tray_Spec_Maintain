import { useRef } from "react"
import { Link, RouteComponentProps, useHistory } from "react-router-dom"

import TrayMslTable from "../TrayMslTable"
import TraySpecTable from "../TraySpecTable"

const Datas = ({ match }: RouteComponentProps<{ mode: string, id: string }>) => {
  // params
  // console.log(match.params)
  const mode = match.params.mode
  const id = match.params.id

  const tsRef = useRef()
  const tmRef = useRef()
  const updateSelected = () => {
    console.log("select")
    // TODO: define tray_spec, tray_msl
    if (mode == 'tray_spec')
      tsRef.current.updateSelected()
    else if (mode == 'tray_msl')
      tmRef.current.updateSelected()

  }

  let table = <div />
  // TODO: define tray_spec, tray_msl
  if (mode == 'tray_spec')
    table = <TraySpecTable mode={mode} id={id} ref={tsRef} />
  else if (mode == 'tray_msl')
    table = <TrayMslTable mode={mode} id={id} ref={tmRef} />

  return (
    <div className="container h-100">
      <div className="row h-75 pt-2">
        {table}
      </div>
      <div className="h-25 g-0 px-5">
        <Link to="/" className="btn btn-outline-secondary">Home</Link>
        <Link to={`/add/${mode}`} className="btn btn-outline-secondary">新增</Link>
        <button className="btn btn-outline-secondary" onClick={updateSelected}>更新</button>
        <button className="btn btn-outline-secondary">刪除</button>
        <button className="btn btn-outline-secondary">儲存檔案</button>
        <button className="btn btn-outline-secondary">讀取檔案</button>
      </div>
    </div>
  )
}

export default Datas