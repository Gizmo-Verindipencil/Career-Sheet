/**
 * 機種データ関連のリポジトリ（ダミー）
 */
class DeviceRepository {
    /**
     * 機種データを取得する
     * @return {Array<Object>} 全ての機種データ
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
     * 機種データを更新する
     * @param {Object} device 機種データ
     */
    post = device => {
        // dummy
    }
}