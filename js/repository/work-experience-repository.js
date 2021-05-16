import { WorkExperienceDataStore } from "../data-store/work-experience-data-store.min.js";

/**
 * 職務経歴データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class WorkExperienceRepository {
    /**
     * 職務経歴データを取得します。
     * @return {Array<Object>} 職務経歴データを返します。
     */
    getAll = () => {
        const dataStore = new WorkExperienceDataStore();
        return dataStore.get();
    }

    /**
     * 職務経歴データを取得します。
     * @param {String} no 経歴番号。
     * @return {Object} 職務経歴データを返します。該当データがない場合、nullを返します。
     */
    getByNo = no => {
        const dataStore = new WorkExperienceDataStore();
        const experiences = dataStore.get().filter(x => x.no === no);
        return experiences.length > 0 ? experiences[0] : null;
    }

    /**
     * 職務経歴データを更新します。
     * @param {Object} experience 職務経歴データ。
     */
    post = experience => {
        // dummy
    }
}

export { WorkExperienceRepository };