import { Buildable } from "../interface/buildable.min.js";
import { Utility } from "../shared/utility.min.js";

/**
 * クラスの新しいインスタンスを作成します。
 * @param {Function} type インスタンスを作成するクラス。 
 * @returns 作成したインスタンスを返します。
 */
var createInstance = async type => {
    // クラスの定義以外が渡された場合はエラー
    if (!type.toString || !type.toString().toLowerCase().startsWith("class")) {
        throw "Error: argument is not class.";
    }

    // 何も継承しないクラスの場合は標準のインスタンス作成を行う
    if (type.toString().toLowerCase().indexOf(" extends ") === -1) {
        return new type();
    }
    else
    {
        // Buildableを継承する場合はbuildでインスタンスを生成
        const instance = new type();
        if (instance instanceof Buildable) {
            // スクリプトの読込完了後にインスタンスを返す
            while(instance.scriptLoader.running){
                await Utility.sleep(2000);
            }
            return await type.build();
        }

        // Buildableを継承しない場合は標準のインスタンス作成を行う
        return instance;
    }
}

export { createInstance };