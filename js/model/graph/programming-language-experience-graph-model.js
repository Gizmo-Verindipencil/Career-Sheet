import { WorkExperienceRepository } from "../../repository/work-experience-repository.js";
import { Utility } from "../../shared/utility.min.js";

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
            // プログラミングが未設定の場合は集計対象
            if (!experience.programmingLanguage || experience.programmingLanguage.length === 0) continue;

            // 未完了案件の場合は集計対象
            if (!experience.period.from || !experience.period.to) continue;

            // 期間を取得
            const from = Utility.getNumberOfDays(experience.period.from);
            const to = Utility.getNumberOfDays(experience.period.to);
            const days = to - from;

            // プログラミング言語毎に日数を加算
            for(const lang of experience.programmingLanguage) {
                // 初回集計時は追加
                if (!data[lang]) {
                    data[lang] = 0;
                }
                
                // 日数を集計に加算
                data[lang] += days;
            }
        }

        // 集計結果を返す
        return data;
    }
}

export { ProgrammingLanguageExperienceGraphModel };