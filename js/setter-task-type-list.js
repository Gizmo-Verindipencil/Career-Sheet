/**
 * 作業種類一覧のセッター
 */
class TaskTypeListSetter {
    /**
     * セット処理の実行
     */
    execute = () => {
        // 作業データを取得
        const service = new TaskService();
        const types = service.getAllTypes();

        // 設定されたソート順に並び替え
        types.sort((a, b) => {
            if (a.sort > b.sort) return 1;
            if (a.sort < b.sort) return -1;
            return 0;
        });

        const colors = service.getAllColors();
        for (const type of types) {
            // 対応する色を設定
            const color = colors.filter(x => x.id === type.colorId);
            const createLinearGradient = (start, end) => ` style='background:linear-gradient(${start},${end});'`;;
            let style = "";
            if (color.length > 0) {
                style =  createLinearGradient(color[0].start, color[0].end);
            } else {
                style = createLinearGradient("#cecece", "#ffffff");
            }

            // 要素を生成して画面に追加
            const idP = `<p class='task-type-list-task-symbol'${style}>${type.id}</p>`;
            const nameP = `<p class='task-type-list-task-description'>${type.name.ja}</p>`;
            const wrapper = `<div class='task-type-list-task-wrapper'>${idP}${nameP}</div>`;
            $("#task-type-list").append(wrapper);
        }
    }
}