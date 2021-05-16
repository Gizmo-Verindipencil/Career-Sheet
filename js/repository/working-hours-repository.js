import { WorkingHoursDataStore } from "../data-store/working-hours-data-store.min.js";

/**
 * 労働時間データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class WorkingHoursRepository {
    /**
     * 労働時間データを取得します。
     * @return {Array<Object>} 労働時間データを返します。
     */
    getAll = () => {
        const dataStore = new WorkingHoursDataStore();
        return dataStore.get();
    }

    /**
     * ビジネス関係データを取得します。
     * @param {String} id 識別子。
     * @return {Object} ビジネス関係データを返します。該当データがない場合、nullを返します。
     */
    getByYearMonth = (year, month) => {
        const dataStore = new WorkingHoursDataStore();
        const workingHours = dataStore.get().filter(x => x.year === year && x.month === month);
        return workingHours.length > 0 ? workingHours[0] : null;
    }

    /**
     * 労働時間データを更新します。
     * @param {Object} workingHours 労働時間データ。
     */
    post = workingHours => {
        // dummy
    }
}

export { WorkingHoursRepository };