import { WorkingHoursDataStore } from "../data-store/working-hours-data-store.js";

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
     * 労働時間データを更新します。
     * @param {Object} workingHours 労働時間データ。
     */
    post = workingHours => {
        // dummy
    }
}

export { WorkingHoursRepository };