import { DevelopmentToolDataStore } from "../data-store/development-tool-data-store.js";

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
     * 開発ツールデータを更新します。
     * @param {Object} developmentTool 開発ツールデータ。
     */
    post = developmentTool => {
        // dummy
    }
}

export { DevelopmentToolRepository };