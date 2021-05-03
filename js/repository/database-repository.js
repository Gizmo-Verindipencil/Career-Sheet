import { DatabaseDataStore } from "../data-store/database-data-store";

/**
 * DBデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class DatabaseRepository {
    /**
     * DBデータを取得します。
     * @return {Array<Object>} DBデータを返します。
     */
    getAll = () => {
        const dataStore = new DatabaseDataStore();
        return dataStore.get();
    }

    /**
     * DBデータを更新します。
     * @param {Object} db DBデータ。
     */
    post = db => {
        // dummy
    }
}

export { DatabaseRepository };