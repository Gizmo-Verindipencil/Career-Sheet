import { OperatingSystemRepository } from "../../repository/operating-system-repository.js";

/**
 * ヘルプ(OS)のモデルを提供します。
 */
class OperatingSystemHelpModel {
    /**
     * OSの一覧を取得します。
     * @returns {Array<Object>} OSデータを返します。
     */
    getOperatingSystems = () => {
        // データを取得
        const repository = new OperatingSystemRepository();
        const data = repository.getAll();

        // 名前の昇順で並べる
        data.sort((a, b) => {
            return a.name > b.name ? 1 : -1;
        });
        return data;
    }
}

export { OperatingSystemHelpModel };