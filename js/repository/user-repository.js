import { UserDataStore } from "../data-store/user-data-store.js";

/**
 * ユーザーデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class UserRepository {
    /**
     * ユーザーデータを取得します。
     * @return {Object} ユーザーデータを返します。
     */
    get = () => {
        const dataStore = new UserDataStore();
        return dataStore.get();
    }

    /**
     * ユーザーデータを更新します。
     * @param {Object} coreInfo ユーザーデータ。
     */
    post = coreInfo => {
        // dummy
    }
}

export { UserRepository };