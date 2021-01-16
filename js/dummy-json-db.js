/**
 * DBデータ関連のサービス（ダミー）
 */
class DbService {
    /**
     * DBデータを取得する
     * @return {Array<Object>} 全てのDBデータ
     */
    getAll = () => {
        return [
            {
                "id" : "1",
                "name" : "Access",
                "description" : "Microsoft社の提供するデータベース管理ツール。小規模なシステム向け。"
            },
            {
                "id" : "2",
                "name" : "SQL-Server",
                "description" : "Microsoft社の提供するデータベース管理システム。"
            },
            {
                "id" : "3",
                "name" : "Oracle",
                "description" : "Oracle社の提供するデータベース管理システム。"
            },
            {
                "id" : "4",
                "name" : "SQLite",
                "description" : "パブリックドメインのデータベース。軽量でサーバー不要。"
            }
        ];
    }
}