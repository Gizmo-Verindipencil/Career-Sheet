import { WorkingHoursGraphModel } from "../../model/graph/working-hours-graph-model.js";
import { Utility } from "../../shared/utility.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * 実働時間グラフの設定処理を提供します。
 */
class WorkingHoursGraphController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 対応するモデルをセット
        this.model = new WorkingHoursGraphModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://cdn.plot.ly/plotly-latest.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {WorkingHoursGraphController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new WorkingHoursGraphController();

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
        // 実働時間の推移を作成
        const actual = this.model.getActual();
        const actualWorkingHours = {
            mode: "scatter",
            name: "実績(h)",
            line: {
                color: "rgb(255,0,0)"
            },
            x: actual.map(x => x.yearMonth),
            y: actual.map(x => x.value)
        };

        // 実働時間(移動平均)の推移を作成
        const actualEMA = this.model.getActualEMA();
        const actualWorkingHoursEMA = {
            mode : "scatter",
            name : "実働移動平均(h)",
            line: {
                color: "rgb(255,130,130)"
            },
            x: actualEMA.map(x => x.yearMonth),
            y: actualEMA.map(x => x.value)
        };

        // 実働時間(平均)の推移を作成
        const actualAverage = this.model.getActualAverage();
        const actualWorkingHoursAverage = {
            mode : "scatter",
            name : "実働全体平均(h)",
            line: {
                color: "rgb(255,160,160)"
            },
            x: actualAverage.map(x => x.yearMonth),
            y: actualAverage.map(x => x.value)
        };

        // 計画時間の推移を作成
        const prescribed = this.model.getPrescribed();
        const prescribedWorkingHours = {
            mode: "scatter",
            name: "計画(h)",
            line: {
                color: "rgb(0,0,255)"
            },
            x: prescribed.map(x => x.yearMonth),
            y: prescribed.map(x => x.value)
        }

        // 計画時間(移動平均)の推移を作成
        const prescribedEMA = this.model.getPrescribedEMA();
        const prescribedWorkingHoursEMA = {
            mode : "scatter",
            name : "計画移動平均(h)",
            line: {
                color: "rgb(130,130,255)"
            },
            x: prescribedEMA.map(x => x.yearMonth),
            y: prescribedEMA.map(x => x.value)
        };

        // 計画時間(平均)の推移を作成
        const prescribedAverage = this.model.getPrescribedAverage();
        const prescribedWorkingHoursAverage = {
            mode : "scatter",
            name : "計画全体平均(h)",
            line: {
                color: "rgb(160,160,255)"
            },
            x: prescribedAverage.map(x => x.yearMonth),
            y: prescribedAverage.map(x => x.value)
        };

        // 画面にデータをセット
        const layout = {
            title : "実働/計画時間"
        };
        const data = [ 
            actualWorkingHours, 
            actualWorkingHoursEMA,
            actualWorkingHoursAverage,
            prescribedWorkingHours,
            prescribedWorkingHoursEMA,
            prescribedWorkingHoursAverage
        ];
        Plotly.newPlot("graph-container", data, layout);
    }
}

export { WorkingHoursGraphController };