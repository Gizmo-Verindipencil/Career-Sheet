import { createInstance } from "../keyword/create-instance.min.js";
import { SupplementaryModel } from "../model/supplementary-model.min.js";
import { PageColorAdjuster } from "../shared/page-color-adjuster.min.js";
import { Buildable } from "../interface/buildable.min.js";
import ScriptSeriesLoader from "../shared/script-series-loader.min.js";

/**
 * 補足資料のコントローラーを提供します。
 */
class SupplementaryController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new SupplementaryModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {SupplementaryController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new SupplementaryController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * 補足資料の設定を実行します。
     */
    execute = async() => {
        // 色を調整
        const adjuster = await createInstance(PageColorAdjuster);
        adjuster.changeBackgroundColor();

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }
}

export { SupplementaryController };