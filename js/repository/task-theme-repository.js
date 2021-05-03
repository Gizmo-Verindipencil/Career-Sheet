import { TaskThemeDataStore } from "../data-store/task-theme-data-store.js";

/**
 * 作業テーマ色データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class TaskThemeRepository {
    /**
     * 作業テーマ色データを取得します。
     * @return {Array<Object>} 作業テーマ色データを返します。
     */
    getAll = () => {
        const dataStore = new TaskThemeDataStore();
        return dataStore.get();
    }
}

export { TaskThemeRepository };