import { ProgrammingLanguageDataStore } from "../data-store/programming-language-data-store.min.js";

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
     * プログラミング言語データを取得します。
     * @param {String} id 識別子。
     * @return {Object} プログラミング言語データを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new ProgrammingLanguageDataStore();
        const languages = dataStore.get().filter(x => x.id === id);
        return languages.length > 0 ? languages[0] : null;
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