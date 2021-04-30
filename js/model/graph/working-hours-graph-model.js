import { WorkingHoursRepository } from "../../repository/working-hours-repository.js";
import { Utility } from "../../shared/utility.js";

/**
 * 労働時間グラフのモデルを提供します。
 */
class WorkingHoursGraphModel {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        const repository = new WorkingHoursRepository();
        this.records = repository.getAll();
    }

    /**
     * 指定した項目を取得します。
     * @param {String} name 取得する項目の名前。
     * @returns {Array<Object>} 値を返します。
     */
    getValues = name => {
        const data = [];
        for(const record of this.records) {
            data.push({
                yearMonth: `${record.year}-${record.month}`,
                value: record[name]
            });
        }
        return data;
    }

    /**
     * 実績労働時間を取得します。
     * @returns {Array<Object>} 実績労働時間を返します。
     */
    getActual = () => {
        return this.getValues("actualWorkingHours");
    }

    /**
     * 計画労働時間を取得します。
     * @returns {Array<Object>} 計画労働時間を返します。
     */
    getPrescribed = () => {
        return this.getValues("prescribedWorkingHours");
    }

    /**
     * 指定した項目の移動平均を取得します。
     * @param {String} name 取得する項目の名前。
     * @returns {Array<Object>} 移動平均を返します。
     */
    getEMA = name => {
        const eMAs = Utility.calculateEMA(this.records.map(x => x[name]), 12);
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
     * 実績労働時間の移動平均を取得します。
     * @returns {Array<Object>} 実績労働時間の移動平均を返します。
     */
    getActualEMA = () => {
        return this.getEMA("actualWorkingHours");
    }

    /**
     * 計画労働時間の移動平均を取得します。
     * @returns {Array<Object>} 計画労働時間の移動平均を返します。
     */
    getPrescribedEMA = () => {
        return this.getEMA("prescribedWorkingHours");
    }

    /**
     * 指定した項目の平均を取得します。
     * @param {String} name 取得する項目の名前。
     * @returns {Array<Object>} 平均を返します。
     */
    getAverage = name => {
        const average = Utility.calculateAverage(this.records.map(x => x[name]));
        const data = [];
        for(const record of this.records) {
            data.push({
                yearMonth: `${record.year}-${record.month}`,
                value: average
            });
        }
        return data;
    }

    /**
     * 実績労働時間の移動平均を取得します。
     * @returns {Array<Object>} 実績労働時間の移動平均を返します。
     */
    getActualAverage = () => {
        return this.getAverage("actualWorkingHours");
    }

    /**
     * 計画労働時間の移動平均を取得します。
     * @returns {Array<Object>} 計画労働時間の移動平均を返します。
     */
    getPrescribedAverage = () => {
        return this.getAverage("prescribedWorkingHours");
    }
}

export { WorkingHoursGraphModel };