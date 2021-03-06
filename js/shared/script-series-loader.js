import { AbsoluteURIConverter } from "./absolute-uri-converter.min.js";
import { ThreadingUtility } from "./utility/threading-utility.min.js";

/**
 * スクリプトの直列ローダーを提供します。
 */
class ScriptSeriesLoader {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        this.sources = [];
        this.requiredObjects = [];
        this.importedSources = [];
        this.running = false;
        this.absoluteURIConverter = new AbsoluteURIConverter();

        // 既に読込されているスクリプトを記録
        for(let script of document.getElementsByTagName("script")) { 
            if (script.src) {
                this.importedSources.push(script.src);
            }
        }
    }

    /**
     * スクリプトの読込対象に追加します。既に存在する場合は無視されます。
     * @param {String} source スクリプトのソース。絶対URI、またはルートからの相対パスである必要があります。
     * @param {String} required スクリプトで使うオブジェクトを指定します。これはスクリプトロード後に対象の
     *                          オブジェクトが生成されるまでに時間がある場合、この引数を指定すると改善します。
     */
    add = (source, required) => {
        // 相対パスの場合は絶対URIへ変換
        let ref = source;
        if (!this.absoluteURIConverter.isAbsoluteURI(ref)) {
            ref = this.absoluteURIConverter.convert(ref);
        }

        // 既に追加済の場合は無視
        if (this.sources.includes(ref) || this.importedSources.includes(ref)) return;

        // 読込ソースに追加
        this.sources.push(ref);

        // 要求オブジェクトを設定
        if (required) {
            this.requiredObjects.push(required);
        }
    }

    /**
     * スクリプトの読込を行います。
     * @param {Function} onSuccess 成功時に実行される処理。
     * @param {Function} onFailure 失敗時に実行される処理。
     */
    load = async(onSuccess, onFailure) => {
        // 対象がひとつもなければ終了
        if (this.sources.length === 0) {
            // オブジェクトの準備完了を待機
            while(this.requiredObjects.some(x => eval(`typeof ${x}`) === "undefined")) {
                await ThreadingUtility.sleep(2000);
            }

            // 終了状態を設定
            this.running = false;
            if (onSuccess) onSuccess();
            return;
        }

        // 処理中フラグの切替
        this.running = true;

        // 対象スクリプトの生成
        const script = document.createElement("script");

        // スクリプト読込後に次のスクリプト読込を設定
        script.addEventListener("load", () => {
            this.load(onSuccess, onFailure);
        });

        // 読込エラー時のコールバック実行
        script.addEventListener("error", (e) => {
            if (onFailure) onFailure(e);
        });

        // スクリプトの内容を設定
        script.src = this.sources.shift();
        document.head.appendChild(script);
        
        // 追加済ソースとして記録
        this.importedSources.push(script.src);
    }
}

// シングルトンとして提供
export default new ScriptSeriesLoader();