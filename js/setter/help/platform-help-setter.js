import { PlatformRepository } from "../../repository/platform-repository.js";
import { Utility } from "../../shared/utility.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js";
import StylesheetSeriesLoader from "../shared/stylesheet-series-loader.js";

/**
 * ヘルプ(プラットフォーム)の設定処理を提供します。
 */
class PlatformHelpSetter {
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
     * @returns {PlatformHelpSetter} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new PlatformHelpSetter();

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
        // プラットフォームデータを取得
        const repository = new PlatformRepository();
        const platforms = repository.getAll();

        // 名前の昇順で並べる
        platforms.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });

        // データ毎の処理
        for (let i = 0; i < platforms.length;  i++) {
            const platform = platforms[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createNameTd(platform));
            cells.push(this.createDescriptionTd(platform));

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
     * @param {Object} platform プラットフォームデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNameTd = platform => {
        const classPrefix = "work-experience-technology";
        const noWrap = "white-space:nowrap;";
        return this.createTd(`<p class="${classPrefix}-platform" style="${noWrap}">${platform.name}</p>`);
    }

    /**
     * 説明のtd要素を生成します。
     * @param {Object} platform プラットフォームデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createDescriptionTd = platform => {
        return this.createTd(`<p>${platform.description}</p>`);
    }
}

export { PlatformHelpSetter };