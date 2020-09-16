/**
 * 資格・免許のセッター
 */
class QualificationSetter {
    /**
     * コンストラクタ
     * @param {Array<Object>} dataList 資格データのリスト
     */
    constructor(dataList) {
        this.dataList = dataList;
    }

    /**
     * セット処理の実行
     */
    execute = () => {
        for (const data of this.dataList) {
            $("#qualification").append(`<p>${data.name} ${data.score}</p>`);
        }

        // セットした内容を表示
        $("section#qualification-container").show();
    }
}