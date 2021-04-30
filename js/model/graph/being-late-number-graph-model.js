import { WorkingHoursRepository } from "../../repository/working-hours-repository.js";
import { Utility } from "../../shared/utility.js";

/**
 * 遅刻回数グラフのモデルを提供します。
 */
class BeingLateNumberGraphModel {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        const repository = new WorkingHoursRepository();
        this.records = repository.getAll();
    }

    /**
     * 遅刻回数の実績値を取得します。
     * @returns {Array<Object>} 遅刻回数の実績値を返します。
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
     * 遅刻回数の移動平均を取得します。
     * @returns {Array<Object>} 遅刻回数の移動平均を返します。
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
     * 遅刻回数の全体平均を取得します。
     * @returns {Array<Object>} 遅刻回数の平均を返します。
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

export { BeingLateNumberGraphModel };