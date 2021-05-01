import { TaskTypeListModel } from "../model/task-type-list-model.js";
import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js"

/**
 * 作業種類一覧のコントローラーを提供します。
 */
class TaskTypeListController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 対応するモデルをセット
        this.model = new TaskTypeListModel();

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
        const types = this.model.getTaskTypes();

        // 設定されたソート順に並び替え
        types.sort((a, b) => {
            if (a.sort > b.sort) return 1;
            if (a.sort < b.sort) return -1;
            return 0;
        });

        // 作業種類毎のデザインを適用
        for (const type of types) {
            // 対応する色を設定
            const color = this.model.getTaskColorById(type.colorId);
            const createLinearGradient = (start, end) => ` style='background:linear-gradient(${start},${end});'`;;
            let style = "";
            if (color) {
                style =  createLinearGradient(color.start, color.end);
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