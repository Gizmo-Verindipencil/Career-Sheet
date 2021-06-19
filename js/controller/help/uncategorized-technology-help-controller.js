import { Buildable } from "../../interface/buildable.min.js";
import { UncategorizedTechnologyHelpModel } from "../../model/help/uncategorized-techology-help-model.min.js";
import { Utility } from "../../shared/utility.min.js";
import { PageColorAdjuster } from "../../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.min.js";
import StylesheetSeriesLoader from "../../shared/stylesheet-series-loader.min.js";

/**
 * ヘルプ(その他技術)のコントローラーを提供します。
 */
class UncategorizedTechnologyHelpController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new UncategorizedTechnologyHelpModel();

        // 必要なスタイルシートを読込
        this.stylesheetLoader = StylesheetSeriesLoader;
        this.stylesheetLoader.add("css/work-experience.min.css");
        this.stylesheetLoader.load();
        
        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.scriptLoader.add("js/vendor/season-reminder.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {UncategorizedTechnologyHelpController} 新しいインスタンスします。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new UncategorizedTechnologyHelpController();

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
        // その他技術データを取得
        const technologies = this.model.getOthers();

        // データ毎の処理
        for (let i = 0; i < technologies.length;  i++) {
            const technology = technologies[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createNameTd(technology));
            cells.push(this.createDescriptionTd(technology));

            // tr要素を生成してテーブルに追加
            const row = `<tr>${cells.join("")}</tr>`;
            $("#help-info tr:last").after(row);
        }

        // 色を調整
        const adjuster = await PageColorAdjuster.build();
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
     * @param {Object} technology その他技術データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNameTd = technology => {
        const classPrefix = "work-experience-technology";
        const noWrap = "white-space:nowrap;";
        return this.createTd(`<p class="${classPrefix}-uncategorized" style="${noWrap}">${technology.name}</p>`);
    }

    /**
     * 説明のtd要素を生成します。
     * @param {Object} technology その他技術データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createDescriptionTd = technology => {
        return this.createTd(`<p>${technology.description}</p>`);
    }
}

export { UncategorizedTechnologyHelpController };