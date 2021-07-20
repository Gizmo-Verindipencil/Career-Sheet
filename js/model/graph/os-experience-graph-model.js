import { WorkExperienceRepository } from "../../repository/work-experience-repository.js";
import { DatetimeUtility } from "../../shared/utility/datetime-utility.min.js";

/**
 * OS経験グラフのモデルを提供します。
 */
class OsExperienceGraphModel {
    /**
     * OS経験を取得します。
     * @returns {Object} 集計結果(プロパティ名：OS、値：経験日数)を返します。
     */
    getDatabaseExperience = () => {
        // 職務経歴データを取得
        const repository = new WorkExperienceRepository();
        const experiences = repository.getAll();

        // 職務経歴毎のOSを集計
        const data = {};
        for(const experience of experiences) {
            // プログラミングが未設定の場合は集計対象
            if (!experience.os || experience.os.length === 0) continue;

            // 未完了案件の場合は集計対象
            if (!experience.period.from || !experience.period.to) continue;

            // 期間を取得
            const from = DatetimeUtility.getNumberOfDays(experience.period.from);
            const to = DatetimeUtility.getNumberOfDays(experience.period.to);
            const days = to - from;

            // OS毎に日数を加算
            for(const name of experience.os) {
                // 初回集計時は追加
                if (!data[name]) {
                    data[name] = 0;
                }
                
                // 日数を集計に加算
                data[name] += days;
            }
        }

        // 集計結果を返す
        return data;
    }
}

export { OsExperienceGraphModel };