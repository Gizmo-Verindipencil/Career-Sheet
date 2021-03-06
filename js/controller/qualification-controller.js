import { createInstance } from "../keyword/create-instance.min.js";
import { Buildable } from "../interface/buildable.min.js";
import { QualificationModel } from "../model/qualification-model.min.js";
import { ThreadingUtility } from "../shared/utility/threading-utility.min.js";
import { PageColorAdjuster } from "../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../shared/script-series-loader.min.js";

/**
 * 資格・免許のコントローラーを提供します。
 */
class QualificationController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new QualificationModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", "jQuery");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {QualificationController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new QualificationController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await ThreadingUtility.sleep(2000);
        }
        return controller;
    }
    
    /**
     * 資格・免許の設定を実行します。
     */
    execute = async() => {
        // 資格データを取得
        const qualifications = this.model.getQualifications();

        for (const qualification of qualifications) {
            $("div#qualification").append(`<p>${qualification.name} ${qualification.score}</p>`);
        }

        // 色を調整
        const adjuster = await createInstance(PageColorAdjuster);
        adjuster.changeBackgroundColor();
    }
}

export { QualificationController };