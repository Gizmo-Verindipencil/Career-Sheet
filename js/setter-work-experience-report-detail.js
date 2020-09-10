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
        this.setDetail(this.data);
    }

    /**
     * 詳細のセット
     * @param {Object} data 経歴データ
     */
    setDetail = data => {
        $("#work-experience-report-detail").load(`${data.no}\\detail.html`);
    }
}