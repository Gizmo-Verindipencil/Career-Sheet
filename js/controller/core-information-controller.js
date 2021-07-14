import { createInstance } from "../keyword/create-instance.min.js";
import { Buildable } from "../interface/buildable.min.js";
import { CoreInformationModel } from "../model/core-information-model.min.js";
import { Utility } from "../shared/utility.min.js";
import { PageColorAdjuster } from "../shared/page-color-adjuster.min.js";
import ScriptSeriesLoader from "../shared/script-series-loader.min.js";

/**
 * 基本情報のコントローラーを提供します。
 */
class CoreInformationController extends Buildable {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        super();
        
        // 対応するモデルをセット
        this.model = new CoreInformationModel();

        // 必要なスクリプトを読込
        this.scriptLoader = ScriptSeriesLoader;
        this.scriptLoader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js", "JQuery");
        this.scriptLoader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {CoreInformationController} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const controller = new CoreInformationController();

        // スクリプトの読込完了後にインスタンスを返す
        while(controller.scriptLoader.running){
            await Utility.sleep(2000);
        }
        return controller;
    }

    /**
     * 基本情報の設定を実行します。
     */
    execute = async() => {
        // 基本データを取得
        const data = this.model.getCoreInformation();

        // 画面にデータをセット
        this.setNameAndPhonetic(data);
        this.setBirthAndAge(data);
        this.setJoiningCurrentCompany(data);
        this.setSex(data);
        this.setZipCodeAndAddress(data);
        this.setLocalStation(data);
        this.setAcademicBackground(data);

        // 色を調整
        const adjuster = await createInstance(PageColorAdjuster);
        adjuster.changeBackgroundColor();
    }

    /**
     * 氏名・フリガナをセットします。
     * @param {Object} data 基本データ。
     */
    setNameAndPhonetic = data => {
        // 漢字表記とフリガナ表記にて、姓と名でそれぞれの大きい方の文字長をセット
        const getGreaterLength = (value1, value2) => {
            return value1.length > value2.length ? 
                value1.length : value2.length;
        }
        const familyLength = getGreaterLength(data.familyName, data.phoneticFamilyName);
        const lastLength = getGreaterLength(data.lastName, data.phoneticLastName); 

        // 大きい方の文字長にあわせて、姓と名をフォーマット
        const format = (name1, length1, name2, length2) => {
            // 右端を全角空白で埋める処理
            const padLeftBlank = (string, length) => {
                while (string.length < length) {
                    string = string + "　";
                }
                return string;
            }
            return `${padLeftBlank(name1, length1)}  ${padLeftBlank(name2, length2)}`;
        }

        // 氏名のセット
        const fullName = format(data.familyName, familyLength, data.lastName, lastLength);
        $("input[name='fullName']").val(fullName);

        // フリガナのセット
        const phonetic = format(data.phoneticFamilyName, familyLength, data.phoneticLastName, lastLength);
        $("input[name='phonetic']").val(phonetic);
    }

    /**
     * 生年月日と年齢をセットします。
     * @param {Object} data 基本データ。
     */
    setBirthAndAge = data => {
        const delimiter = "-";
        const date = data.birth.split(delimiter);

        // 日付が無効なら「不明」と表記
        if (!date[0] || !date[1] || !date[2]) {
            $("input[name='birth']").val("不明");
            $("input[name='age']").val("不明");
            return;
        }
        
        // 生年月日のセット
        const birth = `${date[0]}年${date[1]}月${date[2]}日`;
        $("input[name='birth']").val(birth);

        // 年齢のセット
        const today = new Date();
        const lifeStarting = new Date(date[0], date[1], date[2]);
        let age = today.getFullYear() - lifeStarting.getFullYear();
        const birthThisYear = new Date(today.getFullYear(), lifeStarting.getMonth(), lifeStarting.getDate());
        if (today < birthThisYear) {
            // 今年の誕生日がまだ来ていない場合は年を経ない
            age--;
        }
        $("input[name='age']").val(`${age}歳`);
    }

    /**
     * 入社年月日をセットします。
     * @param {Object} data 基本データ。
     */
    setJoiningCurrentCompany = data => {
        const delimiter = "-";
        const date = data.joiningCurrentCompany.split(delimiter);

        // 日付が無効なら「不明」と表記
        if (!date[0] || !date[1] || !date[2]) {
            $("input[name='joiningCurrentCompany']").val("不明");
            return;
        }
        
        // 入社年月日のセット
        const joiningCurrentCompany = `${date[0]}年${date[1]}月${date[2]}日`;
        $("input[name='joiningCurrentCompany']").val(joiningCurrentCompany);
    }

    /**
     * 性別をセットします。
     * @param {Object} data 基本データ。
     */
    setSex = data => {
        $("input[name='sex']").val(data.sex);
    }

    /**
     * 郵便番号と住所をセットします。
     * @param {Object} data 基本データ。
     */
    setZipCodeAndAddress = data => {
        // 郵便番号のセット
        const zipCode = `〒${data.address.zipCode}`;
        $("input[name='zipCode']").val(zipCode);
        
        // 住所のセット
        const address = `  ${data.address.prefecture}  ${data.address.municipality}`;
        $("input[name='address']").val(address);
    }

    /**
     * 最寄り駅をセットします。
     * @param {Object} data 基本データ。
     */
    setLocalStation = data => {
        $("input[name='localLine']").val(`${data.localStation.line}  線`);
        $("input[name='localStation']").val(`${data.localStation.name}  駅`);
    }

    /**
     * 最終学歴と各種学校をセットします。
     * @param {Object} data 基本データ。
     */
    setAcademicBackground = data => {
        const set = mainOrSub => {
            // 学歴をセット
            $(`input[name='${mainOrSub}']`).val(data.academicBackground[mainOrSub]);
            
            // 卒業年月をセット
            const delimiter = "-";
            const date = data.academicBackground[mainOrSub + "Date"].split(delimiter);

            if (!date[0] || !date[1]) {
                $(`input[name='${mainOrSub}Date']`).val("");
                return;
            }
            let completion = `${date[0]}年${date[1]}月  卒業`;
            $(`input[name='${mainOrSub}Date']`).val(completion);
        }

        // 最終学歴のセット
        set("education");

        // 各種学校のセット
        set("other");
    }
}

export { CoreInformationController };