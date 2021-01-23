/**
 * 職務経歴データのセッター
 */
class WorkExperienceSetter {
    /**
     * コンストラクタ
     * @param {Array<Object>} experienceList 職務経歴データのリスト
     */
    constructor(experienceList) {
        this.experienceList = experienceList;
    }

    /**
     * セット処理の実行
     */
    execute = () => {
        // 職務経歴データを取得
        const Repository = new WorkExperienceRepository();
        const experiences = Repository.getAll();

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
     * @param {Object} experience 職務経歴データ
     * @return {String} td要素を表すhtml
     */
    createNoTd = experience => {
        // この情報に対応するクラス名
        const base = "work-experience-number";

        // 詳細ページのリンク先を生成
        const url = `work-experience-report\\report.html?no=${experience.no}`;
        const linkClass = `${base}-link`;

        // td要素を生成して返す
        return this.createTd(base, `<a class='${linkClass}' href='${url}'>${experience.no}</a>`);
    }

    /**
     * 業種のtd要素を生成
     * @param {Object} experience 職務経歴データ
     * @return {String} td要素を表すhtml
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
     * 期間のtd要素を生成
     * @param {Object} experience 職務経歴データ
     * @return {String} td要素を表すhtml
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
     * 機種とOSのtd要素を生成
     * @param {Object} experience 職務経歴データ
     * @return {String} td要素を表すhtml
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
        innerHtml.push(createMultiP("os", experience.os));
        innerHtml.push(createMultiP("programming-language", experience.programLanguage));
        innerHtml.push(createMultiP("development-tool", experience.developmentTool));
        innerHtml.push(createMultiP("db", experience.db));
        innerHtml.push(createMultiP("framework", experience.framework));
        innerHtml.push(createMultiP("platform", experience.platform));
        innerHtml.push(createMultiP("other", experience.other));

        // td要素を生成して返す
        return this.createTd(base, innerHtml.join(""));
    }

    /**
     * 対象業務のtd要素を生成
     * @param {Object} experience 職務経歴データ
     * @return {String} td要素を表すhtml
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
     * 作業内容のtd要素を生成
     * @param {Object} experience 職務経歴データ
     * @return {String} td要素を表すhtml
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
}