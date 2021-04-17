/**
 * 作業分類データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class TaskCategoryRepository {
    /**
     * 作業分類データを取得します。
     * @return {Array<Object>}　作業分類データを返します。
     */
    getAll = () => {
        return [
            {
                "id" : "DevUP",
                "name" : {
                    "en" : "Upper Process",
                    "ja" : "開発-上流工程"
                },
                "description" : "要件定義・システム設計・見積、等"
            },
            {
                "id" : "DevMP",
                "name" : {
                    "en" : "Middle Process",
                    "ja" : "開発-中流工程"
                },
                "description" : "ソフトウェア設計・プログラミング・単体テスト、等"
            },
            {
                "id" : "DevLP",
                "name" : {
                    "en" : "Lower Process",
                    "ja" : "開発-下流工程"
                },
                "description" : "結合テスト・総合テスト・システム構築、等"
            },
            {
                "id" : "RW",
                "name" : {
                    "en" : "Routine Work",
                    "ja" : "定例作業"
                },
                "description" : "一定の期間で繰り返し行う作業"
            },
            {
                "id" : "O",
                "name" : {
                    "en" : "Other",
                    "ja" : "その他"
                },
                "description" : "開発プロジェクトで分類不可能な作業"
            }
        ];
    }
}

export { TaskCategoryRepository };