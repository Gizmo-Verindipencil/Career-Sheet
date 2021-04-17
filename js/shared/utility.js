/**
 * ユーティリティ処理を提供します。
 */
class Utility {
    /**
     * 指定時間の待機します。
     * @param {Number} millisecond 待機時間(ミリ秒)
     * @returns {Promise} ダミー。
     */
    static sleep = millisecond => {
        return new Promise(resolve => setTimeout(resolve, millisecond));
    }

    /**
     * 指数平滑移動平均(EMA)を計算します。
     * @param {Array<Number>} array 計算元の数値。
     * @param {Number} range 平均する範囲。
     * @returns {Array<Number>} 計算結果を返します。
     */
    static calculateEMA = (array, range) => {
        const k = 2 / (range + 1);
        const eMA = [ array[0] ];
        for (let i = 1; i < array.length; i++) {
            const value = array[i] * k + eMA[i - 1] * (1 - k);
            eMA.push(value);
        }
        return eMA;
    }
}

export { Utility };