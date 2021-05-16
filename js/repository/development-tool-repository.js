import { DevelopmentToolDataStore } from "../data-store/development-tool-data-store.min.js";

/**
 * 開発ツールデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class DevelopmentToolRepository {
    /**
     * 開発ツールデータを取得します。
     * @return {Array<Object>} 開発ツールデータを返します。
     */
    getAll = () => {
        const dataStore = new DevelopmentToolDataStore();
        return dataStore.get();
    }

    /**
     * 開発ツールデータを取得します。
     * @param {String} id 識別子。
     * @return {Object} 開発ツールデータを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new BusinessRelationshipDataStore();
        const tools = dataStore.get().filter(x => x.id === id);
        return tools.length > 0 ? tools[0] : null;
    }

    /**
     * 開発ツールデータを更新します。
     * @param {Object} developmentTool 開発ツールデータ。
     */
    post = developmentTool => {
        // dummy
    }
}

export { DevelopmentToolRepository };