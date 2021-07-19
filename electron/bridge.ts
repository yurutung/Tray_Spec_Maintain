import { contextBridge, ipcRenderer } from 'electron'
import { ITraySpec } from "../DB/types/tray_spec"
import { ITrayMsl } from "../DB/types/tray_msl"

export const api = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.sayHello`
   */

  getData: async (mode: string, id: string): Promise<ITraySpec[] | ITrayMsl[]> => {
    return await ipcRenderer.sendSync('getData', mode, id)
  },

  /**
   * Provide an easier way to listen to events
   */
  on: (channel: string, callback: Function) => {
    ipcRenderer.once(channel, (_, data) => callback(data))
  },

}

contextBridge.exposeInMainWorld('Main', api)
