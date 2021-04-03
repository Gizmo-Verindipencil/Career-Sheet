import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js";

/**
 * Excelファイルの生成・出力処理を提供します。
 */
class ExcelDownloader {
    /**
     * インスタンスを初期化します。
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
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {ExcelDownloader} 新しいインスタンスを返します。
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
     * ブックにシートを追加します。
     * @param {Object} sheet 追加するシート。
     * @param {Object} option オプション。
     * @returns {Object} ブックを返します。
     */
    addSheetToWorkbook = (sheet, option) => {
        const sheetName = option && option.sheet ? option.sheet : this.getDefaultSheetName();
        this.workbook.sheetNames.push(sheetName);
        this.workbook.sheets[sheetName] = sheet;
        return this.workbook;
    }

    /**
     * シートの有無を取得します。
     * @param {String} sheetName シート名。
     * @returns {Boolean} シート有無(true : あり、false : なし)を返します。
     */
    existsSheet = sheetName => {
        const match = this.workbook.sheetNames.filter(x => x === sheetName);
        return match.length > 0;
    }

    /**
     * 利用可能なデフォルトシート名(ex. Sheet1, Sheet2 ...)の取得します。
     * @returns {String} シート名を返します。
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
     * データをブックに追加します。
     * 参照：https://github.com/SheetJS/js-xlsx/issues/163
     * @param {Array<Array<any>>} data 追加する内容。
     * @param {Object} option オプション。
     * @returns ブックを返します。
     */
    addAoaToWorkbook = (data, option) => {
        return this.addSheetToWorkbook(XLSX.utils.aoa_to_sheet(data, option), option);
    }

    /**
     * 文字列をバイナリデータに変換します。
     * 参考 : https://stackoverflow.com/questions/34993292/how-to-save-xlsx-data-to-file-as-a-blob
     * @param {String} data 変換元データ。
     * @returns {ArrayBuffer} 変換後データ。
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
     * Excelファイルをダウンロードします。
     * @param {String} name ファイル名。指定しない場合は nameless-data.xlsx になります。
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