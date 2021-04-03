import { DeviceRepository } from "../../repository/device-repository.js";
import { Utility } from "../../shared/utility.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * ヘルプ(機種)の設定処理を提供します。
 */
class DeviceHelpSetter {
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
     * @returns {DeviceHelpSetter} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new DeviceHelpSetter();

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
        // 機種データを取得
        const repository = new DeviceRepository();
        const devices = repository.getAll();

        // 名前の昇順で並べる
        devices.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });

        // データ毎の処理
        for (let i = 0; i < devices.length;  i++) {
            const device = devices[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createNameTd(device));
            cells.push(this.createDescriptionTd(device));

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
     * @param {Object} device 機種データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createNameTd = device => {
        const classPrefix = "work-experience-technology";
        const noWrap = "white-space:nowrap;";
        return this.createTd(`<p class="${classPrefix}-device" style="${noWrap}">${device.name}</p>`);
    }

    /**
     * 説明のtd要素を生成します。
     * @param {Object} device 機種データ。
     * @return {String} td要素を表すhtml
     */
    createDescriptionTd = device => {
        return this.createTd(`<p>${device.description}</p>`);
    }
}

export { DeviceHelpSetter };