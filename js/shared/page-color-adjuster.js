import { Utility } from "../shared/utility.min.js";
import ScriptSeriesLoader from "../shared/script-series-loader.min.js";

/**
 * ページの色調整を提供します。
 */
class PageColorAdjuster {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("js/vendor/season-reminder.min.js");
        this.scriptLoader.load();

        // 処理の終了管理を設定
        this.termination = {};
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {PageColorAdjuster} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const adjuster = new PageColorAdjuster();

        // スクリプトの読込完了後にインスタンスを返す
        while(adjuster.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return adjuster;
    }

    /**
     * 呼出キーを追加します。
     * @param {String} key 呼出キー。
     */
    addKey = key => {
        // 既に存在するキーの場合はエラー
        if (this.termination[key]) {
            throw "Error: the key already exists.";
        }

        // 終了状況を初期化
        this.termination[key] = false;
    }

    /**
     * 背景色を季節を反映した内容に変えます。複数回の呼出の内、最後の呼出時のみ実行されます。
     * 処理の呼出は、事前に addKey で登録された内容に対応します。
     * @param {String} key 呼出キー。
     */
    changeBackgroundColorWhenLastFunctionCall = key => {
        // 事前に登録されていないキーの場合はエラー
        if (this.termination[key]) {
            throw "Error: the key is unknown.";
        }

        // 処理完了を記録
        this.termination[key] = true;

        // 全処理が完了していなければ終了
        for(const name in this.termination) {
            if (!this.termination[name]) return;
        }

        // 色を調整
        this.changeBackgroundColor();
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

export { PageColorAdjuster };