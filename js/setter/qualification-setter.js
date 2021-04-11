import { QualificationRepository } from "../repository/qualification-repository.js";
import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js"

/**
 * 資格・免許の設定処理を提供します。
 */
class QualificationSetter {
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
     * @returns {QualificationSetter} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new QualificationSetter();

        // スクリプトの読込完了後にインスタンスを返す
        while(setter.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return setter;
    }
    
    /**
     * 資格・免許の設定を実行します。
     */
    execute = () => {
        // 資格データを取得
        const repository = new QualificationRepository();
        const qualifications = repository.getAll();

        for (const qualification of qualifications) {
            $("div#qualification").append(`<p>${qualification.name} ${qualification.score}</p>`);
        }
    }
}

export { QualificationSetter };