import { OperatingSystemDataStore } from "../data-store/operating-system-data-store.js";

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
     * OSデータを更新します。
     * @param {Object} os OSデータ。
     */
    post = os => {
        // dummy
    }
}

export { OperatingSystemRepository };