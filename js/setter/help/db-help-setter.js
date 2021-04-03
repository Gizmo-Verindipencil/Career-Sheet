import { DbRepository } from "../../repository/db-repository.js";
import { Utility } from "../../shared/utility.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * ヘルプ(データベース)の設定処理を提供します。
 */
class DbHelpSetter {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 必要なソースを読込
        this.loader = ScriptSeriesLoader;
        this.loader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.loader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {DbHelpSetter} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new DbHelpSetter();

        // スクリプトの読込完了後にインスタンスを返す
        while(setter.loader.running){
            await Utility.sleep(2000);
        }
        return setter;
    }

    /**
     * ヘルプの設定を実行します。
     */
    execute = () => {
        // DBデータを取得
        const repository = new DbRepository();
        const dbs = repository.getAll();

        // 名前の昇順で並べる
        dbs.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });

        // データ毎の処理
        for (let i = 0; i < dbs.length;  i++) {
            const db = dbs[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createNameTd(db));
            cells.push(this.createDescriptionTd(db));

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
     * @param {Object} db DBデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNameTd = db => {
        const classPrefix = "work-experience-technology";
        const noWrap = "white-space:nowrap;";
        return this.createTd(`<p class="${classPrefix}-db" style="${noWrap}">${db.name}</p>`);
    }

    /**
     * 説明のtd要素を生成します。
     * @param {Object} db DBデータ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createDescriptionTd = db => {
        return this.createTd(`<p>${db.description}</p>`);
    }
}

export { DbHelpSetter };