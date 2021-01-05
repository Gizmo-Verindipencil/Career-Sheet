class DeviceHelpSetter {
    /**
     * セット処理の実行
     */
    execute = () => {
        // 機種データを取得
        const service = new DeviceService();
        const devices = service.getAll();

        for (const device of devices) {
            // td要素を生成
            const cells = [];
            cells.push(this.createNoTd(device));
            cells.push(this.createNameTd(device));
            cells.push(this.createDescriptionTd(device));

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
     * @param {Object} device 機種データ
     * @return {String} td要素を表すhtml
     */
    createNoTd = device => {
        const centering = "text-align:center;";
        return this.createTd(`<p style="${centering}">${device.no}</p>`);
    }

    /**
     * 名称のtd要素を生成
     * @param {Object} device 機種データ
     * @return {String} td要素を表すhtml
     */
    createNameTd = device => {
        return this.createTd(`<p>${device.name}</p>`);
    }

    /**
     * 説明のtd要素を生成
     * @param {Object} device 機種データ
     * @return {String} td要素を表すhtml
     */
    createDescriptionTd = device => {
        return this.createTd(`<p>${device.description}</p>`);
    }
}