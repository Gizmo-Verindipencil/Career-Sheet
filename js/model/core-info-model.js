import { CoreInfoRepository } from "../repository/core-info-repository.js";

/**
 * 基本情報のモデルを提供します。
 */
class CoreInfoModel {
    /**
     * 基本情報データを取得します。
     * @returns {Object} 基本情報データを返します。
     */
    getCoreInformation = () => {
        const repository = new CoreInfoRepository();
        return repository.get();
    }
}

export { CoreInfoModel };