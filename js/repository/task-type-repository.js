/**
 * 作業データ関連のサービス（ダミー）
 */
class TaskRepository {
    /**
     * 作業種類データを取得する
     * @return {Array<Object>} 作業種類データ
     */
    getAllTypes = () => {
        return [
            {
                "id" : "SP",
                "name" : {
                    "en" : "Sysem Planning",
                    "ja" : "システム企画"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP1",
                "sort" : 1
            },
            {
                "id" : "BA",
                "name" : {
                    "en" : "Business Analysis",
                    "ja" : "業務分析"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP2",
                "sort" : 2
            },
            {
                "id" : "SA",
                "name" : {
                    "en" : "System Analysis",
                    "ja" : "システム分析"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP3",
                "sort" : 3
            },
            {
                "id" : "RD",
                "name" : {
                    "en" : "Requirements Definition",
                    "ja" : "要件定義"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP4",
                "sort" : 4
            },
            {
                "id" : "RE",
                "name" : {
                    "en" : "Rough Estimate",
                    "ja" : "概算見積"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP5",
                "sort" : 5
            },
            {
                "id" : "E",
                "name" : {
                    "en" : "Estimate",
                    "ja" : "見積"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP6",
                "sort" : 6
            },
            {
                "id" : "FD",
                "name" : {
                    "en" : "Function Design",
                    "ja" : "機能設計"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP7",
                "sort" : 7
            },
            {
                "id" : "HLD",
                "name" : {
                    "en" : "High-Level Design",
                    "ja" : "基本設計"
                },
                "categoryId" : "DevMP",
                "colorId" : "DevMP1",
                "sort" : 8
            },
            {
                "id" : "LLD",
                "name" : {
                    "en" : "Low-Level Design",
                    "ja" : "詳細設計"
                },
                "categoryId" : "DevMP",
                "colorId" : "DevMP2",
                "sort" : 9
            },
            {
                "id" : "C",
                "name" : {
                    "en" : "Coding",
                    "ja" : "製造"
                },
                "categoryId" : "DevMP",
                "colorId" : "DevMP3",
                "sort" : 10
            },
            {
                "id" : "UT",
                "name" : {
                    "en" : "Unit Test",
                    "ja" : "単体テスト"
                },
                "categoryId" : "DevMP",
                "colorId" : "DevMP4",
                "sort" : 11
            },
            {
                "id" : "IT",
                "name" : {
                    "en" : "Integration Test",
                    "ja" : "結合テスト"
                },
                "categoryId" : "DevLP",
                "colorId" : "DevLP1",
                "sort" : 12
            },
            {
                "id" : "ST",
                "name" : {
                    "en" : "System Test",
                    "ja" : "システムテスト"
                },
                "categoryId" : "DevLP",
                "colorId" : "DevLP2",
                "sort" : 13
            },
            {
                "id" : "UAT",
                "name" : {
                    "en" : "User Acceptance Test",
                    "ja" : "ユーザー受入テスト"
                },
                "categoryId" : "DevLP",
                "colorId" : "DevLP3",
                "sort" : 14
            },
            {
                "id" : "DP",
                "name" : {
                    "en" : "Deployment",
                    "ja" : "本番リリース"
                },
                "categoryId" : "DevLP",
                "colorId" : "DevLP4",
                "sort" : 15
            },
            {
                "id" : "SM",
                "name" : {
                    "en" : "System Maintenance",
                    "ja" : "システム保守"
                },
                "categoryId" : "RW",
                "colorId" : "",
                "sort" : 16
            },
            {
                "id" : "SO",
                "name" : {
                    "en" : "System Operation",
                    "ja" : "システム運用"
                },
                "categoryId" : "RW",
                "colorId" : "",
                "sort" : 17
            },
            {
                "id" : "HD",
                "name" : {
                    "en" : "Help Desk",
                    "ja" : "ヘルプデスク"
                },
                "categoryId" : "RW",
                "colorId" : "",
                "sort" : 995
            },
            {
                "id" : "M",
                "name" : {
                    "en" : "Monitoring",
                    "ja" : "モニタリング"
                },
                "categoryId" : "RW",
                "colorId" : "",
                "sort" : 996
            },    
            {
                "id" : "T",
                "name" : {
                    "en" : "Training",
                    "ja" : "研修"
                },
                "categoryId" : "O",
                "colorId" : "",
                "sort" : 997
            },
            {
                "id" : "CL",
                "name" : {
                    "en" : "Cleaning",
                    "ja" : "清掃"
                },
                "categoryId" : "RW",
                "colorId" : "",
                "sort" : 998
            },
            {
                "id" : "D",
                "name" : {
                    "en" : "Documentation",
                    "ja" : "資料作成"
                },
                "categoryId" : "O",
                "colorId" : "",
                "sort" : 999
            }
        ];
    }

    /**
     * 作業の色データを取得する
     * @return {Array<Object>} 作業の色データ
     */
    getAllColors = () => {
        return [
            {
                "id" : "DevUP1",
                "start" : "#3F91EA",
                "end" : "#0D5FB8"
            },
            {
                "id" : "DevUP2",
                "start" : "#4D97DB",
                "end" : "#1B65A9"
            },
            {
                "id" : "DevUP3",
                "start" : "#5A9CCB",
                "end" : "#286A99"
            },
            {
                "id" : "DevUP4",
                "start" : "#68A2BC",
                "end" : "#36708A"
            },
            {
                "id" : "DevUP5",
                "start" : "#75A7AC",
                "end" : "#43757A"
            },
            {
                "id" : "DevUP6",
                "start" : "#83AC9D",
                "end" : "#517A6B"
            },
            {
                "id" : "DevUP7",
                "start" : "#90B28D",
                "end" : "#5E805B"
            },
            {
                "id" : "DevMP1",
                "start" : "#9EB77E",
                "end" : "#6C854C"
            },
            {
                "id" : "DevMP2",
                "start" : "#ABBD6E",
                "end" : "#798B3C"
            },
            {
                "id" : "DevMP3",
                "start" : "#B9C25F",
                "end" : "#87902D"
            },
            {
                "id" : "DevMP4",
                "start" : "#C6C74F",
                "end" : "#94951D"
            },
            {
                "id" : "DevLP1",
                "start" : "#D4CD40",
                "end" : "#A29B0E"
            },
            {
                "id" : "DevLP2",
                "start" : "#E1D230",
                "end" : "#AFA000"
            },
            {
                "id" : "DevLP3",
                "start" : "#EFD821",
                "end" : "#BDA600"
            },
            {
                "id" : "DevLP4",
                "start" : "#FCDD11",
                "end" : "#CAAB00"
            }       
        ];
    }

    /**
     * 作業分類データを取得する
     * @return {Array<Object>}　作業分類データ
     */
    getAllCategories = () => {
        return [
            {
                "id" : "DevUP",
                "name" : {
                    "en" : "Upper Process",
                    "ja" : "開発-上流工程"
                },
                "description" : "要件定義・システム設計・見積、等"
            },
            {
                "id" : "DevMP",
                "name" : {
                    "en" : "Middle Process",
                    "ja" : "開発-中流工程"
                },
                "description" : "ソフトウェア設計・プログラミング・単体テスト、等"
            },
            {
                "id" : "DevLP",
                "name" : {
                    "en" : "Lower Process",
                    "ja" : "開発-下流工程"
                },
                "description" : "結合テスト・総合テスト・システム構築、等"
            },
            {
                "id" : "RW",
                "name" : {
                    "en" : "Routine Work",
                    "ja" : "定例作業"
                },
                "description" : "一定の期間で繰り返し行う作業"
            },
            {
                "id" : "O",
                "name" : {
                    "en" : "Other",
                    "ja" : "その他"
                },
                "description" : "開発プロジェクトで分類不可能な作業"
            }
        ];
    }
}