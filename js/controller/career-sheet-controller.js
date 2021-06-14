import { CareerSheetModel } from "../model/career-sheet-model.min.js";
import { Utility } from "../shared/utility.min.js";
import ScriptSeriesLoader from "../shared/script-series-loader.min.js"

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
        const urls = [];
        urls.push("core-information.html");
        urls.push("work-experience.html");
        urls.push("qualification.html");
        urls.push("statistics.html");
        urls.push("supplementary.html");
        this.appendPages(urls);

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }

    /**
     * ページを読込・追加します。
     * @param {Array<String>} urls 読込ページ。
     */
    appendPages = urls => {
        // ページの読込完了状況
        const loadComplete = {};
        for(const url of urls) {
            loadComplete[url] = false;
        }

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
                            // 読込完了を記録
                            loadComplete[url] = true;
    
                            // 全ページの読込が完了していなければ後続処理を行わない
                            for(const name in loadComplete) {
                                if (!loadComplete[name]) return;
                            }

                            // 色を調整
                            this.changeBackgroundColor();
                        }
                    );

                    // 次のページを読込
                    append();
                }
            });
        }

        // 最初の処理を実行
        append();
    } 

    /**
     * 背景色を季節を反映した内容に変える。
     */
    changeBackgroundColor = () => {
        const reminder = new SeasonReminder();
        reminder.seasonInfluence = 10;
        const ignore = Array.from(document.getElementsByClassName("preloader-section"));
        reminder.remindAll("background-color", ignore);
    }
}

export { CareerSheetController };