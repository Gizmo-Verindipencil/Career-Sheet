/**
 * 開発ツールデータ関連のサービス（ダミー）
 */
class DevelopmentToolRepository {
    /**
     * 開発ツールデータを取得する
     * @return {Array<Object>} 全ての開発ツールデータ
     */
    getAll = () => {
        return [
            {
                "id" : "1",
                "name" : "Visual Studio",
                "description" : "Microsoft社の提供する統合開発環境。"
            },
            {
                "id" : "2",
                "name" : "Excel",
                "description" : "Microsoft社の提供する表計算ソフト。一般的には開発ツールではないが、マイクロラボ社が開発したWEBプラットフォーム「xCute」の開発に使う。特定セルに決まったコマンドを記述したり、htmlやJavaScriptを記述するという独特なスタイルを持つ。"
            },
            {
                "id" : "3",
                "name" : "Forguncy Builder Pro",
                "description" : "GrapeCity社が提供するWEBプラットフォーム「Forguncy」の開発ツール。ノンコードがウリ。"
            },
            {
                "id" : "4",
                "name" : "Flow Designer",
                "description" : "Asteria社が提供するデータ連携基盤「ASTERIA Warp」に付随する開発ツール。プログラマーでなくともGUIでグラフィカルに処理を定義できると言うのがウリ。どちらかと言うと非開発者を対象としている。"
            },
            {
                "id" : "5",
                "name" : "e-Builder(Eclipse)",
                "description" : "NTTデータ社が提供するWEBプラットフォーム「intra-mart」の統合開発環境。Eclipseをベースに機能を追加してスキンを変えたような内容なので、実質的にEclipseと言える。"
            },
            {
                "id" : "6",
                "name" : "Oracle Enterprise Manager Console",
                "description" : "Oracle社が提供するOracleデータベース用の管理ツール。"
            },
            {
                "id" : "7",
                "name" : "SQL Developer",
                "description" : "Oracle社が提供するSQL開発ツール。"
            },
            {
                "id" : "8",
                "name" : "A5:SQL Mk-2",
                "description" : "松原正和氏が提供するフリーのSQL開発ツール。フリーソフトではあるものの、一通りの機能が揃っていることから色々な現場で見かける。"
            },
            {
                "id" : "9",
                "name" : "SQL Server Management Studio",
                "description" : "Microsoft社が提供するSQL Server用の管理ツール。"
            }
        ];
    }
}