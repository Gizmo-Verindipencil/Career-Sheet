/**
 * 経歴(詳細)のセッター
 */
class WorkExperienceReportDetailSetter {
    /**
     * コンストラクタ
     * @param {Object} dataList 経歴データ
     */
    constructor(data) {
        this.data = data;
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