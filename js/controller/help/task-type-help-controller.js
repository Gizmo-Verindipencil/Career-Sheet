import { TaskTypeRepository } from "../../repository/task-type-repository.js";
import { Utility } from "../../shared/utility.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js";
import StylesheetSeriesLoader from "../../shared/stylesheet-series-loader.js";

/**
 * ヘルプ(作業分類)の設定処理を提供します。
 */
class TaskTypeHelpController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 必要なスタイルシートを読込
        this.stylesheetLoader = StylesheetSeriesLoader;
        this.stylesheetLoader.add("css/work-experience.css");
        this.stylesheetLoader.load();
        
        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {TaskTypeHelpController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new TaskTypeHelpController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * ヘルプの設定を実行します。
     */
    execute = () => {
        // 作業分類データを取得
        const repository = new TaskTypeRepository();
        const types = repository.getAll();

        // ソート順で並べる
        types.sort((a, b) => {
            return a.sort > b.sort ? 1 : -1;
        });

        // データ毎の処理
        for (let i = 0; i < types.length;  i++) {
            const type = types[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createCodeTd(type));
            cells.push(this.createNamesTd(type));
            cells.push(this.createDescriptionTd(type));

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
     * コードのtd要素を生成します。
     * @param {Object} type 作業分類データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createCodeTd = type => {
        const style = "work-experience-task-type-unknown";
        return this.createTd(`<p class="${style}">${type.id}</p>`);
    }

    /**
     * 名称(日本語/英語)のtd要素を生成します。
     * @param {Object} type 作業分類データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNamesTd = type => {
        const noWrap = "white-space:nowrap;";
        const tds = [];
        tds.push(this.createTd(`<p style="${noWrap}">${type.name.ja}</p>`));
        tds.push(this.createTd(`<p style="${noWrap}">${type.name.en}</p>`));
        return tds.join("");
    }

    /**
     * 説明のtd要素を生成します。
     * @param {Object} type 作業分類データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createDescriptionTd = type => {
        // TODO：説明の追加
        return this.createTd(`<p></p>`);
    }
}

export { TaskTypeHelpController };