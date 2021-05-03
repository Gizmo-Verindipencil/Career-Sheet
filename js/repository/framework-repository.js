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
     * フレームワークデータを取得します。
     * @param {String} id 識別子。
     * @return {Object} フレームワークデータを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new FrameworkDataStore();
        const frameworks = dataStore.get().filter(x => x.id === id);
        return frameworks.length > 0 ? frameworks[0] : null;
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