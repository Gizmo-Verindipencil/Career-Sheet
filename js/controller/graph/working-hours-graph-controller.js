import { WorkingHoursRepository } from "../../repository/working-hours-repository.js";
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
        // 勤務時間データを取得
        const repository = new WorkingHoursRepository();
        const records = repository.getAll();

        // 実働時間の推移を作成
        const actualWorkingHours = {
            mode: "scatter",
            name: "実績(h)",
            line: {
                color: "rgb(255,0,0)"
            },
            x: records.map(x => `${x.year}-${x.month}`),
            y: records.map(x => x.actualWorkingHours)
        };

        // 実働時間(移動平均)の推移を作成
        const eMAActualWorkingHours = {
            mode : "scatter",
            name : "実働移動平均(h)",
            line: {
                color: "rgb(255,130,130)"
            },
            x: records.map(x => `${x.year}-${x.month}`),
            y: Utility.calculateEMA(records.map(x => x.actualWorkingHours), 12)
        };

        // 実働時間(平均)の推移を作成
        const averageForAct = Utility.calculateAverage(records.map(x => x.actualWorkingHours));
        const averageActualWorkingHours = {
            mode : "scatter",
            name : "実働全体平均(h)",
            line: {
                color: "rgb(255,160,160)"
            },
            x: records.map(x => `${x.year}-${x.month}`),
            y: records.map(x => averageForAct)
        };

        // 計画時間の推移を作成
        const prescribedWorkingHours = {
            mode: "scatter",
            name: "計画(h)",
            line: {
                color: "rgb(0,0,255)"
            },
            x: records.map(x => `${x.year}-${x.month}`),
            y: records.map(x => x.prescribedWorkingHours)
        }

        // 計画時間(移動平均)の推移を作成
        const eMAPrescribedWorkingHours = {
            mode : "scatter",
            name : "計画移動平均(h)",
            line: {
                color: "rgb(130,130,255)"
            },
            x: records.map(x => `${x.year}-${x.month}`),
            y: Utility.calculateEMA(records.map(x => x.prescribedWorkingHours), 12)
        };

        // 計画時間(平均)の推移を作成
        const averageForPrescription = Utility.calculateAverage(records.map(x => x.prescribedWorkingHours));
        const averagePrescribedWorkingHours = {
            mode : "scatter",
            name : "計画全体平均(h)",
            line: {
                color: "rgb(160,160,255)"
            },
            x: records.map(x => `${x.year}-${x.month}`),
            y: records.map(x => averageForPrescription)
        };

        // 画面にデータをセット
        const layout = {
            title : "実働/計画時間"
        };
        const data = [ 
            actualWorkingHours, 
            eMAActualWorkingHours,
            averageActualWorkingHours,
            prescribedWorkingHours,
            eMAPrescribedWorkingHours,
            averagePrescribedWorkingHours
        ];
        Plotly.newPlot("graph-container", data, layout);
    }
}

export { WorkingHoursGraphController };