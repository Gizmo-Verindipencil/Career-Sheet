/**
 * 作業分類データ（ヘルプ）のセッター
 */
class TaskTypeHelpSetter {
    /**
     * セット処理の実行
     */
    execute = () => {
        // 作業分類データを取得
        const Repository = new TaskRepository();
        const types = Repository.getAllTypes();

        // ソート順で並べる
        types.sort((a, b) => {
            return a.sort > b.sort ? 1 : -1;
        });

        // データ毎の処理
        for (let i = 0; i < types.length;  i++) {
            const type = types[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createCodeTd(type));
            cells.push(this.createNamesTd(type));
            cells.push(this.createDescriptionTd(type));

            // tr要素を生成してテーブルに追加
            const row = `<tr>${cells.join("")}</tr>`;
            $("#help-info tr:last").after(row);
        }
    }

    /**
     * td要素を生成
     * @param {String} innerHtml
     * @return {String} td要素を表すhtml 
     */
    createTd = innerHtml => `<td class="help-info-cell">${innerHtml}</td>`;

    /**
     * No.のtd要素を生成
     * @param {Number} index インデックス
     * @return {String} td要素を表すhtml
     */
    createNoTd = index => {
        const number = index + 1;
        const centering = "text-align:center;";
        return this.createTd(`<p style="${centering}">${number}</p>`);
    }

    /**
     * コードのtd要素を生成
     * @param {Object} type 作業分類データ
     * @return {String} td要素を表すhtml
     */
    createCodeTd = type => {
        const style = "work-experience-task-type-unknown";
        return this.createTd(`<p class="${style}">${type.id}</p>`);
    }

    /**
     * 名称(日本語/英語)のtd要素を生成
     * @param {Object} type 作業分類データ
     * @return {String} td要素を表すhtml
     */
    createNamesTd = type => {
        const noWrap = "white-space:nowrap;";
        const tds = [];
        tds.push(this.createTd(`<p style="${noWrap}">${type.name.ja}</p>`));
        tds.push(this.createTd(`<p style="${noWrap}">${type.name.en}</p>`));
        return tds.join("");
    }

    /**
     * 説明のtd要素を生成
     * @param {Object} type 作業分類データ
     * @return {String} td要素を表すhtml
     */
    createDescriptionTd = type => {
        // TODO：説明の追加
        return this.createTd(`<p></p>`);
    }
}