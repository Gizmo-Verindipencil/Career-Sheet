/**
 * 資格データ関連のリポジトリ（ダミー）
 */
class QualificationRepository {
    /**
     * 資格データを取得する
     * @return {Array<Object>} 資格データ
     */
    getAll = () => {
        return [
            {
                "name" : "基本情報技術者",
                "score" : ""
            },
            {
                "name" : "TOEIC",
                "score" : "625"
            },
            {
                "name" : "Microsoft Office Specialist Excel 2007",
                "score" : ""
            },
            {
                "name" : "Microsoft Office Specialist Access 2010",
                "score" : ""
            }
        ];
    }

    /**
     * 資格データを更新する
     * @param {Object} qualification 資格データ
     */
    post = qualification => {
        // dummy
    }
}

export { QualificationRepository };