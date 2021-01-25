/**
 * その他データ（ヘルプ）のセッター
 */
class OtherHelpSetter {
    /**
     * セット処理の実行
     */
    execute = () => {
        // その他データを取得
        const Repository = new OtherRepository();
        const others = Repository.getAll();

        // 名前の昇順で並べる
        others.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });

        // データ毎の処理
        for (let i = 0; i < others.length;  i++) {
            const other = others[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createNameTd(other));
            cells.push(this.createDescriptionTd(other));

            // tr要素を生成してテーブルに追加
            const row = `<tr>${cells.join("")}</tr>`;
            $("#help-info tr:last").after(row);
        }

        // 生成した要素を表示
        $("#help-container").show();
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
     * 名称のtd要素を生成
     * @param {Object} other その他データ
     * @return {String} td要素を表すhtml
     */
    createNameTd = other => {
        const classPrefix = "work-experience-technology";
        const noWrap = "white-space:nowrap;";
        return this.createTd(`<p class="${classPrefix}-other" style="${noWrap}">${other.name}</p>`);
    }

    /**
     * 説明のtd要素を生成
     * @param {Object} other その他データ
     * @return {String} td要素を表すhtml
     */
    createDescriptionTd = other => {
        return this.createTd(`<p>${other.description}</p>`);
    }
}