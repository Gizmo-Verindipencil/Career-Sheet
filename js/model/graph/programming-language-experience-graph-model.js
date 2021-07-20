import { WorkExperienceRepository } from "../../repository/work-experience-repository.js";
import { DatetimeUtility } from "../../shared/utility/datetime-utility.min.js";

/**
 * プログラミング言語経験グラフのモデルを提供します。
 */
class ProgrammingLanguageExperienceGraphModel {
    /**
     * プログラミング言語経験を取得します。
     * @returns {Object} 集計結果(プロパティ名：プログラミング言語、値：経験日数)を返します。
     */
    getProgrammingLanguageExperience = () => {
        // 職務経歴データを取得
        const repository = new WorkExperienceRepository();
        const experiences = repository.getAll();

        // 職務経歴毎のプログラミング言語を集計
        const data = {};
        for(const experience of experiences) {
            // プログラミング言語が未設定の場合は集計対象
            if (!experience.programmingLanguage || experience.programmingLanguage.length === 0) continue;

            // 未完了案件の場合は集計対象
            if (!experience.period.from || !experience.period.to) continue;

            // 期間を取得
            const from = DatetimeUtility.getNumberOfDays(experience.period.from);
            const to = DatetimeUtility.getNumberOfDays(experience.period.to);
            const days = to - from;

            // プログラミング言語毎に日数を加算
            for(const name of experience.programmingLanguage) {
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

export { ProgrammingLanguageExperienceGraphModel };