/**
 * 開発ツールデータ（ヘルプ）のセッター
 */
class DevelopmentToolHelpSetter {
    /**
     * セット処理の実行
     */
    execute = () => {
        // 機種データを取得
        const Repository = new DevelopmentToolRepository();
        const tools = Repository.getAll();

        // 名前の昇順で並べる
        tools.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });

        // データ毎の処理
        for (let i = 0; i < tools.length;  i++) {
            const tool = tools[i];

            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(i));
            cells.push(this.createNameTd(tool));
            cells.push(this.createDescriptionTd(tool));

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
     * @param {Object} developmentTool 開発ツールデータ
     * @return {String} td要素を表すhtml
     */
    createNameTd = developmentTool => {
        const classPrefix = "work-experience-technology";
        const noWrap = "white-space:nowrap;";
        return this.createTd(`<p class="${classPrefix}-development-tool" style="${noWrap}">${developmentTool.name}</p>`);
    }

    /**
     * 説明のtd要素を生成
     * @param {Object} developmentTool 開発ツールデータ
     * @return {String} td要素を表すhtml
     */
    createDescriptionTd = developmentTool => {
        return this.createTd(`<p>${developmentTool.description}</p>`);
    }
}