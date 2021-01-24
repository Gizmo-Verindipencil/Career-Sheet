/**
 * OSデータ関連のリポジトリ（ダミー）
 */
class OsRepository {
    /**
     * OSデータを取得する
     * @return {Array<Object>} 全てのOSデータ
     */
    getAll = () => {
        return [
            {
                "id" : "1",
                "name" : "Windows 7",
                "description" : "Microsoft社の提供するWindowsシリーズのOS。2009年リリース。"
            },
            {
                "id" : "2",
                "name" : "Windows 8",
                "description" : "Microsoft社の提供するWindowsシリーズのOS。2012年リリース。"
            },
            {
                "id" : "3",
                "name" : "Windows 10",
                "description" : "Microsoft社の提供するWindowsシリーズのOS。2015年リリース。"
            }
        ];
    }

    /**
     * OSデータを更新する
     * @param {Object} os OSデータ
     */
    post = os => {
        // dummy
    }
}