import { ProgrammingLanguageRepository } from "../../repository/programming-language-repository.js";
import { Utility } from "../../shared/utility.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * ヘルプ(プログラミング言語)の設定処理を提供します。
 */
class ProgrammingLanguageHelpSetter {
    /**
     * コンストラクタ
     */
    constructor() {
        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {ProgrammingLanguageHelpSetter} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new ProgrammingLanguageHelpSetter();

        // スクリプトの読込完了後にインスタンスを返す
        while(setter.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return setter;
    }

    /**
     * ヘルプの設定を実行します。
     */
    execute = () => {
        // プログラミング言語データを取得
        const repository = new ProgrammingLanguageRepository();
        const languages = repository.getAll();

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
     * td要素を生成します。
     * @param {String} innerHtml td要素の内部html。
     * @return {String} td要素を表すhtmlを返します。
     */
    createTd = innerHtml => `<td class="help-info-cell">${innerHtml}</td>`;

    /**
     * No.のtd要素を生成します。
     * @param {Number} index td要素に設定する番号。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNoTd = index => {
        const number = index + 1;
        const centering = "text-align:center;";
        return this.createTd(`<p style="${centering}">${number}</p>`);
    }

    /**
     * 名称のtd要素を生成します。
     * @param {Object} language プログラミング言語データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNameTd = language => {
        const classPrefix = "work-experience-technology";
        const noWrap = "white-space:nowrap;";
        return this.createTd(`<p class="${classPrefix}-programming-language" style="${noWrap}">${language.name}</p>`);
    }

    /**
     * 説明のtd要素を生成します。
     * @param {Object} language プログラミング言語データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createDescriptionTd = language => {
        return this.createTd(`<p>${language.description}</p>`);
    }
}

export { ProgrammingLanguageHelpSetter };