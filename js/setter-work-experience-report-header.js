/**
 * 経歴(ヘッダー)のセッター
 */
class WorkExperienceReportHeaderSetter {
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
        this.setNo(this.data);
        this.setPeriod(this.data);
        this.setMonth(this.data);
        this.setTask(this.data);
        this.setSystem(this.data);
        this.setProjectPeakSize(this.data);
        this.setSubordinate(this.data);
        this.setTechnology(this.data);
        this.setPhase1(this.data);
        this.setPhase2(this.data);
        this.setPhase3(this.data);
        this.setPhase4(this.data);
        this.setPhase5(this.data);
        this.setPhase6(this.data);
        this.setPhase7(this.data);
        this.setPhase8(this.data);
    }

    /**
     * No.のセット
     * @param {Object} data 経歴データ
     */
    setNo = data => {
        $("input[name='number']").val(data.no);
    }

    /**
     * 期間のセット
     * @param {object} data 経歴データ
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
     * 月数のセット
     * @param {Object} data 経歴データ
     */
    setMonth = data => {
        // 年月を表す数値の取得
        const getNumber = date => {
            const delimiter = "-";
            date = date.split(delimiter); 
            const yearMonth = date[0] + ("00" + date[1]).slice(-2);
            return Number(yearMonth);
        }

        // 進行中の案件の場合は計算なし
        if (!data.period.to) {
            return;
        }

        // 期間から計算した月数をセット
        const from = getNumber(data.period.from);
        const to = getNumber(data.period.to);
        $("input[name='month']").val(to - from + 1);
    }

    /**
     * 業務名のセット
     * @param {Object} data 経歴データ
     */
    setTask = data => {
        $("input[name='task']").val(data.projectSummary);
    }

    /**
     * システム名のセット
     * @param {Object} data 経歴データ
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
     * プロジェクトのピーク人数のセット
     * @param {Object} data 経歴データ
     */
    setProjectPeakSize = data => {
        $("input[name='projectPeakSize']").val(data.projectPeakSize);
    }

    /**
     * 部下人数のセット
     * @param {Object} data 経歴データ
     */
    setSubordinate = data => {
        $("input[name='subordinate']").val(data.subordinate);
    }

    /**
     * 技術関連のセット
     * @param {Object} data 経歴データ 
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
        names.push(createP("os", "OS"));
        names.push(createP("program-language", "言語"));
        names.push(createP("development-tool", "DT"));
        names.push(createP("db", "DB"));
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
        values.push(createMultiP("os", data.os));
        values.push(createMultiP("program-language", data.programLanguage));
        values.push(createMultiP("development-tool", data.developmentTool));
        values.push(createMultiP("db", data.db));
        values.push(createMultiP("framework", data.framework));
        values.push(createMultiP("platform", data.platform));
        values.push(createMultiP("other", data.other));
        $("#work-experience-report-summary-item-value-technology").empty();
        $("#work-experience-report-summary-item-value-technology").append(values.join(""));
    }

    /**
     * 作業フェーズのセット
     * @param {Object} data 経歴データ
     * @param {Number} targetPhase 対象フェーズ（1～8）
     * @param {Array} targetTypes 対象作業タイプ
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
     * 作業フェーズの管理・PMのセット
     * @param {Object} data 経歴データ
     */
    setPhase1 = data => {
        const targetTypes = [ ];
        this.setPhase(data, 1, targetTypes);
    }

    /**
     * 作業フェーズの要件定義・分析のセット
     * @param {Object} data 経歴データ
     */
    setPhase2 = data => {
        const targetTypes = [ "BA", "SA", "RD", "E" ];
        this.setPhase(data, 2, targetTypes);
    }

    /**
     * 作業フェーズの基本設計のセット
     * @param {Object} data 経歴データ
     */
    setPhase3 = data => {
        const targetTypes = [ "FD", "HLD" ];
        this.setPhase(data, 3, targetTypes);
    }

    /**
     * 作業フェーズの詳細設計のセット
     * @param {Object} data 経歴データ
     */
    setPhase4 = data => {
        const targetTypes = [ "LLD" ];
        this.setPhase(data, 4, targetTypes);
    }

    /**
     * 作業フェーズのPG/UTのセット
     * @param {Object} data 経歴データ
     */
    setPhase5 = data => {
        const targetTypes = [ "C", "UT" ];
        this.setPhase(data, 5, targetTypes);
    }

    /**
     * 作業フェーズの結合試験のセット
     * @param {Object} data 経歴データ
     */
    setPhase6 = data => {
        const targetTypes = [ "IT" ];
        this.setPhase(data, 6, targetTypes);
    }

    /**
     * 作業フェーズの総合試験のセット
     * @param {Object} data 経歴データ
     */
    setPhase7 = data => {
        const targetTypes = [ "ST" ];
        this.setPhase(data, 7, targetTypes);
    }

    /**
     * 作業フェーズの維持管理業務のセット
     * @param {Object} data 経歴データ
     */
    setPhase8 = data => {
        const targetTypes = [ "SM", "SO", "HD" ];
        this.setPhase(data, 8, targetTypes);
    }
}