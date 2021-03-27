/**
 * プログラミング言語データ関連のリポジトリ（ダミー）
 */
class ProgrammingLanguageRepository {
    /**
     * プログラミング言語データを取得する
     * @return {Array<Object>} 全てのプログラミング言語データ
     */
    getAll = () => {
        return [
            {
                "id" : "1",
                "name" : "VBA",
                "description" : "Microsoft社のOffice製品上で動作するプログラミング言語。Excel・Word・Access等でよく使われる。小規模なツールなどを作るのに使われることが多い。"
            },
            {
                "id" : "2",
                "name" : "VBScript",
                "description" : "Microsoft社のWindows上で動作するスクリプト言語。Classic ASPのサーバーサイドの標準言語としても採用されていた。ブラウザ上でも動作するが、対応ブラウザがInternet Explorerのみ。"
            },
            {
                "id" : "3",
                "name" : "C#.NET",
                "description" : "Microsoft社が提供する.NET構想の中心的なプログラミング言語。"
            },
            {
                "id" : "4",
                "name" : "Java",
                "description" : "Oracle社の提供するプログラミング言語。"
            },
            {
                "id" : "5",
                "name" : "JavaScript",
                "description" : "ブラウザ上で動作するプログラミング言語。WEBアプリケーションのクライアントサイドで使われることが多いが、それ以外にもサーバーサイドの処理やデスクトップアプリケーションの作成といったように利用は多岐に渡る。"
            },
            {
                "id" : "6",
                "name" : "VB6.0",
                "description" : "Microsoft社が提供していたプログラミング言語。2008年に延長サポートが終了している。業務システムで2000年前後に開発されたものに採用されていることが多い。"
            },
            {
                "id" : "7",
                "name" : "VB.NET",
                "description" : "VB6.0の後継となるプログラミング言語。C#と比較して採用するメリットがないことから、新規開発では殆ど見かけない。2018年時点で、ユーザーのボリューム層が50代らしい、この言語で記述するラムダ式は特徴的で、殆ど見かけることがない。"
            },
            {
                "id" : "8",
                "name" : "CRS",
                "description" : "OpenStream社が提供するWEBプラットフォーム「Biz-Browser」のクライアントサイドスクリプト言語。正式名称はChain Reflection Script。コードの外観はJavaScriptに近い。"
            },
            {
                "id" : "9",
                "name" : "T-SQL",
                "description" : "Microsoft社が提供するSQL-Serverで使われるSQLの拡張仕様。正式名称はTransact-SQL。"
            },
            {
                "id" : "10",
                "name" : "PL/SQL",
                "description" : "Oracle社が提供するOracle Databaseで使われるSQLの拡張仕様。"
            },
            {
                "id" : "11",
                "name" : "UWSC",
                "description" : "umiumi氏が提供するWindows操作を自動化ツールで使われるスクリプト言語。略字の意味は「Umiumiが作った Windows SCript」ということらしい。2018年頃に公式サイトが消滅したので入手不可かつ作者も消息不明。企業で使われることは稀だが、デイトレーダーなどの個人ユーザーの間では未だにシェアが高いらしい。"
            }
        ];
    }

    /**
     * プログラミング言語データを更新する
     * @param {Object} programmingLanguage プログラミング言語データ
     */
    post = programmingLanguage => {
        // dummy
    }
}