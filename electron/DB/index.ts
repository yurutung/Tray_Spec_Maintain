import { establishConnection } from './plugins/mariadb'
import * as models from './models'
import { TraySpecService } from './service/tray_spec'

// establishConnection()

export {establishConnection, models, TraySpecService}