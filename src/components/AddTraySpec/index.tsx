import React, { useState } from 'react'
import { ITraySpec } from '../../../DB/types/tray_spec'
import { Link, RouteComponentProps, useHistory } from "react-router-dom"

const AddTraySpec = ({ match }: RouteComponentProps<{ mode: string }>) => {
  const mode = match.params.mode
  
  const [formData, setFormData] = useState<ITraySpec | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  const saveTraySpec = (e: React.FormEvent, formData: ITraySpec | any): void => {
    e.preventDefault()
    console.log(formData)
    
    window.Main.addTraySpecData(formData)
      .then(e => console.log(e))
      .catch(err => console.log(err))
  }

  return (
    <form className="container h-100" onSubmit={e => saveTraySpec(e, formData)}>
      <div className="h-75 pt-2 col-12 row">
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="custCd">Custumer Code</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="custCd" required /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="traySize">Tary Size</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="traySize" /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="prodspecId">TSMC Part</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="prodspecId" required /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="chipSize">Chip Size</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="chipSize" /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="custPartId">Custumer Part</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="custPartId" /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="binGrade">Bin Grade</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="binGrade" /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="pinA1Loc">Pin 1 Location</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="pinA1Loc" /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="termCompost">Terminal Composition</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="termCompost" /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="packingType">Package Material</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="packingType" /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="pbFree">Pb-Free(ECO Status)</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="pbFree" /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="msl">MSL</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="msl" /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="datecodeLimit">Date Code Limit</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="datecodeLimit" value="9999" required /></div>
        </div>
        <div className='d-flex align-items-center col-6'>
          <label className="col-5" htmlFor="temp">Temperature</label>
          <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="temp" /></div>
        </div>
        <div className='d-flex align-items-center col-12'>
          <label className="col-3" htmlFor="description">Description</label>
          <div className="col-9"><input className="form-control" onChange={handleForm} type="text" id="description" /></div>
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

export default AddTraySpec