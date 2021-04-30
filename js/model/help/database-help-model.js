import { DatabaseRepository } from "../../repository/database-repository.js";

/**
 * ヘルプ(データベース)のモデルを提供します。
 */
class DatabaseHelpModel {
    /**
     * データベースの一覧を取得します。
     * @returns {Array<Object>} データベースデータを返します。
     */
    getDatabases = () => {
        // データを取得
        const repository = new DatabaseRepository();
        const data = repository.getAll();

        // 名前の昇順で並べる
        data.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });
        return data;
    }
}

export { DatabaseHelpModel };