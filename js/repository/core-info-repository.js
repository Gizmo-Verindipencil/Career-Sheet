import { CoreInfoDataStore } from "../data-store/core-info-data-store.js";

/**
 * 基本情報データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class CoreInfoRepository {
    /**
     * 基本情報データを取得します。
     * @return {Object} 基本情報データを返します。
     */
    get = () => {
        const dataStore = new CoreInfoDataStore();
        return dataStore.get();
    }

    /**
     * 基本情報データを更新します。
     * @param {Object} coreInfo 基本情報データ。
     */
    post = coreInfo => {
        // dummy
    }
}

export { CoreInfoRepository };