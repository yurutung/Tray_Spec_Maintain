import { traySpec } from '../models';
import { ITraySpec } from '../types/tray_spec'

interface TraySpecRepo {
    getDatas(cid: string): Promise<Array<ITraySpec>>
    addData(traySpecBody: ITraySpec): Promise<ITraySpec>
    updateData(traySpecBody: ITraySpec): Promise<[number, traySpec[]] | null>
    deleteData(traySpecBody: ITraySpec): Promise<number | null>
}

class TraySpecService implements TraySpecRepo {
    private constructor() { }

    static of(): TraySpecService {
        return new TraySpecService()
    }

    async getDatas(cid: string): Promise<Array<ITraySpec>> {
        return traySpec.findAll({
            where: {
                custId: cid
            }
        })
    }

    async addData(traySpecBody: ITraySpec): Promise<ITraySpec> {
        return traySpec.create(traySpecBody)
    }

    async updateData(traySpecBody: ITraySpec): Promise<[number, traySpec[]] | null> {
        return traySpec.update(traySpecBody, {
            where: {
                custId: traySpecBody.custId,
                prodspecId: traySpecBody.prodspecId
            }
        })
    }

    async deleteData(traySpecBody: ITraySpec): Promise<number | null> {
        return traySpec.destroy({
            where: {
                custId: traySpecBody.custId,
                prodspecId: traySpecBody.prodspecId
            }
        })
    }

}

export { TraySpecService }
