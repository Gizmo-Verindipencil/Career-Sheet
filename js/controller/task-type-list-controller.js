import { TaskTypeRepository } from "../repository/task-type-repository.js";
import { TaskColorRepository } from "../repository/task-color-repository.js";
import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js"

/**
 * 作業種類一覧の設定処理を提供します。
 */
class TaskTypeListController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {TaskTypeListController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new TaskTypeListController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * 作業種類一覧の設定を実行します。
     */
    execute = () => {
        // 作業種類データを取得
        const typeRepository = new TaskTypeRepository();
        const types = typeRepository.getAll();

        // 設定されたソート順に並び替え
        types.sort((a, b) => {
            if (a.sort > b.sort) return 1;
            if (a.sort < b.sort) return -1;
            return 0;
        });

        // 作業テーマ色データを取得
        const colorRepository = new TaskColorRepository();
        const colors = colorRepository.getAll();

        // 作業種類毎のデザインを適用
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

export { TaskTypeListController };