import { QualificationRepository } from "../repository/qualification-repository.js";

/**
 * 資格・免許のモデルを提供します。
 */
class QualificationModel {
    /**
     * 資格・免許データを取得します。
     * @returns {Array<Object>} 資格・免許データを返します。
     */
    getQualifications = () => {
        const repository = new QualificationRepository();
        return repository.getAll();
    }
}

export { QualificationModel };