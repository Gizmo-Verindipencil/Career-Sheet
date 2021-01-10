/**
 * OSデータ関連のサービス（ダミー）
 */
class OsService {
    /**
     * OSデータを取得する
     * @return {Array<Object>} 全てのOSデータ
     */
    getAll = () => {
        return [
            {
                "no" : "1",
                "name" : "Windows 7",
                "description" : "Microsoft社の提供するWindowsシリーズのOS。2009年リリース。"
            },
            {
                "no" : "2",
                "name" : "Windows 8",
                "description" : "Microsoft社の提供するWindowsシリーズのOS。2012年リリース。"
            },
            {
                "no" : "3",
                "name" : "Windows 10",
                "description" : "Microsoft社の提供するWindowsシリーズのOS。2015年リリース。"
            }
        ];
    }
}