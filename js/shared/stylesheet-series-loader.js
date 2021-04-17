import { AbsoluteURIConverter } from "./absolute-uri-converter.js"

/**
 * スタイルシートの直列ローダーを提供します。
 */
class StylesheetSeriesLoader {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        this.sources = [];
        this.importedSources = [];
        this.running = false;
        this.absoluteURIConverter = new AbsoluteURIConverter();

        // 既に読込されているスタイルシートを記録
        for(let link of document.getElementsByTagName("link")) { 
            if (link.href) {
                this.importedSources.push(link.href);
            }
        }
    }

    /**
     * スタイルシートの読込対象に追加します。既に存在する場合は無視されます。
     * @param {String} source スタイルシートのソース。絶対URI、またはルートからの相対パスである必要があります。
     */
    add = source => {
        // 相対パスの場合は絶対URIへ変換
        let ref = source;
        if (!this.absoluteURIConverter.isAbsoluteURI(ref)) {
            ref = this.absoluteURIConverter.convert(ref);
        }

        // 既に追加済の場合は無視
        if (this.sources.includes(ref) || this.importedSources.includes(ref)) return;

        // 読込ソースに追加
        this.sources.push(ref);
    }

    /**
     * スタイルシートの読込を行います。
     * @param {Function} onSuccess 成功時に実行される処理。
     * @param {Function} onFailure 失敗時に実行される処理。
     */
    load = (onSuccess, onFailure) => {
        // 対象がひとつもなければ終了
        if (this.sources.length === 0) {
            this.running = false;
            if (onSuccess) onSuccess();
            return;
        }

        // 処理中フラグの切替
        this.running = true;

        // 対象スタイルシートの生成
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = this.sources.shift();
        link.onerror = () => {
            if (onFailure) onFailure();
        };

        // スタイルシート読込後に次のスタイルシート読込を設定
        link.onload = () => {
            this.load(onSuccess, onFailure);
        } 

        // スタイルシートの追加
        document.head.appendChild(link);

        // 追加済ソースとして記録
        this.importedSources.push(link.href);
    }
}

// シングルトンとして提供
export default new StylesheetSeriesLoader();