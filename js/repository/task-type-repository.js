import { TaskTypeDataStore } from "../data-store/task-type-data-store.js";

/**
 * 作業種類データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class TaskTypeRepository {
    /**
     * 作業種類データを取得します。
     * @return {Array<Object>} 作業種類データを返します。
     */
    getAll = () => {
        const dataStore = new TaskTypeDataStore();
        return dataStore.get();
    }

    /**
     * 作業種類データを取得します。
     * @param {String} id 識別子。
     * @return {Object} 作業種類データを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new TaskTypeDataStore();
        const types = dataStore.get().filter(x => x.id === id);
        return types.length > 0 ? types[0] : null;
    }
}

export { TaskTypeRepository };