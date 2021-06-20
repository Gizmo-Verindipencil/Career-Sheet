import { Buildable } from "../interface/buildable.min.js";
import { CareerSheetModel } from "../model/career-sheet-model.min.js";
import { Utility } from "../shared/utility.min.js";
import { PageColorAdjuster } from "../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../shared/script-series-loader.min.js";

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
}

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
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
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
     * インスタンスに設定されているPageColorAdjusterを取得します。
     * このインスタンスがbuild以外で作成されている場合、例外を発生させます。
     * @returns {PageColorAdjuster} インスタンスを返します。
     */
    getPageColorAdjuster = () => {
        if (!this.pageColorAdjuster) {
            throw "Error: instance of the class needs to be created with 'build’.";
        }
        return this.pageColorAdjuster;
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

        // 色調整処理のインスタンスを作成
        const adjuster = await PageColorAdjuster.build();

        // 終了管理キーを設定
        adjuster.addKey(Constant.completeExecute);
        controller.urls.forEach(x => adjuster.addKey(x));
        controller.pageColorAdjuster = adjuster;

        return controller;
    }

    /**
     * 職務経歴書の設定を実行します。
     */
    execute = () => {
        // ページを読込してセット
        this.appendPages(this.urls);

        // 色を調整
        const adjuster = this.getPageColorAdjuster();
        adjuster.changeBackgroundColorWhenLastFunctionCall(Constant.completeExecute);

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
                    const content = $(response);
                    $("body").append(content);
                    content.ready(() => {
                        // 色を調整
                        const adjuster = this.getPageColorAdjuster();
                        adjuster.changeBackgroundColorWhenLastFunctionCall(url);
                    });

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