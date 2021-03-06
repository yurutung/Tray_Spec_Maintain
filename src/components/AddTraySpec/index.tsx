import React, { useState } from 'react'
import { ITraySpec } from '../../../DB/types/tray_spec'
import { Link, useParams, useLocation } from "react-router-dom"
import ReactShortcut from 'react-shortcut'
import { toastMixin, clickById } from '../functions'

const AddTraySpec = () => {
  const { id } = useParams<{ id: string }>()

  const location = useLocation()
  const state = location.state || {}
  const isEdit = state.isEdit || false
  const initData = state.selectedData || {
    custCd: undefined,
    prodspecId: undefined,
    custPartId: undefined,
    description: undefined,
    pinA1Loc: undefined,
    packingType: undefined,
    msl: undefined,
    traySize: undefined,
    chipSize: undefined,
    binGrade: undefined,
    termCompost: undefined,
    pbFree: undefined,
    temp: undefined,
    updFlag: undefined,
    cliamUser: undefined,
    claimTime: undefined,
    datecodeLimit: undefined,
  }

  // formData
  const [formData, setFormData] = useState<ITraySpec>(initData)
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    // if value is '' change to null
    const value = e.currentTarget.value
    setFormData({
      ...formData,
      [e.currentTarget.id]: value === '' ? null : value
    })
  }

  // form submit -> save data
  const saveTraySpec = (e: React.FormEvent, formData: ITraySpec | any): void => {
    e.preventDefault()
    if (isEdit) {
      window.Main.editTraySpecData(formData)
        .then(e => {
          console.log(e)
          toastMixin.fire({
            title: 'Update data Successfully!'
          })
          clickById('back')
        })
        .catch(err => {
          console.log(err)
          toastMixin.fire({
            title: err,
            icon: 'error'
          })
        })
    } else {
      window.Main.addTraySpecData(formData)
        .then(e => {
          console.log(e)
          toastMixin.fire({
            title: 'Add data Successfully!'
          })
          clickById('back')
        })
        .catch(err => {
          console.log(err)
          toastMixin.fire({
            title: err,
            icon: 'error'
          })
        })
    }
  }

  return (
    <>
      <form className="container h-100" onSubmit={e => saveTraySpec(e, formData)}>
        <div className="main-body pt-2">
          <div className="h-auto row">
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="custCd">Custumer Code</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="custCd" value={formData.custCd || ''} required disabled={isEdit} /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="traySize">Tary Size</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="traySize" value={formData.traySize || ''} /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="prodspecId">TSMC Part</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="prodspecId" value={formData.prodspecId || ''} required disabled={isEdit} /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="chipSize">Chip Size</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="chipSize" value={formData.chipSize || ''} /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="custPartId">Custumer Part</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="custPartId" value={formData.custPartId || ''} /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="binGrade">Bin Grade</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="binGrade" value={formData.binGrade || ''} /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="pinA1Loc">Pin 1 Location</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="pinA1Loc" value={formData.pinA1Loc || ''} /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="termCompost">Terminal Composition</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="termCompost" value={formData.termCompost || ''} /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="packingType">Package Material</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="packingType" value={formData.packingType || ''} /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="pbFree">Pb-Free(ECO Status)</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="pbFree" value={formData.pbFree || ''} /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="msl">MSL</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="msl" value={formData.msl || ''} /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="datecodeLimit">Date Code Limit</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="datecodeLimit" value={formData.datecodeLimit || '9999'} required /></div>
            </div>
            <div className='d-flex align-items-center col-6 my-2'>
              <label className="col-5" htmlFor="temp">Temperature</label>
              <div className="col-7"><input className="form-control" onChange={handleForm} type="text" id="temp" value={formData.temp || ''} /></div>
            </div>
            <div className='d-flex align-items-center col-12'>
              <label className="col-3" htmlFor="description">Description</label>
              <div className="col-9"><input className="form-control" onChange={handleForm} type="text" id="description" value={formData.description || ''} /></div>
            </div>
          </div>
        </div>
        <div className="gap-2 p-2 row">
          <Link to={`/datas/tray_spec/${id}`} id='back' className="btn btn-outline-secondary col-2">F3 ??????</Link>
          <button className="btn btn-outline-secondary col-2">Fill Laser Mark</button>
          <button type="submit" id='save' className="btn btn-outline-secondary col-2">F5 ??????</button>
        </div>
      </form>
      <ReactShortcut
        keys={'f3'}
        onKeysPressed={() => { clickById('back') }}
      />
      <ReactShortcut
        keys={'f5'}
        onKeysPressed={() => { clickById('save') }}
      />
    </>
  )
}

export default AddTraySpec