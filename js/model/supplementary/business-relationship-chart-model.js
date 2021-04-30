import { BusinessRelationshipRepository } from "../../repository/business-relationship-repository.js";

/**
 * ビジネス関係図のモデルを提供します。
 */
class BusinessRelationshipChartModel {
    /**
     * 指定したビジネス関係を取得します。
     * @param {String} id 識別子。
     * @returns {Object} ビジネス関係を返します。該当データがない場合、nullを返します。
     */
    getBusinessRelationshipById = id => {
        // データを取得
        const repository = new BusinessRelationshipRepository();
        const relationships = repository.getAll().filter(x => x.id === id);

        // データがなければnullを返す
        return relationships.length > 0 ? relationships[0] : null;
    }
}

export { BusinessRelationshipChartModel };