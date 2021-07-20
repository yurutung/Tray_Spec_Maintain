import { contextBridge, ipcRenderer } from 'electron'
import { ITraySpec } from '../DB/types/tray_spec'

export const api = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.FUNCTION_NAME`
   */

  // call ipcMain function
  // get data select by cust_cd or msl
  getData: async (mode: string, id: string): Promise<[]> => {
    const res = await ipcRenderer.sendSync('getData', mode, id)
    console.log(res)
    if (res.status == 200) {
      return res.data
    }
    else {
      throw new Error(res.data)
    }
  },
  // add tray spec data
  addTraySpecData: async (data: ITraySpec): Promise<ITraySpec> => {
    const res = await ipcRenderer.sendSync('addTraySpecData', data)
    if (res.status == 201) {
      return res.data
    }
    else {
      throw new Error(res.data)
    }
  },
  // add tray msl data
  addTrayMslData: async (data: ITraySpec): Promise<ITraySpec> => {
    const res = await ipcRenderer.sendSync('addTrayMslData', data)
    if (res.status == 201) {
      return res.data
    }
    else {
      throw new Error(res.data)
    }
  },

  /**
   * Provide an easier way to listen to events
   */
  on: (channel: string, callback: Function) => {
    ipcRenderer.once(channel, (_, data) => callback(data))
  },

}

contextBridge.exposeInMainWorld('Main', api)
