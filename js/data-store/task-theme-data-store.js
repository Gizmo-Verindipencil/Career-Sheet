/**
 * 作業テーマデータのデータストアを提供します。
 * データベース等のデータストアを表すダミーです。
 */
class TaskThemeDataStore {
    /**
     * 作業テーマデータを取得します。
     * @return {Array<Object>} 作業テーマデータを返します。
     */
    get = () => {
        return [
            {
                "id" : "DevUP",
                "foreColor" : "#7cff7c",
                "backgroundColor" : "#005009"
            },
            {
                "id" : "DevMP",
                "foreColor" : "#89d2ff",
                "backgroundColor" : "#00629e"
            },
            {
                "id" : "DevLP",
                "foreColor" : "#ffff4b",
                "backgroundColor" : "#565e00"
            },
            {
                "id" : "RW",
                "foreColor" : "#f89949",
                "backgroundColor" : "#753850"
            },
            {
                "id" : "O",
                "foreColor" : "#ffffff",
                "backgroundColor" : "#474747"
            }
        ];
    }
}

export { TaskThemeDataStore };