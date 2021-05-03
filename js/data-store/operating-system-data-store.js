/**
 * OSデータのデータストアを提供します。
 * データベース等のデータストアを表すダミーです。
 */
class OperatingSystemDataStore {
    /**
     * OSデータを取得します。
     * @return {Array<Object>} OSデータを返します。
     */
    get = () => {
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
}

export { OperatingSystemDataStore };