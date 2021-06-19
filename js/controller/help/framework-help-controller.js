import { Buildable } from "../../interface/buildable.min.js";
import { FrameworkHelpModel } from "../../model/help/framework-help-model.min.js";
import { Utility } from "../../shared/utility.min.js";
import { PageColorAdjuster } from "../../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.min.js";
import StylesheetSeriesLoader from "../../shared/stylesheet-series-loader.min.js";

/**
 * ヘルプ(フレームワーク)のコントローラーを提供します。
 */
class FrameworkHelpController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new FrameworkHelpModel();

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
     * @returns {FrameworkHelpController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new FrameworkHelpController();

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
        // フレームワークデータを取得
        const frameworks = this.model.getFrameworks();

        // データ毎の処理
        for (let i = 0; i < frameworks.length;  i++) {
            const framework = frameworks[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createNameTd(framework));
            cells.push(this.createDescriptionTd(framework));

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
     * @param {Object} framework フレームワークデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNameTd = framework => {
        const classPrefix = "work-experience-technology";
        const noWrap = "white-space:nowrap;";
        return this.createTd(`<p class="${classPrefix}-framework" style="${noWrap}">${framework.name}</p>`);
    }

    /**
     * 説明のtd要素を生成します。
     * @param {Object} framework フレームワークデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createDescriptionTd = framework => {
        return this.createTd(`<p>${framework.description}</p>`);
    }
}

export { FrameworkHelpController };