import { createInstance } from "../keyword/create-instance.min.js";
import { Buildable } from "../interface/buildable.min.js";
import { CareerSheetModel } from "../model/career-sheet-model.min.js";
import { ThreadingUtility } from "../shared/utility/threading-utility.min.js";
import { PageColorAdjuster } from "../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../shared/script-series-loader.min.js";

/**
 * 職務経歴書のコントローラーを提供します。
 */
class CareerSheetController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new CareerSheetModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", "jQuery");
        this.scriptLoader.load();

        // 読込対象のコンテンツ一覧を設定
        this.urls = [];
        this.urls.push("core-information.html");
        this.urls.push("work-experience.html");
        this.urls.push("qualification.html");
        this.urls.push("statistics.html");
        this.urls.push("supplementary.html");
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
            await ThreadingUtility.sleep(2000);
        }
        return controller;
    }

    /**
     * 職務経歴書の設定を実行します。
     */
    execute = async() => {
        // ページを読込してセット
        this.appendPages(this.urls);

        // 色を調整
        const adjuster = await createInstance(PageColorAdjuster);
        adjuster.changeBackgroundColor();

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }

    /**
     * ページを読込・追加します。
     */
    appendPages = () => {
        // ページの読込・追加
        const append = () => {
            // 読込対象がなければ終了
            if (this.urls.length === 0) {
                return;
            }

            // ページを読込
            const url = this.urls.shift();
            $.ajax({ 
                type: "GET",   
                url: url,   
                async: true,
                success: response => {
                    // ページを追加
                    $("body").append(response);

                    // 次のページを読込
                    append();
                }
            });
        }

        // 最初の処理を実行
        append();
    }
}

export { CareerSheetController };