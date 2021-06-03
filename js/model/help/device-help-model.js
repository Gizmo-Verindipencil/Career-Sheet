import { DeviceRepository } from "../../repository/device-repository.min.js";

/**
 * ヘルプ(機種)のモデルを提供します。
 */
class DeviceHelpModel {
    /**
     * 機種の一覧を取得します。
     * @returns {Array<Object>} 機種データを返します。
     */
    getDevices = () => {
        // データを取得
        const repository = new DeviceRepository();
        const data = repository.getAll();

        // 名前の昇順で並べる
        data.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });
        return data;
    }
}

export { DeviceHelpModel };