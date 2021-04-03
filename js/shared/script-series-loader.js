/**
 * スクリプトの直列ローダー
 */
class ScriptSeriesLoader {
    /**
     * コンストラクタ
     */
    constructor() {
        this.sources = [];
        this.importedSources = [];
        this.running = false;
    }

    /**
     * スクリプトの追加
     * @param {String} source スクリプトのソース
     */
    add = (source) => {
        // 既に追加済の場合は無視
        if (this.sources.includes(source) || this.importedSources.includes(source)) return;

        // 読込ソースに追加
        this.sources.push(source)
    }

    /**
     * スクリプトの読込
     * @param {Function} onSuccess 成功時に実行される処理
     * @param {Function} onFailure 失敗時に実行される処理
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

        // 対象スクリプトの生成
        const script = document.createElement("script");
        script.src = this.sources.shift();
        script.onerror = () => {
            if (onFailure) onFailure();
        };

        // スクリプト読込後に次のスクリプト読込を設定
        script.onload = () => {
            this.load(onSuccess, onFailure);
        } 

        // スクリプトの追加
        document.body.appendChild(script);

        // 追加済ソースとして記録
        this.importedSources.push(script.src);
    }
}

// シングルトンとして提供
export default new ScriptSeriesLoader();