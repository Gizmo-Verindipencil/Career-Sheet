/**
 * ユーティリティ処理
 */
class Utility {
    /**
     * 指定時間の待機
     * @param {Number} millisecond 待機時間(ミリ秒)
     * @returns {Promise} ダミー
     */
    static sleep = (millisecond) => {
        return new Promise(resolve => setTimeout(resolve, millisecond));
    }
}

export { Utility };