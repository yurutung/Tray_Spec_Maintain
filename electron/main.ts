import { app, BrowserWindow, ipcMain } from 'electron'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

import { establishConnection, services } from '../DB'

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

function createWindow() {

  mainWindow = new BrowserWindow({
    // icon: path.join(assetsPath, 'assets', 'icon.png'),
    width: 1100,
    height: 700,
    // backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.webContents.openDevTools();

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
  ipcMain.on('getData', (_, mode, id) => {
    console.log(id)
    // TODO: define tray_spec, tray_msl
    if (mode == 'tray_spec') {
      tsService.getDatas(id).then(data => {
        _.returnValue = data
      })
    } else if (mode == 'tray_msl') {
      tmService.getDatas(id).then(data => {
        _.returnValue = data
      })
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
