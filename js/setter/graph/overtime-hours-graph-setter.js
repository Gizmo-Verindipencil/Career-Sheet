import { WorkingHoursRepository } from "../../repository/working-hours-repository.js";
import { Utility } from "../../shared/utility.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * 残業時間グラフの設定処理を提供します。
 */
class OvertimeHoursGraphSetter {
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
     * @returns {OvertimeHoursGraphSetter} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new OvertimeHoursGraphSetter();

        // スクリプトの読込完了後にインスタンスを返す
        while(setter.scriptLoader.running) {
            await Utility.sleep(2000);
        }
        return setter;
    }

    /**
     * 残業時間グラフの設定を実行します。
     */
    execute = () => {
        // 残業時間データを取得
        const repository = new WorkingHoursRepository();
        const records = repository.getAll();

        // 残業時間の推移を作成
        const overtimeHours = {
            mode: "scatter",
            name: "実績(h)",
            x: records.map(x => `${x.year}-${x.month}`),
            y: records.map(x => x.overtimeHours)
        };

        // 残業時間(移動平均)の推移を作成
        const eMAOvertimeHours = {
            mode : "scatter",
            name : "移動平均(h)",
            x: records.map(x => `${x.year}-${x.month}`),
            y: Utility.calculateEMA(records.map(x => x.overtimeHours), 12)
        };

        // 残業時間(平均)の推移を作成
        const getAverageArray = array => {
            // 合計を算出
            const total = array.reduce((sum, number) => {
                return Number(sum) + Number(number);
            });

            // 平均を算出
            const average = total / array.length;

            // 元配列と同じ要素数の配列で返す
            return array.map(x => average);
        };
        const averageOvertimeHours = {
            mode : "scatter",
            name : "全体平均(h)",
            x: records.map(x => `${x.year}-${x.month}`),
            y: getAverageArray(records.map(x => x.overtimeHours))
        };

        // 画面にデータをセット
        const layout = {
            title : "残業時間"
        };
        const data = [ overtimeHours, eMAOvertimeHours, averageOvertimeHours ];
        Plotly.newPlot("graph-container", data);
    }
}

export { OvertimeHoursGraphSetter };