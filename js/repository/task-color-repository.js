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
                "start" : "#CCFFCC",
                "end" : "#7CAF7C"
            },
            {
                "id" : "DevMP",
                "start" : "#CCECFF",
                "end" : "#7C9CAF"
            },
            {
                "id" : "DevLP",
                "start" : "#FFFFCC",
                "end" : "#AFAF7C"
            },
            {
                "id" : "RW",
                "start" : "#FCD5B4",
                "end" : "#AC8564"
            },
            {
                "id" : "O",
                "start" : "#D9D9D9",
                "end" : "#898989"
            }
        ];
    }
}

export { TaskColorRepository };