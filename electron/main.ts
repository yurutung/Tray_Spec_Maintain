import { app, BrowserWindow, ipcMain } from 'electron'
import * as dotEnv from 'dotenv'
import { establishConnection, services } from '../DB'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

dotEnv.config()

function createWindow() {

  mainWindow = new BrowserWindow({
    // icon: path.join(assetsPath, 'assets', 'icon.png'),
    width: Number(process.env.WINDOWS_HEIGHT) || 1100,
    height: Number(process.env.WINDOWS_WIDTH) || 700,
    // backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  // Open the DevTools.
  if (process.env.ENV == "dev") {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

async function registerListeners() {
  // connect db
  establishConnection()
  const tsService = services.TraySpecService.of()
  const tmService = services.TrayMslService.of()

  /**
   * This comes from bridge integration, check bridge.ts
   */
  // get datas
  ipcMain.on('getData', async (_, mode, id) => {
    // TODO: define tray_spec, tray_msl
    try {
      // TODO: catch之後throw error會有UnhandlePromise的error，不知道怎麼解好，所以先用status判斷
      if (mode == 'tray_spec') {
        _.returnValue = {
          status: 200,
          data: await tsService.getDatas(id)
        }
      } else if (mode == 'tray_msl') {
        _.returnValue = {
          status: 200,
          data: await tmService.getDatas(id)
        }
      }
    } catch (error) {
      console.error(`getData/${mode}/${id} Error: ${error}`)
      _.returnValue = {
        status: 500,
        data: `getData/${mode}/${id} Error: ${error}`
      }
    }
  })
  // add tray spec data
  ipcMain.on('addTraySpecData', async (_, data) => {
    // TODO: catch之後throw error會有UnhandlePromise的error，不知道怎麼解好，所以先用status判斷
    try {
      _.returnValue = {
        status: 201,
        data: await tsService.addData(data)
      }
    } catch (error) {
      console.error(`addTraySpecData Error: ${error}`)
      _.returnValue = {
        status: 500,
        data: `addTraySpecData Error: ${error}`
      }
    }
  })
  // add tray msl data
  ipcMain.on('addTrayMslData', async (_, data) => {
    // TODO: catch之後throw error會有UnhandlePromise的error，不知道怎麼解好，所以先用status判斷
    try {
      _.returnValue = {
        status: 201,
        data: await tmService.addData(data)
      }
    } catch (error) {
      console.error(`addTrayMslData Error: ${error}`)
      _.returnValue = {
        status: 500,
        data: `addTrayMslData Error: ${error}`
      }
    }
  })
  // edit tray msl data
  ipcMain.on('editTraySpecData', async (_, data) => {
    // TODO: catch之後throw error會有UnhandlePromise的error，不知道怎麼解好，所以先用status判斷
    try {
      _.returnValue = {
        status: 200,
        data: await tsService.updateData(data)
      }
    } catch (error) {
      console.error(`editTraySpecData Error: ${error}`)
      _.returnValue = {
        status: 404,
        data: `editTraySpecData Error: ${error}`
      }
    }
  })
  // edit tray msl data
  ipcMain.on('editTrayMslData', async (_, data) => {
    // TODO: catch之後throw error會有UnhandlePromise的error，不知道怎麼解好，所以先用status判斷
    try {
      _.returnValue = {
        status: 200,
        data: await tmService.updateData(data)
      }
    } catch (error) {
      console.error(`editTrayMslData Error: ${error}`)
      _.returnValue = {
        status: 404,
        data: `editTrayMslData Error: ${error}`
      }
    }
  })
  // del tray msl data
  ipcMain.on('delTraySpecData', async (_, data) => {
    // TODO: catch之後throw error會有UnhandlePromise的error，不知道怎麼解好，所以先用status判斷
    try {
      _.returnValue = {
        status: 204,
        data: await tsService.deleteData(data)
      }
    } catch (error) {
      console.error(`delTraySpecData Error: ${error}`)
      _.returnValue = {
        status: 404,
        data: `delTraySpecData Error: ${error}`
      }
    }
  })
  // del tray msl data
  ipcMain.on('delTrayMslData', async (_, data) => {
    // TODO: catch之後throw error會有UnhandlePromise的error，不知道怎麼解好，所以先用status判斷
    try {
      _.returnValue = {
        status: 204,
        data: await tmService.deleteData(data)
      }
    } catch (error) {
      console.error(`delTrayMslData Error: ${error}`)
      _.returnValue = {
        status: 404,
        data: `delTrayMslData Error: ${error}`
      }
    }
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
