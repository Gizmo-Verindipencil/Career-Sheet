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
}

export { TaskTypeRepository };