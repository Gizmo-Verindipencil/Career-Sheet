/**
 * プラットフォームデータ関連のサービス（ダミー）
 */
class PlatformService {
    /**
     * プラットフォームデータを取得する
     * @return {Array<Object>} 全てのプラットフォームデータ
     */
    getAll = () => {
        return [
            {
                "id" : "1",
                "name" : "xCute",
                "description" : "MicroLab社が開発したWEBアプリケーションプラットフォーム。Excelで開発して、ホストするサーバー上ではExcelが稼働するという特徴的な製品。ノンコーディングが強調されることがあるが、凝ったものを作ろうとすると、ExcelのセルにJavaScriptやhtmlを記述する必要が出てくる。"
            },
            {
                "id" : "2",
                "name" : "Forguncy",
                "description" : "GrapeCity社が提供するWEBアプリケーションプラットフォーム。Excelライクでノンコーディングに開発することがウリ。シンプルな機能を作るのは高速だが、複雑な機能を作るとなると難がある。バグ多数あり、バージョン管理ソフトに非対応（バイナリ形式、もしくは要素の順番がランダムに変わるXML形式でしか保存不可）等の欠点あり。※Forguncy3.5時点。"
            },
            {
                "id" : "3",
                "name" : "ASTERIA Warp",
                "description" : "Asteria社が提供するデータ連携基盤。GUIの開発ツールを使って、システム間のデータ連携を定義する。"
            },
            {
                "id" : "4",
                "name" : "intra-mart",
                "description" : "NTTデータ社が提供するWEBアプリケーションプラットフォーム。開発言語はJava/JavaScript。"
            }
        ];
    }
}