import { ExcelDownloader } from "./excel-downloader.min.js";
import { TaskCategoryRepository } from "../repository/task-category-repository.min.js";
import { TaskTypeRepository } from "../repository/task-type-repository.min.js";

/**
 * 作業種類Excelファイルの生成・出力処理を提供します。
 */
class TaskTypeExcelDownloader {
    /**
     * Excelファイルをダウンロードします。
     */
    download = async() => {
        // 出力Excelを生成
        const excel = [];

        // ヘッダーを追加
        const header = [
            "category.id",
            "category.name.ja",
            "category.name.en",
            "type.id",
            "type.name.ja",
            "type.name.en"
        ];
        excel.push(header);

        // 作業分類データを取得
        const categories = this.getTaskCategories();
        for (const category of categories) {
            // 作業種類データの取得
            const types = this.getTaskTypes(category.id);

            // データを追加
            for (const type of types) {
                const values = [
                    category.id,
                    category.name.ja,
                    category.name.en,
                    type.id,
                    type.name.ja,
                    type.name.en
                ];
                excel.push(values);
            }
        }

        // ファイルをダウンロード
        const downloader = await ExcelDownloader.build();
        downloader.addAoaToWorkbook(excel, "data");
        downloader.download("task-type");
    }

    /**
     * 作業分類データを取得します。
     * @returns {Array<Object>} 作業分類データを返します。
     */
    getTaskCategories = () => {
        // データを取得
        const repository = new TaskCategoryRepository();
        const categories = repository.getAll();

        // ソート順の昇順で並べる
        categories.sort((a, b) => {
            return a.sort > b.sort;
        });

        return categories;
    }

    /**
     * 指定した作業分類に属する作業種類データを取得します。
     * @param {String} categoryId 作業分類。
     * @returns {Array<Object>} 作業種類データを返します。
     */
    getTaskTypes = categoryId => {
        // データを取得
        const repository = new TaskTypeRepository();
        const types = repository.getAll().filter(x => x.categoryId === categoryId);
        
        // ソート順の昇順で並べる
        types.sort((a, b) => {
            return a.sort > b.sort;
        });
        
        return types;
    }
}

export { TaskTypeExcelDownloader };