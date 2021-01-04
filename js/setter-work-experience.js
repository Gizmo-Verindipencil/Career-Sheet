/**
 * 職務経歴データのセッター
 */
class WorkExperienceSetter {
    /**
     * コンストラクタ
     * @param {Array<Object>} dataList 職務経歴データのリスト
     */
    constructor(dataList) {
        this.dataList = dataList;
    }

    /**
     * セット処理の実行
     */
    execute = () => {
        // 最近の職歴から並べる
        this.dataList.sort((a, b) => {
            return b.no - a.no;
        });

        for (const data of this.dataList) {
            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(data));
            cells.push(this.createBusinessTypeTd(data));
            cells.push(this.createWorkingPeriodTd(data));
            cells.push(this.createTechnologyTd(data));
            cells.push(this.createMainTask(data));
            cells.push(this.createTaskType(data));

            // tr要素を生成してテーブルに追加
            const row = `<tr>${cells.join("")}</tr>`;
            $("#work-experience tr:last").after(row);
        }

        // セットした内容を表示
        $("section#work-experience-container").show();
    }

    /**
     * td要素を生成
     * @param {String} tdClass
     * @param {String} innerHtml
     * @return {String} td要素を表すhtml
     */
    createTd = (tdClass, innerHtml) => `<td class='${tdClass}'>${innerHtml}</td>`;

    /**
     * No.のtd要素を生成
     * @param {Object} 職務経歴データ
     * @return {String} td要素を表すhtml
     */
    createNoTd = data => {
        // この情報に対応するクラス名
        const base = "work-experience-number";

        // 詳細ページのリンク先を生成
        const url = `work-experience-report\\report.html?no=${data.no}`;
        const linkClass = `${base}-link`;

        // td要素を生成して返す
        return this.createTd(base, `<a class='${linkClass}' href='${url}'>${data.no}</a>`);
    }

    /**
     * 業種のtd要素を生成
     * @param {Object} data 職務経歴データ
     * @return {String} td要素を表すhtml
     */
    createBusinessTypeTd = data => {
        // この情報に対応するクラス名
        const base = "work-experience-business-type";

        // 改行するキーワード
        const words = [];
        words.push("サービス");
        words.push("メーカー");

        // 改行位置へのbr要素の挿入
        let businessType = data.businessType;
        for (const word of words) {
            if (data.businessType.indexOf(word) === -1) {
                continue;
            }
            businessType = businessType.replace(word, `<br>${word}`);
        }

        // td要素を生成して返す
        return this.createTd(base, `<p>${businessType}</p>`);
    }

    /**
     * 期間のtd要素を生成
     * @param {Object} data 職務経歴データ
     * @return {String} td要素を表すhtml
     */
    createWorkingPeriodTd = data => {
        // この情報に対応するクラス名
        const base = "work-experience-working-period";

        // p要素の生成
        const createP = (classSuffix, innerHtml) => `<p class='${base}-${classSuffix}'>${innerHtml}</p>`;

        // from/toのp要素の生成
        const createFromOrTo = fromOrTo => {
            if (!data.period[fromOrTo]) {
                return;
            }

            const delimiter = "-";
            const date = data.period[fromOrTo].split(delimiter);
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
     * 機種とOSのtd要素を生成
     * @param {Object} data 職務経歴データ
     * @return {String} td要素を表すhtml
     */
    createTechnologyTd = data => {
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
        innerHtml.push(createMultiP("device", data.device));
        innerHtml.push(createMultiP("os", data.os));
        innerHtml.push(createMultiP("program-language", data.programLanguage));
        innerHtml.push(createMultiP("development-tool", data.developmentTool));
        innerHtml.push(createMultiP("db", data.db));
        innerHtml.push(createMultiP("framework", data.framework));
        innerHtml.push(createMultiP("platform", data.platform));
        innerHtml.push(createMultiP("other", data.other));

        // td要素を生成して返す
        return this.createTd(base, innerHtml.join(""));
    }

    /**
     * 対象業務のtd要素を生成
     * @param {Object} data 職務経歴データ
     * @return {String} td要素を表すhtml
     */
    createMainTask = data => {
        // この情報に対応するクラス名
        const base = "work-experience-main-task";

        // 情報がなければ空のtd要素を返す
        if (!data.task || data.task.length === 0) {
            return this.createTd(base, "");
        }

        // p要素の生成
        const createP = (classSuffix, innerHtml) => `<p class='${base}-${classSuffix}'>${innerHtml}</p>`;

        // プロジェクト概要のp要素を生成
        const innerHtml = [];
        innerHtml.push(createP("summary", data.projectSummary));

        // 業務内容のp要素を生成
        for (const task of data.task) {
            innerHtml.push(createP("name", task.name));
        }

        // td要素を生成して返す
        return this.createTd(base, innerHtml.join(""));
    }

    /**
     * 作業内容のtd要素を生成
     * @param {Object} data 職務経歴データ
     * @return {String} td要素を表すhtml
     */
    createTaskType = data => {
        // この情報に対応するクラス名
        const base = "work-experience-task-type";   

        // 情報がなければ空のtd要素を返す
        if (!data.task || data.task.length === 0) {
            return this.createTd(base, "");
        }

        // 一意なリストを作成
        let types = [];
        data.task.forEach(x => types = types.concat(x.type));
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
}