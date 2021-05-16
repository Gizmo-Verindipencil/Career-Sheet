import { BusinessRelationshipRepository } from "../../repository/business-relationship-repository.min.js";

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
        const repository = new BusinessRelationshipRepository();
        return repository.getById(id);
    }
}

export { BusinessRelationshipChartModel };