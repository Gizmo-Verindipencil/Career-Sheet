import { WorkExperienceRepository } from "../repository/work-experience-repository.js";
import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js"

/**
 * 職務経歴レポート(詳細)の設定処理を提供します。
 */
class WorkExperienceReportDetailSetter {
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
     * @returns {WorkExperienceReportDetailSetter} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new WorkExperienceReportDetailSetter();

        // スクリプトの読込完了後にインスタンスを返す
        while(setter.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return setter;
    }

    /**
     * 職務経歴レポート(詳細)の設定を実行します。
     */
    execute = () => {
        // 職務経歴データを取得
        const repository = new WorkExperienceRepository();
        const params = new URLSearchParams(document.location.search.substring(1));
        const no = params.get("no");
        const experience = repository.getByNo(no);

        // データがなければ終了
        if (!experience) {
            this.setNoDataNotification();
            return;
        }

        // 詳細のセット
        this.setDetail(experience);
    }

    /**
     * 詳細ページの設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setDetail = data => {
        $("#work-experience-report-detail").load(`${data.no}\\detail.html`);
    }

    /**
     * データなしを示す表示の設定を行います。
     */
    setNoDataNotification = () => {
        $("#work-experience-report-detail").html("<p>NO DATA</p>");
    }
}

export { WorkExperienceReportDetailSetter };