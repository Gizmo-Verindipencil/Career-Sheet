/**
 * 基礎データ関連のサービス（ダミー）
 */
class BasicInfoRepository {
    /**
     * 基礎データを取得する
     * @return {Object} 基礎データ
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
}