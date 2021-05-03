import { DeviceDataStore } from "../data-store/device-data-store.js";

/**
 * 機種データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class DeviceRepository {
    /**
     * 機種データを取得します。
     * @return {Array<Object>} 機種データを返します。
     */
    getAll = () => {
        const dataStore = new DeviceDataStore();
        return dataStore.get();
    }

    /**
     * 機種データを取得します。
     * @param {String} id 識別子。
     * @return {Object} 機種データを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new DeviceDataStore();
        const devices = dataStore.get().filter(x => x.id === id);
        return devices.length > 0 ? devices[0] : null;
    }

    /**
     * 機種データを更新します。
     * @param {Object} device 機種データ。
     */
    post = device => {
        // dummy
    }
}

export { DeviceRepository };