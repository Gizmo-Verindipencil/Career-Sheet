import { WorkExperienceRepository } from "../repository/work-experience-repository.js";

/**
 * 職務経歴のモデルを提供します。
 */
class WorkExperienceModel {
    /**
     * 作業種類データを取得します。
     * @returns {Array<Object>} 作業種類データを返します。
     */
    getTaskTypes = () => {
        const repository = new TaskTypeRepository();
        return repository.getAll();
    }

    /**
     * 職務経歴データを取得します。
     * @returns {Array<Object>} 職務経歴データを返します。
     */
    getWorkExperiences = () => {
        // データを取得
        const repository = new WorkExperienceRepository();
        const experiences = repository.getAll();

        // 最近の職歴から並べる
        experiences.sort((a, b) => {
            return b.no - a.no;
        });
        return experiences;
    }
}

export { WorkExperienceModel };