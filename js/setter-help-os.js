/**
 * OSデータ（ヘルプ）のセッター
 */
class OsHelpSetter {
    /**
     * セット処理の実行
     */
    execute = () => {
        // OSデータを取得
        const service = new OsService();
        const oss = service.getAll();

        for (const os of oss) {
            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(os));
            cells.push(this.createNameTd(os));
            cells.push(this.createDescriptionTd(os));

            // tr要素を生成してテーブルに追加
            const row = `<tr>${cells.join("")}</tr>`;
            $("#help-info tr:last").after(row);
        }

        $("#help-wrapper").show();
    }

    /**
     * td要素を生成
     * @param {String} innerHtml
     * @return {String} td要素を表すhtml 
     */
    createTd = innerHtml => `<td class="help-info-cell">${innerHtml}</td>`;

    /**
     * No.のtd要素を生成
     * @param {Object} os OSデータ
     * @return {String} td要素を表すhtml
     */
    createNoTd = os => {
        const centering = "text-align:center;";
        return this.createTd(`<p style="${centering}">${os.no}</p>`);
    }

    /**
     * 名称のtd要素を生成
     * @param {Object} os OSデータ
     * @return {String} td要素を表すhtml
     */
    createNameTd = os => {
        return this.createTd(`<p>${os.name}</p>`);
    }

    /**
     * 説明のtd要素を生成
     * @param {Object} os OSデータ
     * @return {String} td要素を表すhtml
     */
    createDescriptionTd = os => {
        return this.createTd(`<p>${os.description}</p>`);
    }
}