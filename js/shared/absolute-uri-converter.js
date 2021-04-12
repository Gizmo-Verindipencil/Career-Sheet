/**
 * 絶対パスへの変換処理を提供します。
 */
class AbsoluteURIConverter {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // スキーム + オーソリティをルートとして記録
        let root = location.origin;

        // github.io の場合、スキーム + オーソリティ に加えて
        // リポジトリ名を表すディレクトリまでをルートとする
        if (root.endsWith("github.io")) {
            // ディレクトリの検索
            let index = location.pathname.indexOf("/", 0);
            index = location.pathname.indexOf("/", index + 1);

            // ディレクトリが見つかった場合はルートに加える
            if (index !== -1) {
                const firstDir = location.pathname.substring(0, index + 1);
                root = `${root}${firstDir}`;
            }
        }
        this.root = root;
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