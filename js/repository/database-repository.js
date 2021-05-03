import { DatabaseDataStore } from "../data-store/database-data-store.js";

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
     * DBデータを取得します。
     * @param {String} id 識別子。
     * @return {Object} DBデータを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new DatabaseDataStore();
        const dbs = dataStore.get().filter(x => x.id === id);
        return dbs.length > 0 ? dbs[0] : null;
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