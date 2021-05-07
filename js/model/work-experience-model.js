import { WorkExperienceRepository } from "../repository/work-experience-repository.js";
import { TaskTypeRepository } from "../repository/task-type-repository.js";
import { TaskThemeService } from "../service/task-theme-service.js";

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
     * ソート済の作業種類データの識別子を取得します。
     * @param {Array<String>} taskTypeIds 作業種類データの識別子。
     * @return {Array<String>} ソート済の作業種類データの識別子を返します。対応する作業種類データがない識別子は、末尾に配置されます。
     */
    getSortedTaskTypeIds = taskTypeIds => {
        // 作業種類データを取得
        const repository = new TaskTypeRepository();
        const cachedTypes = repository.getAll();

        // ソートの最大を取得
        const maxSort = Math.max(...cachedTypes.map(x => Number(x.sort)));

        // 作業種類データのソートを設定
        const sortOrder = [];
        for(const id of taskTypeIds) {
            const types = cachedTypes.filter(x => x.id === id);
            
            // 対応するデータが無ければ最後に表示
            sortOrder.push({
                id: id,
                sort: types.length > 0 ? types[0] : maxSort + 1
            });
        }

        // ソートの昇順で並べる
        sortOrder.sort((a, b) => {
            return a.sort > b.sort
        });

        // 識別子の配列で返す
        return sortOrder.map(x => x.id);
    }

    /**
     * 作業テーマデータを取得します。
     * @param {String} taskTypeId 作業種類データの識別子。
     * @returns {Object} 作業テーマデータを返します。該当データがない場合、nullを返します。
     */
     getTaskThemeByTaskTypeId = taskTypeId => {
        const service = new TaskThemeService();
        return service.getByTaskTypeId(taskTypeId);
    }
}

export { WorkExperienceModel };