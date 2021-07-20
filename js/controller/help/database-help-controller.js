import { createInstance } from "../../keyword/create-instance.min.js";
import { Buildable } from "../../interface/buildable.min.js";
import { DatabaseHelpModel } from "../../model/help/database-help-model.min.js";
import { Threading } from "../../shared/utility/threading.min.js";
import { PageColorAdjuster } from "../../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.min.js";
import StylesheetSeriesLoader from "../../shared/stylesheet-series-loader.min.js";

/**
 * ヘルプ(データベース)のコントローラーを提供します。
 */
class DbHelpController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new DatabaseHelpModel();

        // 必要なスタイルシートを読込
        this.stylesheetLoader = StylesheetSeriesLoader;
        this.stylesheetLoader.add("css/work-experience.min.css");
        this.stylesheetLoader.load();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", "jQuery");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {DbHelpController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new DbHelpController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await Threading.sleep(2000);
        }
        return controller;
    }

    /**
     * ヘルプの設定を実行します。
     */
    execute = async() => {
        // DBデータを取得
        const databases = this.model.getDatabases();

        // データ毎の処理
        for (let i = 0; i < databases.length;  i++) {
            const database = databases[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createNameTd(database));
            cells.push(this.createDescriptionTd(database));

            // tr要素を生成してテーブルに追加
            const row = `<tr>${cells.join("")}</tr>`;
            $("#help-info tr:last").after(row);
        }

        // 色を調整
        const adjuster = await createInstance(PageColorAdjuster);
        adjuster.changeBackgroundColor();

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }

    /**
     * td要素を生成します。
     * @param {String} innerHtml td要素の内部html。
     * @return {String} td要素を表すhtmlを返します。
     */
    createTd = innerHtml => `<td class='help-info-cell'>${innerHtml}</td>`;

    /**
     * No.のtd要素を生成します。
     * @param {Number} index td要素に設定する番号。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNoTd = index => {
        const number = index + 1;
        const centering = "text-align:center;";
        return this.createTd(`<p style='${centering}'>${number}</p>`);
    }

    /**
     * 名称のtd要素を生成します。
     * @param {Object} database DBデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNameTd = database => {
        const classPrefix = "work-experience-technology";
        const noWrap = "white-space:nowrap;";
        return this.createTd(`<p class='${classPrefix}-database' style='${noWrap}'>${database.name}</p>`);
    }

    /**
     * 説明のtd要素を生成します。
     * @param {Object} database DBデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createDescriptionTd = database => {
        return this.createTd(`<p>${database.description}</p>`);
    }
}

export { DbHelpController };