import { WorkExperienceRepository } from "../repository/work-experience-repository.js";
import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js"

/**
 * 経歴(詳細)のセッター
 */
class WorkExperienceReportDetailSetter {
    /**
     * コンストラクタ
     * @param {Object} dataList 経歴データ
     */
    constructor(data) {
        // 必要なソースを読込
        this.loader = ScriptSeriesLoader;
        this.loader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.loader.load();

        // 反映内容のセット
        this.data = data;
    }

    /**
     * インスタンスの生成
     * @returns 新しいインスタンス
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new WorkExperienceReportDetailSetter();

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
        // 職務経歴データを取得
        const repository = new WorkExperienceRepository();
        const params = new URLSearchParams(document.location.search.substring(1));
        const no = params.get("no");
        const experience = repository.getByNo(no);

        // データがなければ終了
        if (!experience) {
            return;
        }

        // 詳細のセット
        this.setDetail(experience);
    }

    /**
     * 詳細のセット
     * @param {Object} data 経歴データ
     */
    setDetail = data => {
        $("#work-experience-report-detail").load(`${data.no}\\detail.html`);
    }
}

export { WorkExperienceReportDetailSetter };