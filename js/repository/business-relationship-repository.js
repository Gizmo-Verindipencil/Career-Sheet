import { BusinessRelationshipDataStore } from "../data-store/business-relationship-data-store.min.js";

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
     * ビジネス関係データを取得します。
     * @param {String} id 識別子。
     * @return {Object} ビジネス関係データを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new BusinessRelationshipDataStore();
        const relationships = dataStore.get().filter(x => x.id === id);
        return relationships.length > 0 ? relationships[0] : null;
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