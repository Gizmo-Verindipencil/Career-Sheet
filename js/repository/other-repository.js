/**
 * その他データ関連のサービス（ダミー）
 */
class OtherRepository {
    /**
     * その他データを取得する
     * @return {Array<Object>} 全てのその他データ
     */
    getAll = () => {
        return [
            {
                "id" : "1",
                "name" : "Active Report",
                "description" : "GrapeCity社が提供する帳票作成コンポーネント。"
            },
            {
                "id" : "2",
                "name" : "Biz Browser",
                "description" : "OpenStream社が提供するWEBアプリケーションプラットフォーム。リッチクライアントが特徴。"
            },
            {
                "id" : "3",
                "name" : "Subversion",
                "description" : "オープンソースのバージョン管理ツール。"
            },
            {
                "id" : "4",
                "name" : "Excel Creator",
                "description" : "AdvanceSoftware社が提供するExcel操作ツール。パフォーマンスに優れるのがウリらしい。"
            },
            {
                "id" : "5",
                "name" : "Spread",
                "description" : "GrapeCity社が提供するExcelライクな表コンポーネント。"
            },
            {
                "id" : "6",
                "name" : "Crystal Report",
                "description" : "CrystalDecisions社が開発した帳票作成ツール。開発元はSAPに買収された。"
            },
            {
                "id" : "7",
                "name" : "Visual SourceSafe",
                "description" : "Microsoft社が提供するバージョン管理ツール。ライセンス販売は終了している。後続製品はTeam Foundation Server。"
            },
            {
                "id" : "8",
                "name" : "JQuery",
                "description" : "オープンソースのJavaScriptライブラリ。コードの記述を簡素化できる。"
            }
        ];
    }
}