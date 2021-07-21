import React, { useState } from 'react'
import { ITrayMsl } from '../../../DB/types/tray_msl'
import { Link, useLocation } from "react-router-dom"

const AddTrayMsl = () => {
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
    console.log(formData)
    if (isEdit) {
      window.Main.editTrayMslData(formData)
        .then(e => console.log(e))
        .catch(err => console.log(err))
    } else {
      window.Main.addTrayMslData(formData)
        .then(e => console.log(e))
        .catch(err => console.log(err))
    }
  }

  return (
    <form className="container h-100" onSubmit={e => saveTrayMsl(e, formData)}>
      <div className="h-75 pt-2 col-12">
        <div className='d-flex align-items-center col-12'>
          <label className="col-3" htmlFor="msl">MSL ID</label>
          <div className="col-9">
            <input className="form-control" onChange={handleForm} type="text" id="msl" value={formData.msl || ''} required disabled={isEdit} />
          </div>
        </div>
        <div className='d-flex align-items-center col-12'>
          <label className="col-3" htmlFor="floorLife">Floor Life</label>
          <div className="col-9">
            <input className="form-control" onChange={handleForm} type="text" id="floorLife" value={formData.floorLife || ''} />
          </div>
        </div>
      </div>
      <div className="h-25 g-0 px-5">
        <Link to="/" className="btn btn-outline-secondary">Home</Link>
        {/* <button className="btn btn-outline-secondary">離開</button> */}
        <button className="btn btn-outline-secondary">Fill Laser Mark</button>
        <button type="submit" className="btn btn-outline-secondary">確認</button>
      </div>
    </form>
  )
}

export default AddTrayMsl