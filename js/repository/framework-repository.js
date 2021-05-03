import { FrameworkDataStore } from "../data-store/framework-data-store.js";

/**
 * フレームワークデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class FrameworkRepository {
    /**
     * フレームワークデータを取得します。
     * @return {Array<Object>} フレームワークデータを返します。
     */
    getAll = () => {
        const dataStore = new FrameworkDataStore();
        return dataStore.get();
    }

    /**
     * フレームワークデータを更新します。
     * @param {Object} framework フレームワークデータ。
     */
    post = framework => {
        // dummy
    }
}

export { FrameworkRepository };