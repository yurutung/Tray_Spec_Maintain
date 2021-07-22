import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from "react-router-dom"
import ReactShortcut from 'react-shortcut'

const Search = () => {
    const { mode } = useParams<{ mode: string }>()
    // const mode: string = match.params.mode
    const history = useHistory()

    const [id, setId] = useState('')
    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setId(e.currentTarget.value)
    }

    const getID = (e: React.FormEvent, id: string): void => {
        e.preventDefault()
        // TODO: define tray_spec, tray_msl
        // TODO: mode in ['tray_spec', 'tray_msl']
        if (['tray_spec', 'tray_msl'].includes(mode)) {
            history.push(`/datas/${mode}/${id}`)
        }
    }

    return (
        <>
            <form className="h-100" onSubmit={e => getID(e, id)}>
                <div className="row h-75 g-0">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="row col-8">
                            <div className="col-3">
                                <label htmlFor="id" className="col-form-label row justify-content-end">{mode == 'tray_spec' ? 'Cust. Code' : 'MSL ID'}</label>
                            </div>
                            <div className="col-9">
                                <input onChange={handleForm} type="text" id="id" className="form-control" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-25 g-0 px-5">
                    <Link to="/" id='home' className="btn btn-outline-secondary">F3 離開</Link>
                    <button type="submit" className="btn btn-primary" disabled={id === '' ? true : false}>Enter 確認</button>
                </div>
            </form>
            <ReactShortcut
                keys={'f3'}
                onKeysPressed={() => { document.getElementById('home').click() }}
            />
        </>
    )
}

export default Search