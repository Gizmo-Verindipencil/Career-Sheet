import { OtherRepository } from "../../repository/other-repository.js";

/**
 * ヘルプ(その他技術)のモデルを提供します。
 */
class OtherHelpModel {
    /**
     * その他技術の一覧を取得します。
     * @returns {Array<Object>} その他技術データを返します。
     */
    getOthers = () => {
        // データを取得
        const repository = new OtherRepository();
        const data = repository.getAll();

        // 名前の昇順で並べる
        data.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });
        return data;
    }
}

export { OtherHelpModel };