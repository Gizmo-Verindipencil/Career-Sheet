import { UncategorizedTechnologyDataStore } from "../data-store/uncategorized-technology-data-store.min.js";

/**
 * その他技術データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class UncategorizedTechnologyRepository {
    /**
     * その他技術データを取得します。
     * @return {Array<Object>} その他技術データを返します。
     */
    getAll = () => {
        const dataStore = new UncategorizedTechnologyDataStore();
        return dataStore.get();
    }

    /**
     * その他技術データを取得します。
     * @param {String} id 識別子。
     * @return {Object} その他技術データを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new UncategorizedTechnologyDataStore();
        const technologies = dataStore.get().filter(x => x.id === id);
        return technologies.length > 0 ? technologies[0] : null;
    }

    /**
     * その他技術データを更新します。
     * @param {Object} technology その他技術データ。
     */
    post = technology => {
        // dummy
    }
}

export { UncategorizedTechnologyRepository };