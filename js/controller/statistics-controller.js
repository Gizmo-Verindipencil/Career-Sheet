import { createInstance } from "../keyword/create-instance.min.js";
import { StatisticsModel } from "../model/statistics-model.min.js";
import { PageColorAdjuster } from "../shared/page-color-adjuster.min.js";
import { Buildable } from "../interface/buildable.min.js";
import ScriptSeriesLoader from "../shared/script-series-loader.min.js";

/**
 * 統計のコントローラーを提供します。
 */
class StatisticsController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new StatisticsModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {StatisticsController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new StatisticsController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * 統計の関心ページの設定を実行します。
     */
    execute = async() => {
        // 色を調整
        const adjuster = await createInstance(PageColorAdjuster);
        adjuster.changeBackgroundColor();

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }
}

export { StatisticsController };