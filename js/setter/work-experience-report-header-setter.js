import { WorkExperienceRepository } from "../repository/work-experience-repository.js";
import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js"

/**
 * 職務経歴レポート(ヘッダー)の設定処理を提供します。
 */
class WorkExperienceReportHeaderSetter {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 必要なソースを読込
        this.loader = ScriptSeriesLoader;
        this.loader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.loader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {WorkExperienceReportHeaderSetter} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new WorkExperienceReportHeaderSetter();

        // スクリプトの読込完了後にインスタンスを返す
        while(setter.loader.running){
            await Utility.sleep(2000);
        }
        return setter;
    }

    /**
     * 職務経歴レポート(ヘッダー)の設定を実行します。
     */
    execute = () => {
        // 職務経歴データを取得
        const repositry = new WorkExperienceRepository();
        const params = new URLSearchParams(document.location.search.substring(1));
        const no = params.get("no");
        const experience = repositry.getByNo(no);

        // ボタン処理のセット
        this.setPrevAndNextButtonAction(no);

        // データがなければ終了
        if (!experience) {
            this.clear();
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

        // 日付の日数を取得
        const daysOfMonth = 30;
        const getNumberOfDays = expression => {
            const delimiter = "-";
            const delimited = expression.split(delimiter);
            const date = new Date(delimited[0], delimited[1], delimited[2]);
            const daysOfYear = 365;
            return date.getFullYear() * daysOfYear + (date.getMonth() + 1) * daysOfMonth + date.getDate();
        }

        // 日数差から月数差を計算
        const from = getNumberOfDays(data.period.from);
        const to = getNumberOfDays(data.period.to);
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
        
        // 単一のp要素の生成
        const createP = (classSuffix, innerHtml) => `<p class='${base}-${classSuffix}'>${innerHtml}</p>`;
        
        // このスタイルは職務経歴を利用する
        const style = "<link rel='stylesheet' href='../css/work-experience.css'></link>"
        $("head link:last").after(style);

        // 凡例を生成
        const names = [];
        names.push(createP("device", "機種"));
        names.push(createP("operating-system", "OS"));
        names.push(createP("programming-language", "言語"));
        names.push(createP("development-tool", "DT"));
        names.push(createP("database", "DB"));
        names.push(createP("framework", "FW"));
        names.push(createP("platform", "PF"));
        names.push(createP("other", "他"));
        $("#work-experience-report-summary-item-name-technology").empty();
        $("#work-experience-report-summary-item-name-technology").append(names.join(""));

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
        values.push(createMultiP("programming-language", data.programLanguage));
        values.push(createMultiP("development-tool", data.developmentTool));
        values.push(createMultiP("database", data.db));
        values.push(createMultiP("framework", data.framework));
        values.push(createMultiP("platform", data.platform));
        values.push(createMultiP("other", data.other));
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
    clear = () => {
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
}

export { WorkExperienceReportHeaderSetter };