import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js"

/**
 * 職務経歴書の設定処理を提供します。
 */
class CareerSheetSetter {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {CareerSheetSetter} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new CareerSheetSetter();

        // スクリプトの読込完了後にインスタンスを返す
        while(setter.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return setter;
    }

    /**
     * 職務経歴書の設定を実行します。
     */
    execute = () => {
        // 画面にデータをセット
        this.appendPage("core-info.html");
        this.appendPage("work-experience.html");
        this.appendPage("qualification.html");
        this.appendPage("statistics.html");
    }

    /**
     * ページを読込・追加します。
     * @param {String} url 読込ページ。
     */
    appendPage = url => {
        let response;
        $.ajax({ 
            type: "GET",   
            url: url,   
            async: false,
            success : function(text)
            {
                response= text;
            }
        });
        $("body").append(response);
    } 
}

export { CareerSheetSetter };