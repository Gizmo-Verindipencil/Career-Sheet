/**
 * フレームワークデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class FrameworkRepository {
    /**
     * フレームワークデータを取得します。
     * @return {Array<Object>} フレームワークデータを返します。
     */
    getAll = () => {
        return [
            {
                "id" : "1",
                "name" : "ASP.NET",
                "description" : "Microsoft社が提供するWebアプリケーションフレームワーク。"
            },
            {
                "id" : "2",
                "name" : "独自基盤1",
                "description" : "A社で開発された独自のアプリケーションフレームワーク。"
            },
            {
                "id" : "3",
                "name" : "独自基盤2",
                "description" : "B社の発注元の開発ベンダーであるN社由来の独自のアプリケーションフレームワーク。GUIアーキテクチャとしてMVVMを採用。"
            },
            {
                "id" : "4",
                "name" : "Dapper",
                "description" : "Microsoft社が提供する.NETプラットフォーム用のオブジェクトマッパー。"
            },
            {
                "id" : "5",
                "name" : "GrapesJs",
                "description" : "Artur Arseniev氏が提供するWEB画面構築フレームワーク。"
            }
        ];
    }

    /**
     * フレームワークデータを更新します。
     * @param {Object} framework フレームワークデータ。
     */
    post = framework => {
        // dummy
    }
}

export { FrameworkRepository };