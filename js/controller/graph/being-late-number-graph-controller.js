import { WorkingHoursRepository } from "../../repository/working-hours-repository.js";
import { Utility } from "../../shared/utility.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * 遅刻回数グラフの設定処理を提供します。
 */
class BeingLateNumberGraphController {
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
     * @returns {BeingLateNumberGraphController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new BeingLateNumberGraphController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running) {
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * 遅刻回数グラフの設定を実行します。
     */
    execute = () => {
        // 遅刻回数データを取得
        const repository = new WorkingHoursRepository();
        const records = repository.getAll();

        // 遅刻回数の推移を作成
        const paidLeave = {
            mode: "scatter",
            name: "実績",
            x: records.map(x => `${x.year}-${x.month}`),
            y: records.map(x => x.beingLate.count)
        };

        // 遅刻回数(移動平均)の推移を作成
        const eMAPaidLeave = {
            mode : "scatter",
            name : "移動平均",
            x: records.map(x => `${x.year}-${x.month}`),
            y: Utility.calculateEMA(records.map(x => x.beingLate.count), 12)
        };

        // 残業時間(平均)の推移を作成
        const average = Utility.calculateAverage(records.map(x => x.beingLate.count));
        const averagePaidLeave = {
            mode : "scatter",
            name : "月平均",
            x: records.map(x => `${x.year}-${x.month}`),
            y: records.map(x => average)
        };

        // 画面にデータをセット
        const layout = {
            title : "遅刻回数"
        };
        const data = [ paidLeave, eMAPaidLeave, averagePaidLeave ];
        Plotly.newPlot("graph-container", data, layout);
    }
}

export { BeingLateNumberGraphController };