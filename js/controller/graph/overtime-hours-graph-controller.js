import { OvertimeHoursGraphModel } from "../../model/graph/overtime-hours-graph-model.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * 残業時間グラフのコントローラーを提供します。
 */
class OvertimeHoursGraphController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 対応するモデルをセット
        this.model = new OvertimeHoursGraphModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://cdn.plot.ly/plotly-latest.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {OvertimeHoursGraphController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new OvertimeHoursGraphController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running) {
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * 残業時間グラフの設定を実行します。
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

        // 残業時間の推移を作成
        const actual = createGraphData("実績(h)", this.model.getActual());

        // 残業時間(移動平均)の推移を作成
        const eMA = createGraphData("移動平均(h)", this.model.getEMA());

        // 残業時間(平均)の推移を作成
        const average = createGraphData("月平均(h)", this.model.getAverage());

        // 画面にデータをセット
        const layout = {
            title : "残業時間"
        };
        const data = [ actual, eMA, average ];
        Plotly.newPlot("graph-container", data, layout);
    }
}

export { OvertimeHoursGraphController };