/**
 * ユーザーデータのデータストアを提供します。
 * データベース等のデータストアを表すダミーです。
 */
class UserDataStore {
    /**
     * ユーザーデータを取得します。
     * @return {Object} ユーザーデータを返します。
     */
    get = () => {
        return {
            "userId" : "1",
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

export { UserDataStore };