import { QualificationDataStore } from "../data-store/qualification-data-store.js";

/**
 * 資格データデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class QualificationRepository {
    /**
     * 資格データを取得します。
     * @return {Array<Object>} 資格データを返します。
     */
    getAll = () => {
        const dataStore = new QualificationDataStore();
        return dataStore.get();
    }

    /**
     * 資格データを更新します。
     * @param {Object} qualification 資格データ。
     */
    post = qualification => {
        // dummy
    }
}

export { QualificationRepository };