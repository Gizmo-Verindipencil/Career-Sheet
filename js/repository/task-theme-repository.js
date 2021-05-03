import { TaskThemeDataStore } from "../data-store/task-theme-data-store.js";

/**
 * 作業テーマデータのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class TaskThemeRepository {
    /**
     * 作業テーマデータを取得します。
     * @return {Array<Object>} 作業テーマデータを返します。
     */
    getAll = () => {
        const dataStore = new TaskThemeDataStore();
        return dataStore.get();
    }

    /**
     * 作業テーマデータを取得します。
     * @param {String} id 識別子。
     * @return {Object} 作業テーマデータを返します。該当データがない場合、nullを返します。
     */
    getById = id => {
        const dataStore = new TaskThemeDataStore();
        const themes = dataStore.get().filter(x => x.id === id);
        return themes.length > 0 ? themes[0] : null;
    }

    /**
     * 作業テーマデータを更新します。
     * @param {Object} theme 作業テーマデータ。
     */
    post = theme => {
        // dummy
    }
}

export { TaskThemeRepository };