import { TaskCategoryDataStore } from "../data-store/task-category-data-store.js";

/**
 * 作業分類データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class TaskCategoryRepository {
    /**
     * 作業分類データを取得します。
     * @return {Array<Object>}　作業分類データを返します。
     */
    getAll = () => {
        const dataStore = new TaskCategoryDataStore();
        return dataStore.get();
    }
}

export { TaskCategoryRepository };