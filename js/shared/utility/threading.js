/**
 * スレッド関連のユーティリティ処理を提供します。
 */
class Threading {
    /**
     * 指定時間の待機します。
     * @param {Number} millisecond 待機時間(ミリ秒)。
     * @returns {Promise} ダミー。
     */
    static sleep = millisecond => {
        return new Promise(resolve => setTimeout(resolve, millisecond));
    }
}

export { Threading };