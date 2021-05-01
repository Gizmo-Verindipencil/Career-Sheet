import { CareerSheetModel } from "../model/career-sheet-model.js";
import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js"

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
        urls.push("core-info.html");
        urls.push("work-experience.html");
        urls.push("qualification.html");
        urls.push("statistics.html");
        urls.push("supplementary.html");
        this.appendPages(urls);
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
                success : function(response)
                {
                    // ページを追加
                    $("body").append(response);

                    // 次のページを読込
                    append();
                }
            });
        }
        append();
    } 
}

export { CareerSheetController };