import { PlatformDataStore } from "../data-store/platform-data-store.js";

/**
 * プラットフォームデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class PlatformRepository {
    /**
     * プラットフォームデータを取得します。
     * @return {Array<Object>} プラットフォームデータを返します。
     */
    getAll = () => {
        const dataStore = new PlatformDataStore();
        return dataStore.get();
    }

    /**
     * プラットフォームデータを更新します。
     * @param {Object} platform プラットフォームデータ。
     */
    post = platform => {
        // dummy
    }
}

export { PlatformRepository };