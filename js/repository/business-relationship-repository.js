import { BusinessRelationshipDataStore } from "../data-store/business-relationship-data-store.js";

/**
 * ビジネス関係データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class BusinessRelationshipRepository {
    /**
     * ビジネス関係データを取得します。
     * @return {Array<Object>} ビジネス関係データを返します。
     */
    getAll = () => {
        const dataStore = new BusinessRelationshipDataStore();
        return dataStore.get();
    }

    /**
     * ビジネス関係データを更新します。
     * @param {Object} businessRelationship ビジネス関係データ。
     */
    post = businessRelationship => {
        // dummy
    }
}

export { BusinessRelationshipRepository };