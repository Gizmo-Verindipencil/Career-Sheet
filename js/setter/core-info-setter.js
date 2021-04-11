import { CoreInfoRepository } from "../repository/core-info-repository.js";
import { Utility } from "../shared/utility.js";
import ScriptSeriesLoader from "../shared/script-series-loader.js"

/**
 * 基本情報の設定処理を提供します。
 */
class CoreInfoSetter {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        // 必要なソースを読込
        this.loader = ScriptSeriesLoader;
        this.loader.add("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
        this.loader.load();
    }

    /**
     * インスタンスの生成し、必要なモジュールを読込します。
     * @returns {CoreInfoSetter} 新しいインスタンスを返します。
     */
    static build = async() => {
        // インスタンスを作成
        const setter = new CoreInfoSetter();

        // スクリプトの読込完了後にインスタンスを返す
        while(setter.loader.running){
            await Utility.sleep(2000);
        }
        return setter;
    }

    /**
     * 基本情報の設定を実行します。
     */
    execute = () => {
        // 基本データを取得
        const repository = new CoreInfoRepository();
        const data = repository.get();

        // 画面にデータをセット
        this.setNameAndPhonetic(data);
        this.setBirthAndAge(data);
        this.setJoiningCurrentCompany(data);
        this.setSex(data);
        this.setZipCodeAndAddress(data);
        this.setLocalStation(data);
        this.setAcademicBackground(data);
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
     * 生年月日と年齢のセット
     * @param {Object} data 基本データ
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
     * 入社年月日のセット
     * @param {Object} data 基本データ
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
     * 性別のセット
     * @param {Object} data 基本データ
     */
    setSex = data => {
        $("input[name='sex']").val(data.sex);
    }

    /**
     * 郵便番号と住所のセット
     * @param {Object} data 基本データ
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
     * 最寄り駅のセット
     * @param {Object} data 基本データ
     */
    setLocalStation = data => {
        $("input[name='localLine']").val(`${data.localStation.line}  線`);
        $("input[name='localStation']").val(`${data.localStation.name}  駅`);
    }

    /**
     * 最終学歴と各種学校のセット
     * @param {Object} data 基本データ
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

export { CoreInfoSetter };