import { useRef } from "react"
import { Link, useParams } from "react-router-dom"
import ReactShortcut from 'react-shortcut'
import { clickById } from '../functions'

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
        <div className="main-body" >
          {table}
        </div>
        <div className="gap-2 p-2 row">
          <Link to={`/search/${mode}`} id='search' className="btn btn-outline-secondary col">F3 離開</Link>
          <Link to={`/add/${mode}/${id}`} id='add' className="btn btn-outline-secondary col">F1 新增</Link>
          <button className="btn btn-outline-secondary col" id='edit' onClick={updateSelected}>F2 更新</button>
          <button className="btn btn-outline-secondary col" id='del' onClick={delSelected}>F4 刪除</button>
          <button className="btn btn-outline-secondary col">儲存檔案</button>
          <button className="btn btn-outline-secondary col">讀取檔案</button>
        </div>
      </div>
      <ReactShortcut
        keys={'f3'}
        onKeysPressed={() => { clickById('search') }}
      />
      <ReactShortcut
        keys={'f1'}
        onKeysPressed={() => { clickById('add') }}
      />
      <ReactShortcut
        keys={'f2'}
        onKeysPressed={() => { clickById('edit') }}
      />
      <ReactShortcut
        keys={'f4'}
        onKeysPressed={() => { clickById('del') }}
      />
    </>
  )
}

export default Datas