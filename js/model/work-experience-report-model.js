import { WorkExperienceRepository } from "../repository/work-experience-repository.js";

/**
 * 職務経歴レポートのモデルを提供します。
 */
class WorkExperienceReportModel {
    /**
     * 職務経歴データを取得します。
     * @param {String} no 職務経歴番号。
     * @returns {Array<Object>} 職務経歴データを返します。該当データがない場合、nullを返します。
     */
    getWorkExperienceByNo = no => {
        // データを取得
        const repository = new WorkExperienceRepository();
        return repository.getByNo(no);
    }
}

export { WorkExperienceReportModel };