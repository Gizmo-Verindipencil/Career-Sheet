/**
 * 作業分類データのデータストアを提供します。
 * データベース等のデータストアを表すダミーです。
 */
class TaskCategoryDataStore {
    /**
     * 作業分類データを取得します。
     * @return {Array<Object>}　作業分類データを返します。
     */
    get = () => {
        return [
            {
                "id" : "DevUP",
                "name" : {
                    "en" : "Upper Process",
                    "ja" : "開発-上流工程"
                },
                "description" : "要件定義・システム設計・見積、等",
                "sort" : "1"
            },
            {
                "id" : "DevMP",
                "name" : {
                    "en" : "Middle Process",
                    "ja" : "開発-中流工程"
                },
                "description" : "ソフトウェア設計・プログラミング・単体テスト、等",
                "sort" : "2"
            },
            {
                "id" : "DevLP",
                "name" : {
                    "en" : "Lower Process",
                    "ja" : "開発-下流工程"
                },
                "description" : "結合テスト・総合テスト・システム構築、等",
                "sort" : "3"
            },
            {
                "id" : "RW",
                "name" : {
                    "en" : "Routine Work",
                    "ja" : "定例作業"
                },
                "description" : "一定の期間で繰り返し行う作業",
                "sort" : "4"
            },
            {
                "id" : "O",
                "name" : {
                    "en" : "Other",
                    "ja" : "その他"
                },
                "description" : "開発プロジェクトで分類不可能な作業",
                "sort" : "5"
            }
        ];
    }
}

export { TaskCategoryDataStore };