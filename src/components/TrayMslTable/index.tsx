import React, { useEffect, useState } from 'react'
import { ITrayMsl } from "../../../DB/types/tray_msl"

import BootstrapTable, { SelectRowProps } from "react-bootstrap-table-next"

export function TrayMslTable(props: {mode: string, id: string }) {
  const mode = props.mode
  const id = props.id
  const [datas, setDatas] = useState<ITrayMsl[]>([])
  useEffect(() => {
    fetchDatas()
  }, [])
  const fetchDatas = (): void => {
    window.Main.getData(mode, id).then(d => {
      setDatas(d)
    })
  }

  const columns = [
    {
      dataField: "msl",
      text: "MSL ID",
      sort: true,
    },
    {
      dataField: "floorLife",
      text: "Floor Life",
      sort: true,
    },
  ]
  
  const selectRow: SelectRowProps<any> = {
    mode: 'radio',
    clickToSelect: true,
    style: { backgroundColor: '#c8e6c9' }
  }

  return (
    <BootstrapTable keyField="msl" data={datas} columns={columns} selectRow={selectRow}/>
  )
}

export default TrayMslTable