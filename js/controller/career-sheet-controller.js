import { CareerSheetModel } from "../model/career-sheet-model.min.js";
import { Utility } from "../shared/utility.min.js";
import ScriptSeriesLoader from "../shared/script-series-loader.min.js"

/**
 * 定数を提供します。
 */
 class Constant {
    /**
     * 実行処理の終了管理キーを取得します。
     */
    static get completeExecute() {
        return "execute";
    }

    /**
     * コンテンツページ読込処理の終了管理キーを取得します。
     */
    static get completeLoadContents() {
        return "load_contents";
    }
}

/**
 * 職務経歴書のコントローラーを提供します。
 */
class CareerSheetController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 対応するモデルをセット
        this.model = new CareerSheetModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.scriptLoader.add("js/vendor/season-reminder.min.js");
        this.scriptLoader.load();

        // 最後に行う処理の為の終了管理を設定
        this.complete = {};
        this.complete[Constant.completeExecute] = false;
        this.complete[Constant.completeLoadContents] = false;

        // 読込対象のコンテンツ一覧を設定
        this.urls = [];
        this.urls.push("core-information.html");
        this.urls.push("work-experience.html");
        this.urls.push("qualification.html");
        this.urls.push("statistics.html");
        this.urls.push("supplementary.html");

        // ページの読込完了状況を終了管理に追加
        for(const url of this.urls) {
            this.complete[url] = false;
        }
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {CareerSheetController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new CareerSheetController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * 職務経歴書の設定を実行します。
     */
    execute = () => {
        // ページを読込してセット
        this.appendPages(this.urls);

        // 色を調整
        this.changeBackgroundColor(Constant.completeExecute);

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }

    /**
     * ページを読込・追加します。
     * @param {Array<String>} urls 読込ページ。
     */
    appendPages = urls => {
        // ページの読込・追加
        const append = () => {
            // 読込対象がなければ終了
            if (urls.length === 0) {
                return;
            }

            // ページを読込
            const url = urls.shift();
            $.ajax({ 
                type: "GET",   
                url: url,   
                async: true,
                success : response => {
                    // ページを追加
                    const content = $(response);
                    $("body").append(content);
                    content.ready(() => {
                        // 色を調整
                        this.changeBackgroundColor(url);
                    });

                    // 次のページを読込
                    append();
                }
            });
        }

        // 最初の処理を実行
        append();
    } 

    /**
     * 背景色を季節を反映した内容に変えます。
     * @param {String} key 終了管理キー。
     */
    changeBackgroundColor = key => {
        // 処理完了を記録
        this.complete[key] = true;

        // コンテンツページの読込完了を判定
        if (!this.complete[Constant.completeLoadContents] 
            && this.urls.every(x => this.complete[x])) {
            this.complete[Constant.completeLoadContents] = true;
        }

        // 全処理が完了していなければ後続処理を行わない
        for(const name in this.complete) {
            if (!this.complete[name]) return;
        }

        // 色を調整
        const reminder = new SeasonReminder();
        reminder.seasonInfluence = 10;
        const ignore = Array.from(document.getElementsByClassName("preloader-section"));
        reminder.remindAll("background-color", ignore);
    }
}

export { CareerSheetController };