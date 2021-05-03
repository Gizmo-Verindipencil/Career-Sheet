/**
 * 資格データデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class QualificationRepository {
    /**
     * 資格データを取得します。
     * @return {Array<Object>} 資格データを返します。
     */
    getAll = () => {
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

    /**
     * 資格データを更新します。
     * @param {Object} qualification 資格データ。
     */
    post = qualification => {
        // dummy
    }
}

export { QualificationRepository };