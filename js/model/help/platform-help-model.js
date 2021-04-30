import { PlatformRepository } from "../../repository/platform-repository.js";

/**
 * ヘルプ(プラットフォーム)のモデルを提供します。
 */
class PlatformHelpModel {
    /**
     * プラットフォームの一覧を取得します。
     * @returns {Array<Object>} プラットフォームデータを返します。
     */
    getPlatforms = () => {
        // データを取得
        const repository = new PlatformRepository();
        const data = repository.getAll();

        // 名前の昇順で並べる
        data.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });
        return data;
    }
}

export { PlatformHelpModel };