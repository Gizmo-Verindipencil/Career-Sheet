import { WorkingHoursRepository } from "../../repository/working-hours-repository.min.js";

/**
 * 有給休暇グラフのモデルを提供します。
 */
class PaidLeaveGraphModel {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        const repository = new WorkingHoursRepository();
        this.records = repository.getAll();
    }

    /**
     * 有給休暇の実績値を取得します。
     * @returns {Array<Object>} 有給休暇の実績値を返します。
     */
    getActual = () => {
        const data = [];
        for(const record of this.records) {
            data.push({
                yearMonth: `${record.year}-${record.month}`,
                value: record.paidLeave
            });
        }
        return data;
    }
}

export { PaidLeaveGraphModel };