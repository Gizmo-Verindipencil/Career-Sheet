/**
 * 職務経歴Excelファイルの生成・出力
 */
class WorkExperienceExcelDownloader {
    /**
     * Excelファイルのダウンロード
     */
    download = () => {
          // 職務経歴データを取得
          const repository = new WorkExperienceRepository();
          const experiences = repository.getAll();

          // 最近の職歴から並べる
          experiences.sort((a, b) => {
              return b.no - a.no;
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
            "os",
            "programLanguage",
            "developmentTool",
            "framework",
            "platform",
            "db",
            "other",
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
                experience.programLanguage.join(", "),
                experience.developmentTool.join(", "),
                experience.framework.join(", "),
                experience.platform.join(", "),
                experience.db.join(", "),
                experience.other.join(", "),
                experience.projectSummary,
                experience.projectPeakSize,
                experience.subordinate,
                experience.system,
                experience.task.map(x => x.name).join(", "),
              ];
              excel.push(values);
          }

          // ファイルをダウンロード
          const downloader = new ExcelDownloader();
          downloader.addAoaToWorkbook(excel, "data");
          downloader.download("work-experience");
    }
}