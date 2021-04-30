import { TaskTypeRepository } from "../../repository/task-type-repository.js";

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
}

export { TaskTypeHelpModel };