import { WorkExperienceReportModel } from "../model/work-experience-report-model.min.js";
import { Utility } from "../shared/utility.min.js";
import ScriptSeriesLoader from "../shared/script-series-loader.min.js"
import StylesheetSeriesLoader from "../shared/stylesheet-series-loader.min.js";

/**
 * 職務経歴レポートのコントローラーを提供します。
 */
class WorkExperienceReportController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 対応するモデルをセット
        this.model = new WorkExperienceReportModel();

        // 必要なスタイルシートを読込
        this.stylesheetLoader = StylesheetSeriesLoader;
        this.stylesheetLoader.add("css/work-experience.min.css");
        this.stylesheetLoader.load();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {WorkExperienceReportController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new WorkExperienceReportController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running) {
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * 職務経歴レポート(ヘッダー)の設定を実行します。
     */
    execute = () => {
        // 職務経歴データを取得
        const params = new URLSearchParams(document.location.search.substring(1));
        const no = params.get("no");
        const experience = this.model.getWorkExperienceByNo(no);

        // ボタン処理のセット
        this.setPrevAndNextButtonAction(no);

        // データがなければ終了
        if (!experience) {
            this.clearHeader();
            this.setNoDataNotification();
            return;
        }

        //　サマリ情報のセット
        this.setNo(experience);
        this.setPeriod(experience);
        this.setMonth(experience);
        this.setTask(experience);
        this.setSystem(experience);
        this.setProjectPeakSize(experience);
        this.setSubordinate(experience);
        this.setTechnology(experience);
        this.setPhase1(experience);
        this.setPhase2(experience);
        this.setPhase3(experience);
        this.setPhase4(experience);
        this.setPhase5(experience);
        this.setPhase6(experience);
        this.setPhase7(experience);
        this.setPhase8(experience);

        // 詳細のセット
        this.setDetail(experience);

        // ビジネス関係図のセット
        this.setBusinessRelationshipChart(experience);
    }

    /**
     * No.の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setNo = data => {
        $("input[name='number']").val(data.no);
    }

    /**
     * 期間の設定を行います。
     * @param {object} data 職務経歴データ。
     */
    setPeriod = data => {
        // 年月表現の取得
        const getYearMonth = date => {
            const delimiter = "-";
            date = date.split(delimiter);
            if (!date[0] || !date[1]) {
                return "????年??月";
            }
            return `${date[0]}年${date[1]}月`;
        }

        // 期間のセット
        const from = getYearMonth(data.period.from);
        $("input[name='periodFrom']").val(from);
        $("input[name='periodBetween']").val("～");
        const to = getYearMonth(data.period.to)
        $("input[name='periodTo']").val(to);
    }

    /**
     * 月数の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setMonth = data => {
        // 進行中の案件の場合は計算なし
        if (!data.period.to) {
            return;
        }

        // 日数差から月数差を計算
        const from = Utility.getNumberOfDays(data.period.from);
        const to = Utility.getNumberOfDays(data.period.to);
        const daysOfMonth = 30;
        let numberOfMonths = (to - from) / daysOfMonth;

        // 月数0は並行作業なので数日分の工数を設定
        numberOfMonths = numberOfMonths === 0 ? 0.1 : numberOfMonths;

        // 期間から計算した月数をセット
        $("input[name='month']").val(numberOfMonths.toFixed(1));
    }

    /**
     * 業務名の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setTask = data => {
        $("input[name='task']").val(data.projectSummary);
    }

    /**
     * システム名の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setSystem = data => {
        // データがない場合の表示
        if (!data.system || data.system.length === 0) {
            $("input[name='system']").val("-");
        }

        // 先頭要素のセット
        if (data.system.length >= 1) {
            $("input[name='system']").val(data.system[0]);
        }
        
        // 2番目以降の要素のセット
        if (data.system.length < 2) {
            return;
        }
        for (const i = 1; i < data.length; i++) {
            const base = "work-experience-summary-value";
            const container = "work-experience-report-summary-item-value-task-and-system";
            const system = `<input type="text" class="${base}" name="system${i}" value="${data.system[i]}"></input>`;
            $(container).after(system);
        }
    }

    /**
     * プロジェクトのピーク人数の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setProjectPeakSize = data => {
        $("input[name='projectPeakSize']").val(data.projectPeakSize);
    }

    /**
     * 部下人数の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setSubordinate = data => {
        $("input[name='subordinate']").val(data.subordinate);
    }

    /**
     * 技術関連の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setTechnology = data => {
        // この情報に対応するクラス名
        const base = "work-experience-technology";

        // 単一のa要素の生成
        const createA = (classSuffix, innerHtml) => `<a class='${base}-${classSuffix}' href='../help/${classSuffix}.html' target='_blank'>${innerHtml}</p>`;

        // 凡例を生成
        const names = [];
        names.push(createA("device", "機種"));
        names.push(createA("operating-system", "OS"));
        names.push(createA("programming-language", "言語"));
        names.push(createA("development-tool", "DT"));
        names.push(createA("database", "DB"));
        names.push(createA("framework", "FW"));
        names.push(createA("platform", "PF"));
        names.push(createA("uncategorized", "他"));
        $("#work-experience-report-summary-item-name-technology").empty();
        $("#work-experience-report-summary-item-name-technology").append(names.join(""));

        // 単一のp要素の生成
        const createP = (classSuffix, innerHtml) => `<p class='${base}-${classSuffix}'>${innerHtml}</p>`;

        // 複数のp要素の生成
        const createMultiP = (classSuffix, list) => {
            if (!list || list.length === 0) {
                return;
            }

            const uniqueList = list.filter((i, j, self) => self.indexOf(i) === j);
            const outputList = [];
            for (const item of uniqueList) {
                outputList.push(createP(classSuffix, item));
            }
            return outputList.join("");
        }

        // 内容を生成
        const values = [];
        values.push(createMultiP("device", data.device));
        values.push(createMultiP("operating-system", data.os));
        values.push(createMultiP("programming-language", data.programmingLanguage));
        values.push(createMultiP("development-tool", data.developmentTool));
        values.push(createMultiP("database", data.database));
        values.push(createMultiP("framework", data.framework));
        values.push(createMultiP("platform", data.platform));
        values.push(createMultiP("uncategorized", data.uncategorizedTechnology));
        $("#work-experience-report-summary-item-value-technology").empty();
        $("#work-experience-report-summary-item-value-technology").append(values.join(""));
    }

    /**
     * 作業フェーズの設定を行います。
     * @param {Object} data 職務経歴データ。
     * @param {Number} targetPhase 対象フェーズ（1～8）。
     * @param {Array} targetTypes 対象作業タイプ。
     */
    setPhase = (data, targetPhase, targetTypes) => {
        // データがない場合の表示
        if (!data.task || data.task.length === 0
            || !targetTypes || targetTypes.length === 0) {
            $(`input[name='phase${targetPhase}']`).val("");
            return;
        }

        // 業務に含まれるタイプを取得
        let taskTypes = [];
        for (const task of data.task) {
            taskTypes = taskTypes.concat(task.type);
        }

        // 対象の業務を経験していれば「○」を表示
        for (const type of targetTypes) {
            const target = taskTypes.filter(x => x === type);
            if (target.length > 0) {
                $(`input[name='phase${targetPhase}']`).val("○");
                return;
            }
        }
        
        // 経験なしなら表示をクリア
        $(`input[name='phase${targetPhase}']`).val("");
    }

    /**
     * 作業フェーズ(管理・PM)の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setPhase1 = data => {
        const targetTypes = [ ];
        this.setPhase(data, 1, targetTypes);
    }

    /**
     * 作業フェーズ(要件定義・分析)の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setPhase2 = data => {
        const targetTypes = [ "BA", "SA", "RD", "E" ];
        this.setPhase(data, 2, targetTypes);
    }

    /**
     * 作業フェーズ(基本設計)の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setPhase3 = data => {
        const targetTypes = [ "FD", "HLD" ];
        this.setPhase(data, 3, targetTypes);
    }

    /**
     * 作業フェーズ(詳細設計)の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setPhase4 = data => {
        const targetTypes = [ "LLD" ];
        this.setPhase(data, 4, targetTypes);
    }

    /**
     * 作業フェーズ(PG/UT)の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setPhase5 = data => {
        const targetTypes = [ "C", "UT" ];
        this.setPhase(data, 5, targetTypes);
    }

    /**
     * 作業フェーズ(結合試験)の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setPhase6 = data => {
        const targetTypes = [ "IT" ];
        this.setPhase(data, 6, targetTypes);
    }

    /**
     * 作業フェーズ(総合試験)の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setPhase7 = data => {
        const targetTypes = [ "ST" ];
        this.setPhase(data, 7, targetTypes);
    }

    /**
     * 作業フェーズ(維持管理業務)の設定を行います。
     * @param {Object} data 職務経歴データ。
     */
    setPhase8 = data => {
        const targetTypes = [ "SM", "SO", "HD" ];
        this.setPhase(data, 8, targetTypes);
    }

    /**
     * 前へ/次へボタン押下時の動作設定を行います。
     * @param {String} no 職務経歴データの番号。
     */
    setPrevAndNextButtonAction = no => {
        // ページ遷移の処理
        const jump = isNext => {
            const direction = isNext ? 1 : -1;
            const url = `report.html?no=${Number(no)+direction}`;
            window.location = url;
        }

        // 前へボタンの動作をセット
        const jumpPrev = () => jump(false);
        $(`button#work-experience-report-jump-prev`).click(jumpPrev);

        // 次へボタンの動作をセット
        const jumpNext = () => jump(true);
        $(`button#work-experience-report-jump-next`).click(jumpNext);
    }

    /**
     * 職務経歴レポート(ヘッダー)の全項目をクリアします。
     */
    clearHeader = () => {
        // No.のクリア
        $("input[name='number']").val("");

        // 期間のクリア
        $("input[name='periodFrom']").val("");
        $("input[name='periodBetween']").val("");
        $("input[name='periodTo']").val("");
        
        // 月数のクリア
        $("input[name='month']").val("");

        // 業務名・システム名のクリア
        $("input[name='task']").val("");
        $("input[name='system']").val("");

        // PJ人員・部下人数のクリア
        $("input[name='projectPeakSize']").val("");
        $("input[name='subordinate']").val("");

        // 技術関連のクリア
        $("#work-experience-report-summary-item-name-technology").empty();
        $("#work-experience-report-summary-item-value-technology").empty();

        // 作業フェーズのクリア
        for (let i = 1; i < 9; i++) {
            $(`input[name='phase${i}']`).val("");
        }
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

    /**
     * ビジネス関係図の設定を行います。
     * @param {Object}} data 職務経歴データ。
     */
    setBusinessRelationshipChart = data => {
        const source = `../supplementary/business-relationship-chart.html?id=${data.businessRelationshipId}`;
        const image = `<img class='work-experience-report-supplementary-link-icon' src='../icon/top-to-right-arrow-in-box.svg'>`;
        const link = `<a class='work-experience-report-supplementary-link' href='${source}' target='_blank'>ビジネス関係図${image}</a>`;
        $("#work-experience-report-supplementary").append(link);
    }
}

export { WorkExperienceReportController };