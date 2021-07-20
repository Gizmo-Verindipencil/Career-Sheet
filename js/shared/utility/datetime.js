/**
 * 日時関連のユーティリティ処理を提供します。
 */
class Datetime {
    /**
     * 日付表現(yyyy-mm-dd)から日数を取得します。
     * これは目安の日数であり、正確な数値ではありません。
     * @param {string} expression 日付表現(yyyy-mm-dd)。
     * @returns {Number} 日数を返します。
     */
    static getNumberOfDays = expression => {
        const delimiter = "-";
        const delimited = expression.split(delimiter);
        const date = new Date(delimited[0], delimited[1], delimited[2]);
        const daysOfYear = 365;
        const daysOfMonth = 30;
        return date.getFullYear() * daysOfYear + (date.getMonth() + 1) * daysOfMonth + date.getDate();
    }
}

export { Datetime };