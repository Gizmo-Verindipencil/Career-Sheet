import { BusinessRelationshipChartListModel } from "../../model/supplementary/business-relationship-chart-list-model.js";
import { Utility } from "../../shared/utility.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.js"

/**
 * ビジネス関係図リストのコントローラーを提供します。
 */
class BusinessRelationshipChartListController {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 対応するモデルをセット
        this.model = new BusinessRelationshipChartListModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.scriptLoader.add("https://cdn.anychart.com/releases/8.8.0/js/anychart-core.min.js");
        this.scriptLoader.add("https://cdn.anychart.com/releases/8.8.0/js/anychart-graph.min.js");
        this.scriptLoader.add("https://cdn.anychart.com/releases/8.8.0/js/anychart-data-adapter.min.js");
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
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * ビジネス関係図リストの設定を実行します。
     */
    execute = () => {
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