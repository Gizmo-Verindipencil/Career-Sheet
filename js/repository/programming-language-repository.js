import { ProgrammingLanguageDataStore } from "../data-store/programming-language-data-store.js";

/**
 * プログラミング言語データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class ProgrammingLanguageRepository {
    /**
     * プログラミング言語データを取得します。
     * @return {Array<Object>} プログラミング言語データを返します。
     */
    getAll = () => {
        const dataStore = new ProgrammingLanguageDataStore();
        return dataStore.get();
    }

    /**
     * プログラミング言語データを更新します。
     * @param {Object} programmingLanguage プログラミング言語データ。
     */
    post = programmingLanguage => {
        // dummy
    }
}

export { ProgrammingLanguageRepository };