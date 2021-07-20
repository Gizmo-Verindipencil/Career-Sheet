/**
 * ユーティリティ処理を提供します。
 */
class Utility {
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

    /**
     * 平均を計算します。
     * @param {Array<Number>} array 計算元の数値。
     * @returns {Number} 平均を返します。
     */
    static calculateAverage = array => {
        // 合計を算出
        const total = array.reduce((sum, number) => {
            return Number(sum) + Number(number);
        });

        // 平均を算出
        return total / array.length;
    }
}

export { Utility };