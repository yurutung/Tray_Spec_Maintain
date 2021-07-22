import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps, useHistory, useParams } from "react-router-dom"

const Search = () => {
    const { mode } = useParams<{mode: string}>()
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
                <Link to="/" className="btn btn-outline-secondary">Home</Link>
                <button type="submit" className="btn btn-primary" disabled={id === '' ? true : false}>Submit</button>
            </div>

        </form>
    )
}

export default Search