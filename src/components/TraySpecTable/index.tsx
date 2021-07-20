import React, { useEffect, useState } from 'react'
import { ITraySpec } from "../../../DB/types/tray_spec"

import BootstrapTable, { SelectRowProps } from "react-bootstrap-table-next"

const TraySpecTable = (props: {mode: string, id: string}) => {
  const mode = props.mode
  const id = props.id
  const [datas, setDatas] = useState<ITraySpec[]>([])
  useEffect(() => {
    fetchDatas()
  }, [])
  const fetchDatas = (): void => {
    window.Main.getData(mode, id)
      .then(d => {
        d.forEach(e => e.id = `${e.custCd}_${e.prodspecId}`)
        setDatas(d)
      })
      .catch(err => console.log(err))
  }

  const columns = [
    {
      dataField: "id",
      text: "id",
      hidden: true
    },
    {
      dataField: "custCd",
      text: "Custumer Code"
    },
    {
      dataField: "prodspecId",
      text: "TSMC Part"
    },
    {
      dataField: "custPartId",
      text: "Custumer Part"
    },
    {
      dataField: "description",
      text: "Description"
    },
    {
      dataField: "pinA1Loc",
      text: "Pin 1 Location"
    },
    {
      dataField: "packingType",
      text: "Package Material"
    },
    {
      dataField: "msl",
      text: "MSL"
    },
    {
      dataField: "traySize",
      text: "Tray Size"
    },
    {
      dataField: "chipSize",
      text: "Chip Size"
    },
    {
      dataField: "binGrade",
      text: "Bin Grade"
    },
    {
      dataField: "termCompost",
      text: "Terminal Composition"
    },
    {
      dataField: "pbFree",
      text: "Pb-Free(ECO Status)"
    },
    {
      dataField: "temp",
      text: "Temperature"
    },
    {
      dataField: "updFlag",
      text: "updFlag"
    },
    {
      dataField: "cliamUser",
      text: "cliamUser"
    },
    {
      dataField: "claimTime",
      text: "claimTime",
      formatter: (cell: Date) => {
        if (cell) {
          return cell.toString()
        }
      }
    },
    {
      dataField: "datecodeLimit",
      text: "Date Code Limit"
    },
  ]

  const selectRow: SelectRowProps<any> = {
    mode: 'radio',
    clickToSelect: true,
    style: { backgroundColor: '#c8e6c9' }
  }

  return (
    <BootstrapTable keyField="id" data={datas} columns={columns} selectRow={selectRow}/>
  )
}

export default TraySpecTable