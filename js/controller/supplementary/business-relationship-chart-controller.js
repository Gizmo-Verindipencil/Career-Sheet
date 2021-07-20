import { createInstance } from "../../keyword/create-instance.min.js";
import { Buildable } from "../../interface/buildable.min.js";
import { BusinessRelationshipChartModel } from "../../model/supplementary/business-relationship-chart-model.min.js";
import { Threading } from "../../shared/utility/threading.min.js";
import { PageColorAdjuster } from "../../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../../shared/script-series-loader.min.js";

/**
 * ビジネス関係図のコントローラーを提供します。
 */
class BusinessRelationshipChartController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new BusinessRelationshipChartModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", "jQuery");
        this.scriptLoader.add("https://cdn.anychart.com/releases/8.10.0/js/anychart-bundle.min.js", "anychart");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {BusinessRelationshipChartController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new BusinessRelationshipChartController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await Threading.sleep(2000);
        }
        return controller;
    }

    /**
     * ビジネス関係図の設定を実行します。
     */
    execute = async() => {
        // チャート図を設定
        await this.setChart();

        // 色を調整
        const adjuster = await createInstance(PageColorAdjuster);
        adjuster.changeBackgroundColor();

        // 読込完了をページに反映
        $("body").addClass("loaded");
    }

    /**
     * ビジネス関係を示すチャート図をページに設定します。
     */
    setChart = async() => {
        // ビジネス関係データを取得
        const params = new URLSearchParams(document.location.search.substring(1));
        const id = params.get("id");
        const relationship = this.model.getBusinessRelationshipById(id);

        // データがなければその旨を表示
        if (!relationship) {
            $("#chart-node-description").append("<p>NO DATA</p>");
            return;
        }
        
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
        const chart = anychart.graph(data);

        // ノード説明をセット
        this.setNodeDescription(relationship);

        // ノード外観をセット
        const nodes = chart.nodes();
        nodes.normal().height(50);
        nodes.hovered().height(60);
        nodes.hovered().fill("#ffa000");
        nodes.hovered().stroke("#333333", 2);
        nodes.selected().height(60);
        nodes.selected().fill("#ffa000");
        nodes.selected().stroke("#333333", 2);
        
        // 図の描画
        chart.container("chart-container").draw();
    }

    /**
     * ノード説明の設定を行います。
     * @param {Object} relationship ビジネス関係データ。
     */
    setNodeDescription = relationship => {
        for(let node of relationship.nodes) {
            const style = "float:left;padding-left:1rem;";
            const description = `<p style='${style}'>${node.id}:${node.description}</p>`;
            $("#chart-node-description").append(description);
        }
    }
}

export { BusinessRelationshipChartController };