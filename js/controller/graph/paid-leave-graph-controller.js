import { WorkingHoursRepository } from "../../repository/working-hours-repository.js";
import { Utility } from "../../shared/utility.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * 有給休暇グラフの設定処理を提供します。
 */
class PaidLeaveGraphController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://cdn.plot.ly/plotly-latest.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {PaidLeaveGraphController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new PaidLeaveGraphController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running) {
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * 有給休暇グラフの設定を実行します。
     */
    execute = () => {
        // 有給休暇データを取得
        const repository = new WorkingHoursRepository();
        const records = repository.getAll();

        // 有給休暇の推移を作成
        const paidLeave = {
            mode: "scatter",
            name: "実績",
            x: records.map(x => `${x.year}-${x.month}`),
            y: records.map(x => x.paidLeave)
        };

        // 画面にデータをセット
        const layout = {
            title : "有給休暇"
        };
        const data = [ paidLeave ];
        Plotly.newPlot("graph-container", data, layout);
    }
}

export { PaidLeaveGraphController };