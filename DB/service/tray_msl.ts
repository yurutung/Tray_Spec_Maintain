import { trayMsl } from '../models';
import { ITrayMsl } from '../types/tray_msl'

interface TrayMslRepo {
    getDatas(mid: string): Promise<Array<ITrayMsl>>
    addData(trayMslBody: ITrayMsl): Promise<ITrayMsl>
    updateData(trayMslBody: ITrayMsl): Promise<[number, trayMsl[]] | null>
    deleteData(trayMslBody: ITrayMsl): Promise<number | null>
}

class TrayMslService implements TrayMslRepo {
    private constructor() { }

    static of(): TrayMslService {
        return new TrayMslService()
    }

    async getDatas(mid: string): Promise<Array<ITrayMsl>> {
        return trayMsl.findAll({
            raw: true,
            where: {
                msl: mid
            }
        })
    }

    async addData(trayMslBody: ITrayMsl): Promise<ITrayMsl> {
        return trayMsl.create(trayMslBody)
    }

    async updateData(trayMslBody: ITrayMsl): Promise<[number, trayMsl[]] | null> {
        return trayMsl.update(trayMslBody, {
            where: {
                msl: trayMslBody.msl
            }
        })
    }

    async deleteData(trayMslBody: ITrayMsl): Promise<number | null> {
        return trayMsl.destroy({
            where: {
                msl: trayMslBody.msl
            }
        })
    }

}

export { TrayMslService }
