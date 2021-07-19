import { Link, RouteComponentProps, useHistory } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import BootstrapTable from "react-bootstrap-table-next"
import { ITraySpec } from "../../../DB/types/tray_spec"
import { ITrayMsl } from "../../../DB/types/tray_msl"


export function Datas({ match }: RouteComponentProps<{ mode: string, id: string }>) {
  // params
  // console.log(match.params)
  const mode = match.params.mode
  const id = match.params.id
  // datas
  // const [datas, setDatas] = useState<ITraySpec[] | ITrayMsl[]>([])
  let datas: Array<ITraySpec | ITrayMsl> = []
  useEffect(() => {
    fetchDatas()
  }, [])
  const fetchDatas = (): void => {
    window.Main.getData(mode, id).then(d => {
      datas = d
      console.log(datas)
    })
  }

  return (
    <div>
      <Link to="/" className="btn btn-outline-secondary">Home</Link>
    </div>
  )
}

export default Datas