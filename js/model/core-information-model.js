import { UserRepository } from "../repository/user-repository.js";

/**
 * 基本情報のモデルを提供します。
 */
class CoreInformationModel {
    /**
     * ユーザーデータを取得します。
     * @returns {Object} ユーザーデータを返します。
     */
    getCoreInformation = () => {
        const repository = new UserRepository();
        return repository.get();
    }
}

export { CoreInformationModel };