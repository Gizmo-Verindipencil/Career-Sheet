import { createInstance } from "../../keyword/create-instance.min.js";
import { Buildable } from "../../interface/buildable.min.js";
import { ProgrammingLanguageExperienceGraphModel } from "../../model/graph/programming-language-experience-graph-model.min.js";
import { Utility } from "../../shared/utility.min.js";
import { PageColorAdjuster } from "../../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.min.js";

/**
 * プログラミング言語経験グラフのコントローラーを提供します。
 */
class ProgrammingLanguageExperienceGraphController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new ProgrammingLanguageExperienceGraphModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://cdn.plot.ly/plotly-latest.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {ProgrammingLanguageExperienceGraphController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new ProgrammingLanguageExperienceGraphController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running) {
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * プログラミング言語経験グラフの設定を実行します。
     */
    execute = async() => {
        // プログラミング言語経験の日数集計を取得
        const model = new ProgrammingLanguageExperienceGraphModel();
        const language = model.getProgrammingLanguageExperience();
        
        // 連想配列を配列に変換
        const converted = [];
        for(const name in language) {
            converted.push({
                label: name,
                value: language[name]
            });
        }
        
        // 経験日数の降順でソート
        converted.sort((a, b) => {
            return  b.value - a.value;
        });

        // グラフデータを作成
        const data = [{
            values: converted.map(x => x.value),
            labels: converted.map(x => x.label),
            type: "pie"
        }];

        // 画面にデータをセット
        const layout = {
            title : "プログラミング言語経験"
        };
        Plotly.newPlot("graph-container", data, layout);

        // 色を調整
        const adjuster = await createInstance(PageColorAdjuster);
        adjuster.changeBackgroundColor();

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }
}

export { ProgrammingLanguageExperienceGraphController };