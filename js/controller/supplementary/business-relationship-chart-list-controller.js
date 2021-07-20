import { createInstance } from "../../keyword/create-instance.min.js";
import { Buildable } from "../../interface/buildable.min.js";
import { BusinessRelationshipChartListModel } from "../../model/supplementary/business-relationship-chart-list-model.min.js";
import { Threading } from "../../shared/utility/threading.min.js";
import { PageColorAdjuster } from "../../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.min.js";

/**
 * ビジネス関係図リストのコントローラーを提供します。
 */
class BusinessRelationshipChartListController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new BusinessRelationshipChartListModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", "jQuery");
        this.scriptLoader.add("https://cdn.anychart.com/releases/8.10.0/js/anychart-bundle.min.js", "anychart");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {BusinessRelationshipChartListController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new BusinessRelationshipChartListController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await Threading.sleep(2000);
        }
        return controller;
    }

    /**
     * ビジネス関係図リストの設定を実行します。
     */
    execute = async() => {
        // ビジネス関係データを取得
        const relationships = this.model.getBusinessRelationships();

        for(let i = 0; i < relationships.length; i++) {
            // 対象データを取得
            const relationship = relationships[i];

            const childContainer = $("<div class='list-child'></div>");

            // ノードの説明を追加
            const nodeDescriptions = this.getNodeDescriptions(relationship);
            childContainer.append(nodeDescriptions.join(""));

            // 表示用のデータをセット
            const data = {
                nodes: relationship.nodes.map(x => ({ 
                    id: x.id,
                    fill: {
                        src: `business-relationship-chart/node-image/${x.id}.svg`
                    }
                })),
                edges: relationship.edges
            };

            // グラフを生成
            const chart = anychart.graph(data);

            // ノード外観をセット
            const nodes = chart.nodes();
            nodes.normal().height(50);
            nodes.hovered().height(60);
            nodes.hovered().fill("#ffa000");
            nodes.hovered().stroke("#333333", 2);
            nodes.selected().height(60);
            nodes.selected().fill("#ffa000");
            nodes.selected().stroke("#333333", 2);

            // グラフを追加
            const id = `business-relationship-chart-${i}`;
            childContainer.append(`<div id='${id}' class='list-child-chart' ></div>`);
            $("#list-container").append(childContainer);

            // 図の描画
            chart.container(id).draw();
        }

        // 色を調整
        const adjuster = await createInstance(PageColorAdjuster);
        adjuster.changeBackgroundColor();

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }

    /**
     * ノード説明を取得します。
     * @param {Object} relationship ビジネス関係データ。
     * @returns {Array<String>} p要素を表すhtmlの配列を返します。
     */
    getNodeDescriptions = relationship => {
        const style = "float:left;padding-left:1rem;";
        const createP = (node) => `<p style='${style}'>${node.id}:${node.description}</p>`;
        return relationship.nodes.map(x => createP(x));
    }
}

export { BusinessRelationshipChartListController };