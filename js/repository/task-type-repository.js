/**
 * 作業種類データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class TaskTypeRepository {
    /**
     * 作業種類データを取得します。
     * @return {Array<Object>} 作業種類データを返します。
     */
    getAll = () => {
        return [
            {
                "id" : "SP",
                "name" : {
                    "en" : "Sysem Planning",
                    "ja" : "システム企画"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP",
                "sort" : 1
            },
            {
                "id" : "BA",
                "name" : {
                    "en" : "Business Analysis",
                    "ja" : "業務分析"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP",
                "sort" : 2
            },
            {
                "id" : "SA",
                "name" : {
                    "en" : "System Analysis",
                    "ja" : "システム分析"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP",
                "sort" : 3
            },
            {
                "id" : "RD",
                "name" : {
                    "en" : "Requirements Definition",
                    "ja" : "要件定義"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP",
                "sort" : 4
            },
            {
                "id" : "RE",
                "name" : {
                    "en" : "Rough Estimate",
                    "ja" : "概算見積"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP",
                "sort" : 5
            },
            {
                "id" : "E",
                "name" : {
                    "en" : "Estimate",
                    "ja" : "見積"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP",
                "sort" : 6
            },
            {
                "id" : "FD",
                "name" : {
                    "en" : "Function Design",
                    "ja" : "機能設計"
                },
                "categoryId" : "DevUP",
                "colorId" : "DevUP",
                "sort" : 7
            },
            {
                "id" : "HLD",
                "name" : {
                    "en" : "High-Level Design",
                    "ja" : "基本設計"
                },
                "categoryId" : "DevMP",
                "colorId" : "DevMP",
                "sort" : 8
            },
            {
                "id" : "LLD",
                "name" : {
                    "en" : "Low-Level Design",
                    "ja" : "詳細設計"
                },
                "categoryId" : "DevMP",
                "colorId" : "DevMP",
                "sort" : 9
            },
            {
                "id" : "C",
                "name" : {
                    "en" : "Coding",
                    "ja" : "製造"
                },
                "categoryId" : "DevMP",
                "colorId" : "DevMP",
                "sort" : 10
            },
            {
                "id" : "UT",
                "name" : {
                    "en" : "Unit Test",
                    "ja" : "単体テスト"
                },
                "categoryId" : "DevMP",
                "colorId" : "DevMP",
                "sort" : 11
            },
            {
                "id" : "IT",
                "name" : {
                    "en" : "Integration Test",
                    "ja" : "結合テスト"
                },
                "categoryId" : "DevLP",
                "colorId" : "DevLP",
                "sort" : 12
            },
            {
                "id" : "ST",
                "name" : {
                    "en" : "System Test",
                    "ja" : "システムテスト"
                },
                "categoryId" : "DevLP",
                "colorId" : "DevLP",
                "sort" : 13
            },
            {
                "id" : "UAT",
                "name" : {
                    "en" : "User Acceptance Test",
                    "ja" : "ユーザー受入テスト"
                },
                "categoryId" : "DevLP",
                "colorId" : "DevLP",
                "sort" : 14
            },
            {
                "id" : "DP",
                "name" : {
                    "en" : "Deployment",
                    "ja" : "本番リリース"
                },
                "categoryId" : "DevLP",
                "colorId" : "DevLP",
                "sort" : 15
            },
            {
                "id" : "SM",
                "name" : {
                    "en" : "System Maintenance",
                    "ja" : "システム保守"
                },
                "categoryId" : "RW",
                "colorId" : "RW",
                "sort" : 16
            },
            {
                "id" : "SO",
                "name" : {
                    "en" : "System Operation",
                    "ja" : "システム運用"
                },
                "categoryId" : "RW",
                "colorId" : "RW",
                "sort" : 17
            },
            {
                "id" : "HD",
                "name" : {
                    "en" : "Help Desk",
                    "ja" : "ヘルプデスク"
                },
                "categoryId" : "RW",
                "colorId" : "RW",
                "sort" : 995
            },
            {
                "id" : "M",
                "name" : {
                    "en" : "Monitoring",
                    "ja" : "モニタリング"
                },
                "categoryId" : "RW",
                "colorId" : "RW",
                "sort" : 996
            },    
            {
                "id" : "T",
                "name" : {
                    "en" : "Training",
                    "ja" : "研修"
                },
                "categoryId" : "O",
                "colorId" : "O",
                "sort" : 997
            },
            {
                "id" : "CL",
                "name" : {
                    "en" : "Cleaning",
                    "ja" : "清掃"
                },
                "categoryId" : "O",
                "colorId" : "O",
                "sort" : 998
            },
            {
                "id" : "D",
                "name" : {
                    "en" : "Documentation",
                    "ja" : "資料作成"
                },
                "categoryId" : "O",
                "colorId" : "O",
                "sort" : 999
            }
        ];
    }
}

export { TaskTypeRepository };