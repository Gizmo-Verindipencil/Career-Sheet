/**
 * ユーティリティ処理を提供します。
 */
class Utility {
    /**
     * 指定時間の待機します。
     * @param {Number} millisecond 待機時間(ミリ秒)
     * @returns {Promise} ダミー。
     */
    static sleep = (millisecond) => {
        return new Promise(resolve => setTimeout(resolve, millisecond));
    }
}

export { Utility };