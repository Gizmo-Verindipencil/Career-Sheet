import { createInstance } from "../keyword/create-instance.min.js";
import { Buildable } from "../interface/buildable.min.js";
import { TaskTypeListModel } from "../model/task-type-list-model.min.js";
import { ThreadingUtility } from "../shared/utility/threading-utility.min.js";
import { PageColorAdjuster } from "../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../shared/script-series-loader.min.js";

/**
 * 作業種類一覧のコントローラーを提供します。
 */
class TaskTypeListController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new TaskTypeListModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", "jQuery");
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
            await ThreadingUtility.sleep(2000);
        }
        return controller;
    }

    /**
     * 作業種類一覧の設定を実行します。
     */
    execute = async() => {
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
            const theme = this.model.getTaskThemeById(type.themeId);
            const createStyle = (foreColor, backgroundColor) => `style='color:${foreColor};background-color:${backgroundColor};'`;
            let style = "";
            if (theme) {
                style = createStyle(theme.foreColor, theme.backgroundColor);
            } else {
                style = createStyle("#cecece", "#ffffff");
            }

            // 要素を生成して画面に追加
            const idP = `<p class='task-type-list-task-symbol' ${style}>${type.id}</p>`;
            const nameP = `<p class='task-type-list-task-description'>${type.name.ja}</p>`;
            const wrapper = `<div class='task-type-list-task-wrapper'>${idP}${nameP}</div>`;
            $("#task-type-list").append(wrapper);
        }

        // 色を調整
        const adjuster = await createInstance(PageColorAdjuster);
        adjuster.changeBackgroundColor();
    }
}

export { TaskTypeListController };