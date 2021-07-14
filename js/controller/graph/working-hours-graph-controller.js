import { createInstance } from "../../keyword/create-instance.min.js";
import { Buildable } from "../../interface/buildable.min.js";
import { WorkingHoursGraphModel } from "../../model/graph/working-hours-graph-model.min.js";
import { Utility } from "../../shared/utility.min.js";
import { PageColorAdjuster } from "../../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.min.js";

/**
 * 実働時間グラフのコントローラーを提供します。
 */
class WorkingHoursGraphController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new WorkingHoursGraphModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://cdn.plot.ly/plotly-latest.min.js", "Plotly");
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
    execute = async() => {
        // グラフ用データの作成処理
        const createGraphData = (name, color, data) => {
            return {
                mode: "scatter",
                name: name,
                line: {
                    color: color
                },
                x: data.map(x => x.yearMonth),
                y: data.map(x => x.value)
            };
        }

        // 実働時間の推移を作成
        const actual = createGraphData("実績(h)", "rgb(255,0,0)", this.model.getActual());

        // 実働時間(移動平均)の推移を作成
        const actualEMA = createGraphData("実働移動平均(h)", "rgb(255,130,130)", this.model.getActualEMA());

        // 実働時間(平均)の推移を作成
        const actualAverage = createGraphData("実働全体平均(h)", "rgb(255,160,160)", this.model.getActualAverage());

        // 計画時間の推移を作成
        const prescribed = createGraphData("計画(h)", "rgb(0,0,255)", this.model.getPrescribed());

        // 計画時間(移動平均)の推移を作成
        const prescribedEMA = createGraphData("計画移動平均(h)", "rgb(130,130,255)", this.model.getPrescribedEMA());

        // 計画時間(平均)の推移を作成
        const prescribedAverage = createGraphData("計画全体平均(h)", "rgb(160,160,255)", this.model.getPrescribedAverage());

        // 画面にデータをセット
        const layout = {
            title : "実働/計画時間"
        };
        const data = [ 
            actual, 
            actualEMA,
            actualAverage,
            prescribed,
            prescribedEMA,
            prescribedAverage
        ];
        Plotly.newPlot("graph-container", data, layout);

        // 色を調整
        const ignore = Array.from(document.getElementsByClassName("main-svg"));
        const adjuster = await createInstance(PageColorAdjuster);
        adjuster.changeBackgroundColor(ignore);

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }
}

export { WorkingHoursGraphController };