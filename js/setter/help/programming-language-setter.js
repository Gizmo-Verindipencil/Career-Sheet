import { ProgrammingLanguageRepository } from "../../repository/programming-language-repository.js";
import { Utility } from "../../shared/utility.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * プログラミング言語データ（ヘルプ）のセッター
 */
class ProgrammingLanguageHelpSetter {
    /**
     * コンストラクタ
     */
    constructor() {
        // 必要なソースを読込
        this.loader = ScriptSeriesLoader;
        this.loader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.loader.load();
    }

    /**
     * インスタンスの生成
     * @returns {ProgrammingLanguageHelpSetter} 新しいインスタンス
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new ProgrammingLanguageHelpSetter();

        // スクリプトの読込完了後にインスタンスを返す
        while(setter.loader.running){
            await Utility.sleep(2000);
        }
        return setter;
    }

    /**
     * セット処理の実行
     */
    execute = () => {
        // languageデータを取得
        const Repository = new ProgrammingLanguageRepository();
        const languages = Repository.getAll();

        // 名前の昇順で並べる
        languages.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });

        // データ毎の処理
        for (let i = 0; i < languages.length;  i++) {
            const language = languages[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createNameTd(language));
            cells.push(this.createDescriptionTd(language));

            // tr要素を生成してテーブルに追加
            const row = `<tr>${cells.join("")}</tr>`;
            $("#help-info tr:last").after(row);
        }
    }

    /**
     * td要素を生成
     * @param {String} innerHtml
     * @return {String} td要素を表すhtml 
     */
    createTd = innerHtml => `<td class="help-info-cell">${innerHtml}</td>`;

    /**
     * No.のtd要素を生成
     * @param {Number} index インデックス
     * @return {String} td要素を表すhtml
     */
    createNoTd = index => {
        const number = index + 1;
        const centering = "text-align:center;";
        return this.createTd(`<p style="${centering}">${number}</p>`);
    }

    /**
     * 名称のtd要素を生成
     * @param {Object} language プログラミング言語データ
     * @return {String} td要素を表すhtml
     */
    createNameTd = language => {
        const classPrefix = "work-experience-technology";
        const noWrap = "white-space:nowrap;";
        return this.createTd(`<p class="${classPrefix}-programming-language" style="${noWrap}">${language.name}</p>`);
    }

    /**
     * 説明のtd要素を生成
     * @param {Object} language プログラミング言語データ
     * @return {String} td要素を表すhtml
     */
    createDescriptionTd = language => {
        return this.createTd(`<p>${language.description}</p>`);
    }
}

export { ProgrammingLanguageHelpSetter };