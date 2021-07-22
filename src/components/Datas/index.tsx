import { useRef } from "react"
import { Link, useParams } from "react-router-dom"
import ReactShortcut from 'react-shortcut'

import TrayMslTable from "../TrayMslTable"
import TraySpecTable from "../TraySpecTable"

const Datas = () => {
  // params
  const { mode, id } = useParams<{ mode: string, id: string }>()

  const tsRef = useRef()
  const tmRef = useRef()
  const updateSelected = () => {
    // TODO: define tray_spec, tray_msl
    if (mode == 'tray_spec')
      tsRef.current.updateSelected()
    else if (mode == 'tray_msl')
      tmRef.current.updateSelected()
  }
  const delSelected = () => {
    // TODO: define tray_spec, tray_msl
    if (mode == 'tray_spec')
      tsRef.current.delSelected()
    else if (mode == 'tray_msl')
      tmRef.current.delSelected()
  }

  let table = <div />
  // TODO: define tray_spec, tray_msl
  if (mode == 'tray_spec')
    table = <TraySpecTable mode={mode} id={id} ref={tsRef} />
  else if (mode == 'tray_msl')
    table = <TrayMslTable mode={mode} id={id} ref={tmRef} />

  return (
    <>
      <div className="container h-100">
        <div className="row h-75 pt-2">
          {table}
        </div>
        <div className="h-25 g-0 px-5">
          <Link to={`/search/${mode}`} id='search' className="btn btn-outline-secondary">F3 離開</Link>
          <Link to={`/add/${mode}/${id}`} id='add' className="btn btn-outline-secondary">F1 新增</Link>
          <button className="btn btn-outline-secondary" id='edit' onClick={updateSelected}>F2 更新</button>
          <button className="btn btn-outline-secondary" id='del' onClick={delSelected}>F4 刪除</button>
          <button className="btn btn-outline-secondary">儲存檔案</button>
          <button className="btn btn-outline-secondary">讀取檔案</button>
        </div>
      </div>
      <ReactShortcut
        keys={'f3'}
        onKeysPressed={() => { document.getElementById('search').click() }}
      />
      <ReactShortcut
        keys={'f1'}
        onKeysPressed={() => { document.getElementById('add').click() }}
      />
      <ReactShortcut
        keys={'f2'}
        onKeysPressed={() => { document.getElementById('edit').click() }}
      />
      <ReactShortcut
        keys={'f4'}
        onKeysPressed={() => { document.getElementById('del').click() }}
      />
    </>
  )
}

export default Datas