import React, { useState } from 'react'
import { ITrayMsl } from '../../../DB/types/tray_msl'
import { Link, useParams, useLocation } from "react-router-dom"
import ReactShortcut from 'react-shortcut'

const AddTrayMsl = () => {
  const { id } = useParams<{ id: string }>()

  const location = useLocation()
  const state = location.state || {}
  const isEdit = state.isEdit || false
  const initData = state.selectedData || {
    msl: undefined,
    floorLife: undefined
  }

  // formData
  const [formData, setFormData] = useState<ITrayMsl>(initData)
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    // if value is '' change to null
    const value = e.currentTarget.value
    setFormData({
      ...formData,
      [e.currentTarget.id]: value === '' ? null : value
    })
  }

  // form submit -> save data
  const saveTrayMsl = (e: React.FormEvent, formData: ITrayMsl | any): void => {
    e.preventDefault()
    if (isEdit) {
      window.Main.editTrayMslData(formData)
        .then(e => {
          console.log(e)
          document.getElementById('back').click()
        })
        .catch(err => console.log(err))
    } else {
      window.Main.addTrayMslData(formData)
        .then(e => {
          console.log(e)
          document.getElementById('back').click()
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <>
      <form className="container h-100" onSubmit={e => saveTrayMsl(e, formData)}>
        <div className="main-body pt-2">
          <div className='d-flex align-items-center col-12 my-2'>
            <label className="col-3" htmlFor="msl">MSL ID</label>
            <div className="col-9">
              <input className="form-control" onChange={handleForm} type="text" id="msl" value={formData.msl || ''} required disabled={isEdit} />
            </div>
          </div>
          <div className='d-flex align-items-center col-12 my-2'>
            <label className="col-3" htmlFor="floorLife">Floor Life</label>
            <div className="col-9">
              <input className="form-control" onChange={handleForm} type="text" id="floorLife" value={formData.floorLife || ''} />
            </div>
          </div>
        </div>
        <div className="gap-2 p-2 row">
          <Link to={`/datas/tray_msl/${id}`} id='back' className="btn btn-outline-secondary col-2">F3 離開</Link>
          <button type="submit" id='save' className="btn btn-outline-secondary col-2">F5 確認</button>
        </div>
      </form>
      <ReactShortcut
        keys={'f3'}
        onKeysPressed={() => { document.getElementById('back').click() }}
      />
      <ReactShortcut
        keys={'f5'}
        onKeysPressed={() => { document.getElementById('save').click() }}
      />
    </>
  )
}

export default AddTrayMsl