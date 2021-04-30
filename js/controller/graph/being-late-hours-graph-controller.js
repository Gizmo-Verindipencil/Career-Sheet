import { BeingLateHoursGraphModel } from "../../model/graph/being-late-hours-graph-model.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * 遅刻時間グラフのコントローラーを提供します。
 */
class BeingLateHoursGraphController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 対応するモデルをセット
        this.model = new BeingLateHoursGraphModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://cdn.plot.ly/plotly-latest.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {BeingLateHoursGraphController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new BeingLateHoursGraphController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running) {
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * 遅刻時間グラフの設定を実行します。
     */
    execute = () => {
        // グラフ用データの作成処理
        const createGraphData = (name, data) => {
            return {
                mode: "scatter",
                name: name,
                x: data.map(x => x.yearMonth),
                y: data.map(x => x.value)
            };
        }

        // 遅刻時間の推移を作成
        const actual = createGraphData("実績(h)", this.model.getActual());

        // 遅刻時間(移動平均)の推移を作成
        const eMA = createGraphData("移動平均(h)", this.model.getEMA());

        // 残業時間(平均)の推移を作成
        const average = createGraphData("月平均(h)", this.model.getAverage());

        // 画面にデータをセット
        const layout = {
            title : "遅刻時間"
        };
        const data = [ actual, eMA, average ];
        Plotly.newPlot("graph-container", data, layout);
    }
}

export { BeingLateHoursGraphController };