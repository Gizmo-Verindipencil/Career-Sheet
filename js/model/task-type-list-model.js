import { TaskTypeRepository } from "../repository/task-type-repository.js";
import { TaskThemeRepository } from "../repository/task-theme-repository.js";

/**
 * 作業種類一覧のモデルを提供します。
 */
class TaskTypeListModel {
    /**
     * 作業種類データを取得します。
     * @returns {Array<Object>} 作業種類データを返します。
     */
    getTaskTypes = () => {
        const repository = new TaskTypeRepository();
        return repository.getAll();
    }

    /**
     * 作業テーマデータを取得します。
     * @param {String} id 識別子。
     * @returns {Object} 作業テーマデータを返します。該当データがない場合、nullを返します。
     */
    getTaskThemeById = id => {
        const repository = new TaskThemeRepository();
        const colors = repository.getAll().filter(x => x.id === id);
        return colors.length > 0 ? colors[0] : null;
    }
}

export { TaskTypeListModel };