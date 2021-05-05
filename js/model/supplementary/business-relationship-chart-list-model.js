import { BusinessRelationshipRepository } from "../../repository/business-relationship-repository.js";

/**
 * ビジネス関係図リストのモデルを提供します。
 */
class BusinessRelationshipChartListModel {
    /**
     * ビジネス関係を取得します。
     * @returns {Array<Object>} ビジネス関係を返します。該当データがない場合、nullを返します。
     */
    getBusinessRelationships = () => {
        const repository = new BusinessRelationshipRepository();
        return repository.getAll();
    }
}

export { BusinessRelationshipChartListModel };