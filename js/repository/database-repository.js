/**
 * DBデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class DatabaseRepository {
    /**
     * DBデータを取得します。
     * @return {Array<Object>} DBデータを返します。
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

    /**
     * DBデータを更新します。
     * @param {Object} db DBデータ。
     */
    post = db => {
        // dummy
    }
}

export { DatabaseRepository };