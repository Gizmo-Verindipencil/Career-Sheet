/**
 * 絶対パスへの変換処理を提供します。
 */
class AbsoluteURIConverter {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // スキーム + オーソリティをルートとして記録
        this.root = location.origin;
    }

    /**
     * 相対パスを絶対URIに変換します。
     * @param {String} relativePath ルート基準の相対パス 
     * @returns 絶対URIを返します。
     */
    convert = relativePath => {
        const uri = new URL(relativePath, this.root);
        return uri.href;
    }

    /**
     * 文字列が絶対URIであるかどうかを判定します。
     * @param {String} string 判定対象の文字列。
     * @returns 該当有無(true : 絶対パス、false : それ以外)を返します。
     */
    isAbsoluteURI = string => {
        return !string.indexOf(":");
    }
}

export { AbsoluteURIConverter };