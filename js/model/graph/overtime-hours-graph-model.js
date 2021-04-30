import { WorkingHoursRepository } from "../../repository/working-hours-repository.js";
import { Utility } from "../../shared/utility.js";

/**
 * 残業時間グラフのモデルを提供します。
 */
class OvertimeHoursGraphModel {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        const repository = new WorkingHoursRepository();
        this.records = repository.getAll();
    }

    /**
     * 残業時間の実績値を取得します。
     * @returns {Array<Object>} 残業時間の実績値を返します。
     */
    getActual = () => {
        const data = [];
        for(const record of this.records) {
            data.push({
                yearMonth: `${record.year}-${record.month}`,
                value: record.beingLate.count
            });
        }
        return data;
    }

    /**
     * 残業時間の移動平均を取得します。
     * @returns {Array<Object>} 残業時間の移動平均を返します。
     */
    getEMA = () => {
        const eMAs = Utility.calculateEMA(this.records.map(x => x.beingLate.count), 12);
        const data = [];
        for(let i = 0; i < this.records.length; i++) {
            data.push({
                yearMonth: `${this.records[i].year}-${this.records[i].month}`,
                value: eMAs[i]
            });
        }
        return data;
    }

    /**
     * 残業時間の全体平均を取得します。
     * @returns {Array<Object>} 残業時間の平均を返します。
     */
    getAverage = () => {
        const average = Utility.calculateAverage(this.records.map(x => x.beingLate.count));
        const data = [];
        for(const record of this.records) {
            data.push({
                yearMonth: `${record.year}-${record.month}`,
                value: average
            });
        }
        return data;
    }
}

export { OvertimeHoursGraphModel };