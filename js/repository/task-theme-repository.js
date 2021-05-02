/**
 * 作業テーマ色データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class TaskThemeRepository {
    /**
     * 作業テーマ色データを取得します。
     * @return {Array<Object>} 作業テーマ色データを返します。
     */
    getAll = () => {
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

export { TaskThemeRepository };