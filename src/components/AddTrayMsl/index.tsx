import React, { useState } from 'react'
import { ITraySpec } from '../../../DB/types/tray_spec'
import { Link, RouteComponentProps, useHistory } from "react-router-dom"

const AddTrayMsl = () => {
  // export function AddTrayMsl(props: {location: {state: {id: string}}}) {
  // console.log(props.location.state.id)
  // console.log(props)

  const [formData, setFormData] = useState<ITraySpec | {}>({})

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  const saveTraySpec = (e: React.FormEvent, formData: ITraySpec | any): void => {
    e.preventDefault()
    console.log(formData)

    window.Main.addTrayMslData(formData)
      .then(e => console.log(e))
      .catch(err => console.log(err))
  }

  return (
    <form className="container h-100" onSubmit={e => saveTraySpec(e, formData)}>
      <div className="h-75 pt-2 col-12">
        <div className='d-flex align-items-center col-12'>
          <label className="col-3" htmlFor="msl">MSL ID</label>
          <div className="col-9"><input className="form-control" onChange={handleForm} type="text" id="msl" /></div>
        </div>
        <div className='d-flex align-items-center col-12'>
          <label className="col-3" htmlFor="floorLife">Floor Life</label>
          <div className="col-9"><input className="form-control" onChange={handleForm} type="text" id="floorLife" /></div>
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