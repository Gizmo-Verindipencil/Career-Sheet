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

    /**
     * 作業分類データを取得します。
     * @param {String} id 識別子。
     * @return {Object} 作業分類データを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new TaskCategoryDataStore();
        const cagoteries = dataStore.get().filter(x => x.id === id);
        return cagoteries.length > 0 ? cagoteries[0] : null;
    }
}

export { TaskCategoryRepository };