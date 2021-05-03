/**
 * 資格データのデータストアを提供します。
 * データベース等のデータストアを表すダミーです。
 */
class QualificationDataStore {
    /**
     * 資格データを取得します。
     * @return {Array<Object>} 資格データを返します。
     */
    get = () => {
        return [
            {
                "userId" : "1",
                "name" : "基本情報技術者",
                "score" : ""
            },
            {
                "userId" : "1",
                "name" : "TOEIC",
                "score" : "625"
            },
            {
                "userId" : "1",
                "name" : "Microsoft Office Specialist Excel 2007",
                "score" : ""
            },
            {
                "userId" : "1",
                "name" : "Microsoft Office Specialist Access 2010",
                "score" : ""
            }
        ];
    }
}

export { QualificationDataStore };