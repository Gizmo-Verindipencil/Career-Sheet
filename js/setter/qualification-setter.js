import { QualificationRepository } from "../repository/qualification-repository.js";
import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js"

/**
 * 資格・免許のセッター
 */
class QualificationSetter {
    /**
     * コンストラクタ
     */
    constructor() {
        // 必要なソースを読込
        this.loader = ScriptSeriesLoader;
        this.loader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.loader.load();
    }

    /**
     * インスタンスの生成
     * @returns {QualificationSetter} 新しいインスタンス
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new QualificationSetter();

        // スクリプトの読込完了後にインスタンスを返す
        while(setter.loader.running){
            await Utility.sleep(2000);
        }
        return setter;
    }
    
    /**
     * セット処理の実行
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