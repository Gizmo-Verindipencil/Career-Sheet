/**
 * OSデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class OsRepository {
    /**
     * OSデータを取得します。
     * @return {Array<Object>} OSデータを返します。
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
     * OSデータを更新します。
     * @param {Object} os OSデータ。
     */
    post = os => {
        // dummy
    }
}

export { OsRepository };