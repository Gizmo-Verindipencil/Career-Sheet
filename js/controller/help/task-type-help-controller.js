import { createInstance } from "../../keyword/create-instance.min.js";
import { Buildable } from "../../interface/buildable.min.js";
import { TaskTypeHelpModel } from "../../model/help/task-type-help-model.min.js";
import { ThreadingUtility } from "../../shared/utility/threading-utility.min.js";
import { PageColorAdjuster } from "../../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.min.js";
import StylesheetSeriesLoader from "../../shared/stylesheet-series-loader.min.js";

/**
 * ヘルプ(作業種類)のコントローラーを提供します。
 */
class TaskTypeHelpController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new TaskTypeHelpModel();

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
     * @returns {TaskTypeHelpController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new TaskTypeHelpController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await ThreadingUtility.sleep(2000);
        }
        return controller;
    }

    /**
     * ヘルプの設定を実行します。
     */
    execute = async() => {
        // 作業種類データを取得
        const types = this.model.getTaskTypes();

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
     * コードのtd要素を生成します。
     * @param {Object} type 作業種類データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createCodeTd = type => {
        const className = "work-experience-task-type-colorless";

        // 作業テーマデータを取得
        const theme = this.model.getTaskThemeById(type.themeId);

        // 作業テーマに沿ったデザインを設定
        const styles = [];
        styles.push(theme ? `color:${theme.foreColor}` : "");
        styles.push(theme ? `background-color:${theme.backgroundColor}` : "");

        // 要素を生成して返す
        return this.createTd(`<p class='${className}' style='${styles.join(";")}'>${type.id}</p>`);
    }

    /**
     * 名称(日本語/英語)のtd要素を生成します。
     * @param {Object} type 作業種類データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNamesTd = type => {
        const noWrap = "white-space:nowrap;";
        const tds = [];
        tds.push(this.createTd(`<p style='${noWrap}'>${type.name.ja}</p>`));
        tds.push(this.createTd(`<p style='${noWrap}'>${type.name.en}</p>`));
        return tds.join("");
    }

    /**
     * 説明のtd要素を生成します。
     * @param {Object} type 作業種類データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createDescriptionTd = type => {
        // TODO：説明の追加
        return this.createTd(`<p></p>`);
    }
}

export { TaskTypeHelpController };