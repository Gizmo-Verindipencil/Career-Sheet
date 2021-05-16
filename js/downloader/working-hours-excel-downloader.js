import { ExcelDownloader } from "./excel-downloader.min.js";
import { WorkingHoursRepository } from "../repository/working-hours-repository.min.js";

/**
 * 労働時間Excelファイルの生成・出力処理を提供します。
 */
class WorkingHoursExcelDownloader {
    /**
     * Excelファイルをダウンロードします。
     */
    download = async() => {
        // 職務経歴データを取得
        const repository = new WorkingHoursRepository();
        const records = repository.getAll();

        // 時系列順で並べる
        records.sort((a, b) => {
            return b.no < a.no;
        });

        // 出力Excelを生成
        const excel = [];

        // ヘッダーを追加
        const header = [
            "year",
            "month",
            "period.from",
            "period.to",
            "prescribedWorkingDays",
            "prescribedWorkingHours",
            "actualWorkingDays",
            "actualWorkingHours",
            "overtimeHours",
            "holidayWorkingDays",
            "paidLeave",
            "beingLate.count",
            "beingLate.hours",
            "beingLate.comment"
        ];
        excel.push(header);

        // データを追加
        for (const record of records) {
            const values = [
                record.year,
                record.month,
                record.period.from,
                record.period.to,
                record.prescribedWorkingDays,
                record.prescribedWorkingHours,
                record.actualWorkingDays,
                record.actualWorkingHours,
                record.overtimeHours,
                record.holidayWorkingDays,
                record.paidLeave,
                record.beingLate.count,
                record.beingLate.hours,
                record.beingLate.comment
            ];
            excel.push(values);
        }

        // ファイルをダウンロード
        const downloader = await ExcelDownloader.build();
        downloader.addAoaToWorkbook(excel, "data");
        downloader.download("working-hours");
    }
}

export { WorkingHoursExcelDownloader };