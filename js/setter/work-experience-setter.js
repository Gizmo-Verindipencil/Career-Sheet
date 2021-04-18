import { WorkExperienceRepository } from "../repository/work-experience-repository.js";
import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js"

/**
 * 職務経歴の設定処理を提供します。
 */
class WorkExperienceSetter {
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
     * @returns {WorkExperienceSetter} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new WorkExperienceSetter();

        // スクリプトの読込完了後にインスタンスを返す
        while(setter.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return setter;
    }

    /**
     * 職務経歴の設定を実行します。
     */
    execute = () => {
        // 職務経歴データを取得
        const repository = new WorkExperienceRepository();
        let experiences = repository.getAll();

        // 読込開始の基準となる経歴番号を取得
        let lastNumber = this.getLoadedMinNumber();
        let firstLoading = false;
        if (!lastNumber) {
            // 初回取込時は直近の番号+1を開始位置とする
            const max = experiences.map(x => x.no).reduce((a, b) => {
                return Math.max(a, b);
            });
            lastNumber = max + 1;
            firstLoading = true;
        }

        // 読込対象の番号を取得
        const loadingNumbers = this.getNextLoadingNumbers(lastNumber, 5);

        // 読込対象の最小値が1ならば、追加の読込対象が
        // 存在しないので追加読込バーを非表示にする
        const loadingMin = loadingNumbers.reduce((a, b) => {
            return Math.min(a, b);
        });
        if (loadingMin === 1) {
            $("#work-experience-additional-loading-bar").hide();
        }

        // 読込対象の職務経歴に絞る
        experiences = experiences.filter(x => loadingNumbers.includes(Number(x.no)));

        // 最近の職歴から並べる
        experiences.sort((a, b) => {
            return b.no - a.no;
        });

        for (const experience of experiences) {
            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(experience));
            cells.push(this.createBusinessTypeTd(experience));
            cells.push(this.createWorkingPeriodTd(experience));
            cells.push(this.createTechnologyTd(experience));
            cells.push(this.createMainTask(experience));
            cells.push(this.createTaskType(experience));
            cells.push(this.createReportLinkTd(experience));

            // tr要素を生成してテーブルに追加
            if (firstLoading) {
                // 初回の読込
                const row = `<tr>${cells.join("")}</tr>`;
                $("#work-experience tr:last").after(row);
            }
            else
            {
                // 追加の読込
                const row = $(`<tr>${cells.join("")}</tr>`).hide();
                $("#work-experience tr:last").after(row);
                row.show("slow");
            }
        }
    }

    /**
     * 配置済の職務経歴の最小番号を取得します。
     * @returns {Number} 最小番号を返します。対象が存在しない場合はnullを返します。
     */
    getLoadedMinNumber = () => {
        // 配置済の職務経歴の番号を取得
        const loaded = [];
        for(let e of $(".work-experience-number")) {
            const no = Number(e.outerText);
            loaded.push(no); 
        };

        // 職務経歴が未配置の場合はnullを返す
        if (loaded.length === 0) {
            return null;
        }

        // 最小の番号を取得
        const min = loaded.reduce((a, b) => {
            return Math.min(a, b);
        });
        return min;
    }

    /**
     * 読込対象の職務経歴の番号を取得します。
     * @param {Number} currentMin 配置済職務経歴の最小番号。この番号より小さい
     * @param {Number} loadingSize 一度の読込する職務経歴の数。
     * @returns {Array<Number>} 配置対象の職務経歴番号を返します。
     */
    getNextLoadingNumbers = (currentMin, loadingSize) => {
        let list = [];
        
        for(let i = 0; i < loadingSize; i++) {
            const number = currentMin - (i + 1);
            
            // 番号が全体の最小番号を下回っていれば
            // 読込対象のデータが存在しないので中断
            const actualMin = 1;
            if (number < actualMin) {
                break;
            }

            list.push(number);
        }

        return list;
    }

    /**
     * td要素を生成します。
     * @param {String} tdClass td要素のクラス。
     * @param {String} innerHtml td要素の内部html。
     * @return {String} td要素を表すhtmlを返します。
     */
    createTd = (tdClass, innerHtml) => `<td class='${tdClass}'>${innerHtml}</td>`;

    /**
     * No.のtd要素を生成します。
     * @param {Object} experience 職務経歴データ
     * @return {String} td要素を表すhtmlを返します。
     */
    createNoTd = experience => {
        // この情報に対応するクラス名
        const base = "work-experience-number";

        // td要素を生成して返す
        return this.createTd(base, `<p>${experience.no}</p>`);
    }

    /**
     * 業種のtd要素を生成します。
     * @param {Object} experience 職務経歴データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createBusinessTypeTd = experience => {
        // この情報に対応するクラス名
        const base = "work-experience-business-type";

        // 改行するキーワード
        const words = [];
        words.push("サービス");
        words.push("メーカー");

        // 改行位置へのbr要素の挿入
        let businessType = experience.businessType;
        for (const word of words) {
            if (experience.businessType.indexOf(word) === -1) {
                continue;
            }
            businessType = businessType.replace(word, `<br>${word}`);
        }

        // td要素を生成して返す
        return this.createTd(base, `<p>${businessType}</p>`);
    }

    /**
     * 期間のtd要素を生成します。
     * @param {Object} experience 職務経歴データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createWorkingPeriodTd = experience => {
        // この情報に対応するクラス名
        const base = "work-experience-working-period";

        // p要素の生成
        const createP = (classSuffix, innerHtml) => `<p class='${base}-${classSuffix}'>${innerHtml}</p>`;

        // from/toのp要素の生成
        const createFromOrTo = fromOrTo => {
            if (!experience.period[fromOrTo]) {
                return;
            }

            const delimiter = "-";
            const date = experience.period[fromOrTo].split(delimiter);
            if (!date[0] || !date[1]) {
                return;
            }

            let innerHtml = `${date[0]}年${date[1]}月`;
            return createP(fromOrTo, innerHtml);
        }

        // fromとtoの間のp要素の生成
        const createBetween = () => {
            return createP("between", "～");
        }

        // p要素を生成
        const div = []
        div.push(createFromOrTo("from"));
        div.push(createBetween());
        div.push(createFromOrTo("to"));

        // td要素を生成して返す
        return this.createTd(base, div.join(""));
    }

    /**
     * 機種とOSのtd要素を生成します。
     * @param {Object} experience 職務経歴データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createTechnologyTd = experience => {
        // この情報に対応するクラス名
        const base = "work-experience-technology";
        
        // 複数のp要素の生成
        const createMultiP = (classSuffix, list) => {
            if (!list || list.length === 0) {
                return;
            }

            const uniqueList = list.filter((i, j, self) => self.indexOf(i) === j);
            const outputList = [];
            for (const item of uniqueList) {
                const createP = (classSuffix, innerHtml) => `<p class='${base}-${classSuffix}'>${innerHtml}</p>`;
                outputList.push(createP(classSuffix, item));
            }
            return outputList.join("");
        }
        
        // p要素を生成
        const innerHtml = [];
        innerHtml.push(createMultiP("device", experience.device));
        innerHtml.push(createMultiP("operating-system", experience.os));
        innerHtml.push(createMultiP("programming-language", experience.programLanguage));
        innerHtml.push(createMultiP("development-tool", experience.developmentTool));
        innerHtml.push(createMultiP("database", experience.db));
        innerHtml.push(createMultiP("framework", experience.framework));
        innerHtml.push(createMultiP("platform", experience.platform));
        innerHtml.push(createMultiP("other", experience.other));

        // td要素を生成して返す
        return this.createTd(base, innerHtml.join(""));
    }

    /**
     * 対象業務のtd要素を生成します。
     * @param {Object} experience 職務経歴データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createMainTask = experience => {
        // この情報に対応するクラス名
        const base = "work-experience-main-task";

        // 情報がなければ空のtd要素を返す
        if (!experience.task || experience.task.length === 0) {
            return this.createTd(base, "");
        }

        // p要素の生成
        const createP = (classSuffix, innerHtml) => `<p class='${base}-${classSuffix}'>${innerHtml}</p>`;

        // プロジェクト概要のp要素を生成
        const innerHtml = [];
        innerHtml.push(createP("summary", experience.projectSummary));

        // 業務内容のp要素を生成
        for (const task of experience.task) {
            innerHtml.push(createP("name", task.name));
        }

        // td要素を生成して返す
        return this.createTd(base, innerHtml.join(""));
    }

    /**
     * 作業内容のtd要素を生成します。
     * @param {Object} experience 職務経歴データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createTaskType = experience => {
        // この情報に対応するクラス名
        const base = "work-experience-task-type";   

        // 情報がなければ空のtd要素を返す
        if (!experience.task || experience.task.length === 0) {
            return this.createTd(base, "");
        }

        // 一意なリストを作成
        let types = [];
        experience.task.forEach(x => types = types.concat(x.type));
        types = types.filter((x, i, self) => self.indexOf(x) === i);
        types.sort();

        // p要素の生成
        const createP = (classSuffix, innerHtml) => `<p class='${base}-${classSuffix}'>${innerHtml}</p>`;

        // p要素を生成
        const innerHtml = [];
        for (const type of types) {
            // 空白は無視
            if (type === "") {
                continue;
            }
            innerHtml.push(createP("unknown", type));
        }

        // td要素を生成して返す
        return this.createTd(base, innerHtml.join(""));
    }

    /**
     * 詳細リンクのtd要素を生成します。
     * @param {Object} experience 職務経歴データ。
     * @return {String} td要素を表すhtmlを返します。
     */
    createReportLinkTd = experience => {
        // この情報に対応するクラス名
        const base = "work-experience-report-link";

        // 詳細ページのリンク先を生成
        const url = `work-experience\\report.html?no=${experience.no}`;

        // td要素を生成して返す
        const icon = `<img style='width:90%;' src='icon/top-to-right-arrow-in-box.svg'>`;
        return this.createTd(base, `<a href='${url}'>${icon}</a>`);
    }
}

export { WorkExperienceSetter };