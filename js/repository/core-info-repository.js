/**
 * 基本情報データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class CoreInfoRepository {
    /**
     * 基本情報データを取得します。
     * @return {Object} 基本情報データを返します。
     */
    get = () => {
        return {
            "familyName" : "Ｋ",
            "lastName" : "Ｎ",
            "phoneticFamilyName" : "カ＊＊＊",
            "phoneticLastName" : "ノ＊＊",
            "birth" : "1992-8-4",
            "joiningCurrentCompany" : "2015-3-21",
            "sex" : "男",
            "address" : {
                "zipCode" : "183-0011", 
                "prefecture" : "東京都",
                "municipality" : "府中市"
            },
            "localStation" : {
                "line" : "京王",
                "name" : "武蔵野台"
            },
            "academicBackground" : {
                "education" : "近畿大学　経済学部　国際経済学科",
                "educationDate" : "2015-3-1",
                "other" : "",
                "otherDate" : ""
            }
        };
    }

    /**
     * 基本情報データを更新します。
     * @param {Object} coreInfo 基本情報データ。
     */
    post = coreInfo => {
        // dummy
    }
}

export { CoreInfoRepository };