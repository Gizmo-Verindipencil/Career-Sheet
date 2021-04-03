/**
 * 機種データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class DeviceRepository {
    /**
     * 機種データを取得します。
     * @return {Array<Object>} 機種データを返します。
     */
    getAll = () => {
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

    /**
     * 機種データを更新します。
     * @param {Object} device 機種データ。
     */
    post = device => {
        // dummy
    }
}

export { DeviceRepository };