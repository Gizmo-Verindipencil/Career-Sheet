import { OperatingSystemDataStore } from "../data-store/operating-system-data-store.min.js";

/**
 * OSデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class OperatingSystemRepository {
    /**
     * OSデータを取得します。
     * @return {Array<Object>} OSデータを返します。
     */
    getAll = () => {
        const dataStore = new OperatingSystemDataStore();
        return dataStore.get();
    }

    /**
     * OSデータを取得します。
     * @param {String} id 識別子。
     * @return {Object} OSデータを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new OperatingSystemDataStore();
        const oss = dataStore.get().filter(x => x.id === id);
        return oss.length > 0 ? oss[0] : null;
    }

    /**
     * OSデータを更新します。
     * @param {Object} os OSデータ。
     */
    post = os => {
        // dummy
    }
}

export { OperatingSystemRepository };