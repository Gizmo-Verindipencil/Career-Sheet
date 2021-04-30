import { BeingLateNumberGraphModel } from "../../model/graph/being-late-number-graph-model.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * 遅刻回数グラフのコントローラーを提供します。
 */
class BeingLateNumberGraphController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 対応するモデルをセット
        this.model = new BeingLateNumberGraphModel();

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
        // 遅刻回数の推移を作成
        const actual = this.model.getActual();
        const count = {
            mode: "scatter",
            name: "実績(h)",
            x: actual.map(x => x.yearMonth),
            y: actual.map(x => x.value)
        };

        // 遅刻回数(移動平均)の推移を作成
        const eMA = this.model.getEMA();
        const countEMA = {
            mode : "scatter",
            name : "移動平均(h)",
            x: eMA.map(x => x.yearMonth),
            y: eMA.map(x => x.value)
        };

        // 残業時間(平均)の推移を作成
        const average = this.model.getAverage();
        const countAverage = {
            mode : "scatter",
            name : "月平均(h)",
            x: average.map(x => x.yearMonth),
            y: average.map(x => x.value)
        };

        // 画面にデータをセット
        const layout = {
            title : "遅刻回数"
        };
        const data = [ count, countEMA, countAverage ];
        Plotly.newPlot("graph-container", data, layout);
    }
}

export { BeingLateNumberGraphController };