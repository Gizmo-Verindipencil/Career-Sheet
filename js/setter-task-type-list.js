/**
 * 作業種類一覧のセッター
 */
class TaskTypeListSetter {
    /**
     * コンストラクタ
     * @param {Array<Object>} dataList 作業種類
     */
    constructor(dataList) {
        this.dataList = dataList;
    }

    /**
     * セット処理の実行
     */
    execute = () => {
        // 設定されたソート順に並び替え
        const list = Array.from(this.dataList);
        list.sort((a, b) => {
            if (a.sort > b.sort) return 1;
            if (a.sort < b.sort) return -1;
            return 0;
        });
        for (const data of list) {
            const color = taskColor.filter(x => x.id === data.colorId);
            const createLinearGradient = (start, end) => ` style='background:linear-gradient(${start},${end});'`;;

            let style = "";
            if (color.length > 0) {
                style =  createLinearGradient(color[0].start, color[0].end);
            } else {
                style = createLinearGradient("#cecece", "#ffffff");
            }
            const idP = `<p class='task-type-list-task-symbol'${style}>${data.id}</p>`;
            const nameP = `<p class='task-type-list-task-description'>${data.name.ja}</p>`;
            const wrapper = `<div class='task-type-list-task-wrapper'>${idP}${nameP}</div>`;
            $("#task-type-list").append(wrapper);
        }
    }
}