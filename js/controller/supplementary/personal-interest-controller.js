import { PersonalInterestModel } from "../../model/supplementary/personal-interest-model.min.js";
import { Utility } from "../../shared/utility.min.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.min.js"

/**
 * 個人的な関心ページのコントローラーを提供します。
 */
class PersonalInterestController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 対応するモデルをセット
        this.model = new PersonalInterestModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("js/vendor/season-reminder.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {PersonalInterestController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new PersonalInterestController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * 個人的な関心ページの設定を実行します。
     */
    execute = () => {
        // 色を調整
        this.changeBackgroundColor();

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }

    /**
     * 背景色を季節を反映した内容に変える。
     */
    changeBackgroundColor = () => {
        const reminder = new SeasonReminder();
        reminder.seasonInfluence = 10;
        reminder.remindAll("background-color");
    }
}

export { PersonalInterestController };