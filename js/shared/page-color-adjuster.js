import { SeasonReminder } from "../vendor/season-reminder.min.js";

/**
 * ページの色調整を提供します。
 */
class PageColorAdjuster {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 処理の終了管理を設定
        this.termination = {};
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
    changeBackgroundColor = async() => {
        const reminder = new SeasonReminder();
        reminder.seasonEffect = 10;
        reminder.maxNumberOfReminding = 1;
        const ignore = Array.from(document.getElementsByClassName("preloader-section"));
        reminder.remindAll("background-color", ignore);
    }
}

export { PageColorAdjuster };