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
     * プラットフォームデータを取得します。
     * @param {String} id 識別子。
     * @return {Object} プラットフォームデータを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new PlatformDataStore();
        const platforms = dataStore.get().filter(x => x.id === id);
        return platforms.length > 0 ? platforms[0] : null;
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