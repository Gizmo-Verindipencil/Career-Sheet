/**
 * 機種データのデータストアを提供します。
 * データベース等のデータストアを表すダミーです。
 */
class DeviceDataStore {
    /**
     * 機種データを取得します。
     * @return {Array<Object>} 機種データを返します。
     */
    get = () => {
        return [
            {
                "id" : "1",
                "name" : "PC",
                "description" : "一般的なパソコン（デスクトップ/ノート）。"
            },
            {
                "id" : "2",
                "name" : "ハンディターミナル",
                "description" : "小型で携帯性に優れたバーコード読込機能付きの端末。"
            }    
        ];
    }
}

export { DeviceDataStore };