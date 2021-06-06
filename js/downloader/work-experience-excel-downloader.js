import { ExcelDownloader } from "./excel-downloader.min.js";
import { WorkExperienceRepository } from "../repository/work-experience-repository.min.js";

/**
 * 職務経歴Excelファイルの生成・出力処理を提供します。
 */
class WorkExperienceExcelDownloader {
    /**
     * Excelファイルをダウンロードします。
     */
    download = async() => {
        // 職務経歴データを取得
        const repository = new WorkExperienceRepository();
        const experiences = repository.getAll();

        // 時系列順で並べる
        experiences.sort((a, b) => {
            return b.no < a.no;
        });

        // 出力Excelを生成
        const excel = [];

        // ヘッダーを追加
        const header = [
            "no",
            "businessType",
            "period-from",
            "period-to",
            "device",
            "operatingSystem",
            "programmingLanguage",
            "developmentTool",
            "framework",
            "platform",
            "database",
            "uncategorizedTechnology",
            "projectSummary",
            "projectPeakSize",
            "subordinate",
            "system",
            "task"
        ];
        excel.push(header);

        // データを追加
        for (const experience of experiences) {
            const values = [
                experience.no,
                experience.businessType,
                experience.period.from,
                experience.period.to,
                experience.device.join(", "),
                experience.os.join(", "),
                experience.programmingLanguage.join(", "),
                experience.developmentTool.join(", "),
                experience.framework.join(", "),
                experience.platform.join(", "),
                experience.database.join(", "),
                experience.uncategorizedTechnology.join(", "),
                experience.projectSummary,
                experience.projectPeakSize,
                experience.subordinate,
                experience.system,
                experience.task.map(x => x.name).join(", ")
            ];
            excel.push(values);
        }

        // ファイルをダウンロード
        const downloader = await ExcelDownloader.build();
        downloader.addAoaToWorkbook(excel, "data");
        downloader.download("work-experience");
    }
}

export { WorkExperienceExcelDownloader };