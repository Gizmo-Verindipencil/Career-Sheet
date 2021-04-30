import { FrameworkRepository } from "../../repository/framework-repository.js";

/**
 * ヘルプ(フレームワーク)のモデルを提供します。
 */
class FrameworkHelpModel {
    /**
     * フレームワークの一覧を取得します。
     * @returns {Array<Object>} フレームワークデータを返します。
     */
    getFrameworks = () => {
        // データを取得
        const repository = new FrameworkRepository();
        const data = repository.getAll();

        // 名前の昇順で並べる
        data.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });
        return data;
    }
}

export { FrameworkHelpModel };