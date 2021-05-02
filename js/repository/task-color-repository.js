/**
 * 作業テーマ色データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class TaskColorRepository {
    /**
     * 作業テーマ色データを取得します。
     * @return {Array<Object>} 作業テーマ色データを返します。
     */
    getAll = () => {
        return [
            {
                "id" : "DevUP",
                "start" : "#7cff7c",
                "end" : "#2caf2c"
            },
            {
                "id" : "DevMP",
                "start" : "#89d2ff",
                "end" : "#3982af"
            },
            {
                "id" : "DevLP",
                "start" : "#ffff4b",
                "end" : "#afaf00"
            },
            {
                "id" : "RW",
                "start" : "#f89949",
                "end" : "#a84900"
            },
            {
                "id" : "O",
                "start" : "#ffffff",
                "end" : "#afafaf"
            }
        ];
    }
}

export { TaskColorRepository };