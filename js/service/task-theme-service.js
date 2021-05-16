import { TaskTypeRepository } from "../repository/task-type-repository.min.js";
import { TaskThemeRepository } from "../repository/task-theme-repository.min.js";

/**
 * 作業テーマのサービスを提供します。
 */
class TaskThemeService {
    /**
     * 作業テーマデータを取得します。
     * @param {String} taskTypeId 作業種類データの識別子。
     * @returns {Object} 作業テーマデータを返します。該当データがない場合、nullを返します。
     */
     getByTaskTypeId = taskTypeId => {
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

export { TaskThemeService };