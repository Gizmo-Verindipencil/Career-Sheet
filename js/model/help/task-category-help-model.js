import { TaskCategoryRepository } from "../../repository/task-category-repository.js";
import { TaskTypeRepository } from "../../repository/task-type-repository.js";

/**
 * ヘルプ(作業カテゴリ)のモデルを提供します。
 */
class TaskCategoryHelpModel {
    /**
     * 作業カテゴリの一覧を取得します。
     * @returns {Array<Object>} 作業カテゴリデータを返します。
     */
    getTaskCategories = () => {
        // データを取得
        const repository = new TaskCategoryRepository();
        const data = repository.getAll();

        // ソート順の昇順で並べる
        data.sort((a, b) => {
            return a.sort > b.sort ? 1 : -1;
        });
        return data;
    }

    /**
     * 作業カテゴリに属する作業種類を取得します。
     * @param {String} categoryId 作業カテゴリID。
     * @returns {Array<Object>} 作業種類データを返します。
     */
    getTaskTypesByCategoryId = categoryId => {
        // データを取得
        const repository = new TaskTypeRepository();
        const data = repository.getAll().filter(x => x.categoryId === categoryId);

        // ソート順の昇順で並べる
        data.sort((a, b) => {
            return a.sort > b.sort ? 1 : -1;
        });
        return data;
    }
}

export { TaskCategoryHelpModel };