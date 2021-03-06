import { TaskTypeRepository } from "../../repository/task-type-repository.min.js";
import { TaskThemeRepository } from "../../repository/task-theme-repository.min.js";

/**
 * ヘルプ(作業種類)のモデルを提供します。
 */
class TaskTypeHelpModel {
    /**
     * 作業種類の一覧を取得します。
     * @returns {Array<Object>} 作業種類データを返します。
     */
    getTaskTypes = () => {
        // データを取得
        const repository = new TaskTypeRepository();
        const data = repository.getAll();

        // ソート順の昇順で並べる
        data.sort((a, b) => {
            return a.sort > b.sort ? 1 : -1;
        });
        return data;
    }

    /**
     * 作業テーマデータを取得します。
     * @param {String} id 作業テーマデータの識別子。
     * @returns {Object} 作業テーマデータを返します。該当データがない場合、nullを返します。
     */
     getTaskThemeById = id => {
        const repository = new TaskThemeRepository();
        return repository.getById(id);
    }
}

export { TaskTypeHelpModel };