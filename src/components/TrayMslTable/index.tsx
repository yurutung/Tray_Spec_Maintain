import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { useHistory } from "react-router-dom"
import { ITrayMsl } from "../../../DB/types/tray_msl"
import BootstrapTable, { SelectRowProps } from "react-bootstrap-table-next"
import { toastMixin } from '../functions'

const TrayMslTable = forwardRef((props: { mode: string, id: string }, ref) => {
  // props
  const mode = props.mode
  const id = props.id
  // table data
  const [datas, setDatas] = useState<ITrayMsl[]>([])
  useEffect(() => {
    fetchDatas()
  }, [])
  const fetchDatas = (): void => {
    window.Main.getData(mode, id).then(d => {
      setDatas(d)
    })
  }
  // select row
  const [selected, setSelected] = useState<ITrayMsl>()
  const handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      setSelected(row)
    }
  }
  // get select and send to update page
  const history = useHistory()
  useImperativeHandle(
    ref,
    () => ({
      updateSelected() {
        if (selected) {
          history.push(
            `/add/tray_msl/${id}`,
            {
              isEdit: true,
              selectedData: selected
            }
          )
        }
      },
      delSelected() {
        if (selected) {
          window.Main.delTrayMslData(selected)
            .then(e => {
              toastMixin.fire({
                title: 'Delete data Successfully!'
              })
              fetchDatas()
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
    }),
  )

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
    style: { backgroundColor: '#c8e6c9' },
    onSelect: handleOnSelect,
  }

  return (
    <BootstrapTable keyField="msl" data={datas} columns={columns} selectRow={selectRow} />
  )
})

export default TrayMslTable