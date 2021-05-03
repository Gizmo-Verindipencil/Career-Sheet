import { OtherDataStore } from "../data-store/other-data-store.js";

/**
 * その他技術データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class OtherRepository {
    /**
     * その他技術データを取得します。
     * @return {Array<Object>} その他技術データを返します。
     */
    getAll = () => {
        const dataStore = new OtherDataStore();
        return dataStore.get();
    }

    /**
     * その他技術データを更新します。
     * @param {Object} other その他技術データ。
     */
    post = other => {
        // dummy
    }
}

export { OtherRepository };