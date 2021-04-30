import { DevelopmentToolRepository } from "../../repository/development-tool-repository.js";

/**
 * ヘルプ(開発ツール)のモデルを提供します。
 */
class DevelopmentToolHelpModel {
    /**
     * 開発ツールの一覧を取得します。
     * @returns {Array<Object>} 開発ツールデータを返します。
     */
    getDevelopmentTools = () => {
        // データを取得
        const repository = new DevelopmentToolRepository();
        const data = this.records = repository.getAll();

        // 名前の昇順で並べる
        data.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });
        return data;
    }
}

export { DevelopmentToolHelpModel };