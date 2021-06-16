import { PaidLeaveGraphModel } from "../../model/graph/paid-leave-graph-model.min.js";
import { Utility } from "../../shared/utility.min.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.min.js";

/**
 * 有給休暇グラフのコントローラーを提供します。
 */
class PaidLeaveGraphController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 対応するモデルをセット
        this.model = new PaidLeaveGraphModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://cdn.plot.ly/plotly-latest.min.js");
        this.scriptLoader.add("js/vendor/season-reminder.min.js");
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
        // 有給休暇の推移を作成
        const actual = this.model.getActual();
        const paidLeave = {
            mode: "scatter",
            name: "実績",
            x: actual.map(x => x.yearMonth),
            y: actual.map(x => x.value)
        };

        // 画面にデータをセット
        const layout = {
            title : "有給休暇"
        };
        const data = [ paidLeave ];
        Plotly.newPlot("graph-container", data, layout);

        // 色を調整
        this.changeBackgroundColor();

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }

    /**
     * 背景色を季節を反映した内容に変えます。
     */
    changeBackgroundColor = () => {
        const reminder = new SeasonReminder();
        reminder.seasonInfluence = 10;
        const ignore = Array.from(document.getElementsByClassName("preloader-section"));
        reminder.remindAll("background-color", ignore);
    }
}

export { PaidLeaveGraphController };