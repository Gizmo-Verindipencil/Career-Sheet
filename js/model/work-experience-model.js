import { WorkExperienceRepository } from "../repository/work-experience-repository.js";
import { TaskTypeRepository } from "../repository/task-type-repository.js";
import { TaskThemeRepository } from "../repository/task-theme-repository.js";

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

    /**
     * 作業テーマデータを取得します。
     * @param {String} taskTypeId 作業種類データの識別子。
     * @returns {Object} 作業テーマデータを返します。該当データがない場合、nullを返します。
     */
     getTaskThemeByTaskTypeId = taskTypeId => {
        // 作業種類データを取得
        const typeRepository = new TaskTypeRepository();
        const types = typeRepository.getAll().filter(x => x.id === taskTypeId);

        // 該当データがなければnullを返す
        if (types.length === 0) {
            return null;
        }

        // 作業テーマデータを取得
        const themeId = types[0].themeId;
        const themeRepository = new TaskThemeRepository();
        const themes = themeRepository.getAll().filter(x => x.id === themeId);

        // 該当の作業テーマデータを返す
        return themes.length > 0 ? themes[0] : null;
    }
}

export { WorkExperienceModel };