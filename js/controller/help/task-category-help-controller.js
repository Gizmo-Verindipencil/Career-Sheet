import { createInstance } from "../../keyword/create-instance.min.js";
import { Buildable } from "../../interface/buildable.min.js";
import { TaskCategoryHelpModel } from "../../model/help/task-category-help-model.min.js";
import { ThreadingUtility } from "../../shared/utility/threading-utility.min.js";
import { PageColorAdjuster } from "../../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.min.js";
import StylesheetSeriesLoader from "../../shared/stylesheet-series-loader.min.js";

/**
 * ヘルプ(作業カテゴリ)のコントローラーを提供します。
 */
class TaskCategoryHelpController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new TaskCategoryHelpModel();

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
     * @returns {TaskCategoryHelpController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new TaskCategoryHelpController();

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
        // 作業カテゴリデータを取得
        const categories = this.model.getTaskCategories();

        // ソート順で並べる
        categories.sort((a, b) => {
            return a.sort > b.sort ? 1 : -1;
        });

        // データ毎の処理
        for (let i = 0; i < categories.length;  i++) {
            const category = categories[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createCodeTd(category));
            cells.push(this.createNamesTd(category));
            cells.push(this.createDescriptionTd(category));
            cells.push(this.createChildTaskTd(category));

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
     * @param {Object} category 作業カテゴリデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createCodeTd = category => {
        return this.createTd(`<p>${category.id}</p>`);
    }

    /**
     * 名称(日本語/英語)のtd要素を生成します。
     * @param {Object} category 作業カテゴリデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNamesTd = category => {
        const noWrap = "white-space:nowrap;";
        const tds = [];
        tds.push(this.createTd(`<p style='${noWrap}'>${category.name.ja}</p>`));
        tds.push(this.createTd(`<p style='${noWrap}'>${category.name.en}</p>`));
        return tds.join("");
    }

    /**
     * 説明のtd要素を生成します。
     * @param {Object} category 作業カテゴリデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createDescriptionTd = category => {
        return this.createTd(`<p>${category.description}</p>`);
    }

    /**
     * 所属作業のtd要素を生成します。
     * @param {Object} category 作業カテゴリデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createChildTaskTd = category => {
        // 作業データを取得
        const types = this.model.getTaskTypesByCategoryId(category.id);

        // カテゴリに属する作業データを並べる
        const displayTypes = [];
        for(let type of types) {
            // 作業テーマを反映
            const theme = this.model.getTaskThemeById(type.themeId);
            const styles = [];
            styles.push(theme ? `color:${theme.foreColor}` : "");
            styles.push(theme ? `background-color:${theme.backgroundColor}` : "");

            // 要素を生成して追加
            const className = "work-experience-task-type-colorless";
            const p = `<p class='${className}' style='${styles.join(";")}'>${type.id}</p>`;
            displayTypes.push(p);
        }
        return this.createTd(displayTypes.join(""));
    }
}

export { TaskCategoryHelpController };