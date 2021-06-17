/**
 * 動作の前提条件を満たした状態でのインスタンス生成が可能であることを表します。
 */
class Buildable {
    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @return {Object} 継承先クラスの新しいインスタンスを返します。
     */
    static build = async() => {
        throw "Error: this function is not implemented.";
    }
}

export { Buildable };