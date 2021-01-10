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

        // 名前の昇順で並べる
        oss.sort((a, b) => {
            return a.name > b.name ? -1 : 1;
        });

        // データ毎の処理
        for (let i = 0; i < oss.length;  i++) {
            const os = oss[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createNameTd(os));
            cells.push(this.createDescriptionTd(os));

            // tr要素を生成してテーブルに追加
            const row = `<tr>${cells.join("")}</tr>`;
            $("#help-info tr:last").after(row);
        }

        // 生成した要素を表示
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