import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js";

/**
 * Excelファイルの生成・出力
 */
class ExcelDownloader {
    /**
     * コンストラクタ
     */
    constructor() {
        // 必要なソースを読込
        this.loader = ScriptSeriesLoader;
        this.loader.add("https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.14.2/xlsx.full.min.js");
        this.loader.add("https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js");
        this.loader.load();

        // 空のブックを作成
        this.workbook = {
            sheetNames: [],
            sheets: {}
        };
    }

    /**
     * インスタンスの生成
     * @returns {ExcelDownloader} 新しいインスタンス
     */
    static build = async() => {
        // インスタンスを作成
        const downloader = new ExcelDownloader();

        // スクリプトの読込完了後にインスタンスを返す
        while(downloader.loader.running){
            await Utility.sleep(2000);
        }
        return downloader;
    }

    /**
     * ブックにシートを追加
     * @param {Object} sheet 追加するシート
     * @param {Object} option オプション
     * @returns {Object} ブック
     */
    addSheetToWorkbook = (sheet, option) => {
        const sheetName = option && option.sheet ? option.sheet : this.getDefaultSheetName();
        this.workbook.sheetNames.push(sheetName);
        this.workbook.sheets[sheetName] = sheet;
        return this.workbook;
    }

    /**
     * シートの有無を取得
     * @param {String} sheetName シート名 
     * @returns {Boolean} シート有無(true : あり、false : なし)
     */
    existsSheet = sheetName => {
        const match = this.workbook.sheetNames.filter(x => x === sheetName);
        return match.length > 0;
    }

    /**
     * 利用可能なデフォルトシート名の取得
     * @returns {String} シート名
     */
    getDefaultSheetName = () => {
        let number = 1;
        
        while(true) {
            const sheetName = `Sheet${number++}`;
            if (!this.existsSheet(sheetName)) {
                return sheetName;
            }
        }
    }

    /**
     * データをブックに追加
     * 参照：https://github.com/SheetJS/js-xlsx/issues/163
     * @param {Array<Array<any>>} data 追加する内容
     * @param {Object} option オプション
     * @returns ブック
     */
    addAoaToWorkbook = (data, option) => {
        return this.addSheetToWorkbook(XLSX.utils.aoa_to_sheet(data, option), option);
    }

    /**
     * 文字列のバイナリデータへの変換
     * 参考 : https://stackoverflow.com/questions/34993292/how-to-save-xlsx-data-to-file-as-a-blob
     * @param {String} data 変換元データ
     * @returns {ArrayBuffer} 変換後データ
     */
    convertStringToArrayBuffer = data => {
        var buff = new ArrayBuffer(data.length);
        var view = new Uint8Array(buff);
        for (var i = 0; i != data.length; ++i) {
            view[i] = data.charCodeAt(i) & 0xFF;
        }
        return buff;
    }

    /**
     * Excelファイルのダウンロード
     * @param {String} name ファイル名
     */
    download = name => {
        // 出力対象の有無を判定
        if (!this.workbook || this.workbook.sheetNames.length === 0) {
            throw "Not found contents.";
        }

        // 書込オプションの設定
        // 参考 : https://github.com/SheetJS/js-xlsx/blob/master/README.md#writing-options
        const writingOption = { type: "binary" };

        // 変換用オブジェクトの生成
        const propertyNameChanged = {
            SheetNames: this.workbook.sheetNames,
            Sheets: this.workbook.sheets
        };

        // ブックへの変換
        const workbook = XLSX.write(propertyNameChanged, writingOption);
    
        // Blobオブジェクトの生成
        const data = this.convertStringToArrayBuffer(workbook);
        const blob = new Blob([data], { type: "application/octet-stream" });
    
        // FileSaverによるファイルダウンロード
        const fileName = name ?? "nameless-data";
        saveAs(blob, `${fileName}.xlsx`);
    }
}

export { ExcelDownloader };