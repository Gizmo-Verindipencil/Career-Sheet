/**
 * その他技術データのデータストアを提供します。
 * データベース等のデータストアを表すダミーです。
 */
class OtherDataStore {
    /**
     * その他技術データを取得します。
     * @return {Array<Object>} その他技術データを返します。
     */
    get = () => {
        return [
            {
                "id" : "1",
                "name" : "Active Report",
                "description" : "GrapeCity社が提供する帳票作成コンポーネント。"
            },
            {
                "id" : "2",
                "name" : "Subversion",
                "description" : "オープンソースのバージョン管理ツール。"
            },
            {
                "id" : "3",
                "name" : "Excel Creator",
                "description" : "AdvanceSoftware社が提供するExcel操作ツール。パフォーマンスに優れるのがウリらしい。"
            },
            {
                "id" : "4",
                "name" : "Spread",
                "description" : "GrapeCity社が提供するExcelライクな表コンポーネント。"
            },
            {
                "id" : "5",
                "name" : "Crystal Report",
                "description" : "CrystalDecisions社が開発した帳票作成ツール。開発元はSAPに買収された。"
            },
            {
                "id" : "6",
                "name" : "Visual SourceSafe",
                "description" : "Microsoft社が提供するバージョン管理ツール。ライセンス販売は終了している。後続製品はTeam Foundation Server。"
            },
            {
                "id" : "7",
                "name" : "JQuery formBuilder",
                "description" : "Kevin Chappell氏が提供するJQueryプラグイン。ドラッグ&ドロップでのWEB画面を作成する機能を提供。"
            },
            {
                "id" : "8",
                "name" : "Packery",
                "description" : "David DaSandro氏が提供するJQueryプラグイン。ドラッグ&ドロップでの動かせる隙間のないWEBレイアウト(瓶詰めレイアウト)を実現できる。"
            },
            {
                "id" : "9",
                "name" : "shopify draggable",
                "description" : "Spofy氏が提供するJavaScriptライブラリ。独自のドラッグ&ドロップを拡張するのに役立つ。2021年3月時点では、更新が止まっている。"
            },
            {
                "id" : "10",
                "name" : "interact.js",
                "description" : "taye氏が提供するJavaScriptライブラリ。ドラッグ&ドロップを利用する為のものだが、APIを通してイベント・ポイントが提供される為「より自由度が高い」と謳っている。"
            }
        ];
    }
}

export { OtherDataStore };