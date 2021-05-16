import { ProgrammingLanguageRepository } from "../../repository/programming-language-repository.min.js";

/**
 * ヘルプ(プログラミング言語)のモデルを提供します。
 */
class ProgrammingLanguageHelpModel {
    /**
     * プログラミング言語の一覧を取得します。
     * @returns {Array<Object>} プログラミング言語データを返します。
     */
    getProgrammingLanguages = () => {
        // データを取得
        const repository = new ProgrammingLanguageRepository();
        const data = repository.getAll();

        // 名前の昇順で並べる
        data.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });
        return data;
    }
}

export { ProgrammingLanguageHelpModel };