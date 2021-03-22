/**
 * 職務経歴データのリポジトリ（ダミー）
 */
class WorkExperienceRepository {
    /**
     * 職務経歴データを取得する
     * @return {Array<Object>} 職務経歴データ
     */
    getAll = () => {
        return [
            {
                "no" : "1",
                "businessType" : "社内",
                "period" : {
                    "from" : "2015-2-1",
                    "to" : "2015-3-21"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VBA"
                ],
                "developmentTool" : [],
                "framework" : [],
                "platform" : [],
                "db" : [],
                "other" : [],
                "projectSummary" : "インターンシップ",
                "projectPeakSize" : "40",
                "subordinate" : "0",
                "system" : [],
                "task" : [
                    {
                        "name" : "ビジネスマナー研修",
                        "type" : [
                            "T"
                        ]
                    },
                    {
                        "name" : "言語研修",
                        "type" : [
                            "T"
                        ]
                    },
                    {
                        "name" : "技術研修",
                        "type" : [
                            "T"
                        ]
                    },
                    {
                        "name" : "清掃",
                        "type" : [
                            "CL"
                        ]
                    }
                ]
            },
            {
                "no" : "2",
                "businessType" : "社内",
                "period" : {
                    "from" : "2015-3-22",
                    "to" : "2015-3-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VBA"
                ],
                "developmentTool" : [],
                "framework" : [],
                "platform" : [],
                "db" : [
                    "Access"
                ],
                "other" : [],
                "projectSummary" : "新人研修",
                "projectPeakSize" : "5",
                "subordinate" : "0",
                "system" : [],
                "task" : [
                    {
                        "name" : "ビジネスマナー研修",
                        "type" : [
                            "T"
                        ]
                    }
                ]
            },
            {
                "no" : "3",
                "businessType" : "証券",
                "period" : {
                    "from" : "2015-4-1",
                    "to" : "2016-4-30"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VBA", 
                    "VBScript"
                ],
                "developmentTool" : [],
                "framework" : [],
                "platform" : [],
                "db" : [
                    "Access"
                ],
                "other" : [],
                "projectSummary" : "監視作業",
                "projectPeakSize" : "15",
                "subordinate" : "0",
                "system" : [],
                "task" : [
                    {
                        "name" : "モニタリング",
                        "type" : [
                            "M"
                        ]
                    },
                    {
                        "name" : "ヘルプデスク",
                        "type" : [
                            "HD"
                        ]
                    },
                    {
                        "name" : "ツール作成(設計～テスト)",
                        "type" : [
                            "LLD",
                            "C",
                            "UT"
                        ]
                    },
                    {
                        "name" : "手順書作成",
                        "type" : [
                            "D"
                        ]
                    },
                    {
                        "name" : "DFD作成",
                        "type" : [
                            "D"
                        ]
                    }
                ]
            },
            {
                "no" : "4",
                "businessType" : "社内",
                "period" : {
                    "from" : "2016-5-1",
                    "to" : "2016-6-12"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "C#"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [],
                "platform" : [],
                "db" : [],
                "other" : [],
                "projectSummary" : "社内研修＋雑務",
                "projectPeakSize" : "3",
                "subordinate" : "0",
                "system" : [],
                "task" : [
                    {
                        "name" : "詳細設計/実装/テスト",
                        "type" : [
                            "LLD",
                            "C",
                            "UT"
                        ]
                    },{
                        "name" : "言語研修",
                        "type" : [
                            "T"
                        ]
                    },
                    {
                        "name" : "PCセットアップ",
                        "type" : []
                    },
                    {
                        "name" : "事務作業",
                        "type" : []
                    },
                    {
                        "name" : "手順書作成",
                        "type" : []
                    },
                    {
                        "name" : "資料雛形整備",
                        "type" : []
                    }
                ]
            },
            {
                "no" : "5",
                "businessType" : "産業機械メーカー",
                "period" : {
                    "from" : "2016-6-12",
                    "to" : "2017-4-30"
                },
                "device" : [
                    "PC",
                    "ハンディターミナル"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VB6.0",
                    "VB.NET",
                    "CRS",
                    "T-SQL"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [],
                "platform" : [
                    "Biz Browser"
                ],
                "db" : [
                    "SQL-Server"
                ],
                "other" : [
                    "Active Report",
                    "Subversion"
                ],
                "projectSummary" : "システム統合",
                "projectPeakSize" : "20",
                "subordinate" : "0",
                "system" : [
                    "販売管理システム",
                    "生産管理システム"
                ],
                "task" : [
                    {
                        "name" : "マニュアル作成",
                        "type" : [
                            "D"
                        ]
                    },
                    {
                        "name" : "進捗管理",
                        "type" : []
                    },
                    {
                        "name" : "仕様調査",
                        "type" : []
                    },
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    }
                ]
            },
            {
                "no" : "6",
                "businessType" : "産業機械メーカー",
                "period" : {
                    "from" : "2017-5-1",
                    "to" : "2017-10-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "CRS",
                    "T-SQL"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [],
                "platform" : [
                    "Biz Browser"
                ],
                "db" : [
                    "SQL-Server"
                ],
                "other" : [
                    "Active Report",
                    "Subversion"
                ],
                "projectSummary" : "システム改訂",
                "projectPeakSize" : "10",
                "subordinate" : "0",
                "system" : [
                    "販売管理システム"
                ],
                "task" : [
                    {
                        "name" : "マニュアル作成",
                        "type" : [
                            "D"
                        ]
                    },
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "IT"
                        ]
                    },
                    {
                        "name" : "調査",
                        "type" : []
                    }
                ]
            },
            {
                "no" : "7",
                "businessType" : "カー用品メーカー",
                "period" : {
                    "from" : "2017-11-1",
                    "to" : "2017-12-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "T-SQL"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [
                    "ASP.NET"
                ],
                "platform" : [],
                "db" : [
                    "SQL-Server"
                ],
                "other" : [
                    "Excel Creator",
                    "Subversion"
                ],
                "projectSummary" : "システム改訂/保守",
                "projectPeakSize" : "2",
                "subordinate" : "0",
                "system" : [
                    "収支分析システム"
                ],
                "task" : [
                    {
                        "name" : "データパッチ検証",
                        "type" : [
                            "SM"
                        ]
                    },
                    {
                        "name" : "パフォーマンス検証",
                        "type" : [
                            "SM"
                        ]
                    },
                    {
                        "name" : "サブシステム改訂(設計～テスト)",
                        "type" : [
                            "LLD",
                            "C",
                            "UT"
                        ]
                    },
                ]
            },
            {
                "no" : "8",
                "businessType" : "カー用品メーカー",
                "period" : {
                    "from" : "2018-1-1",
                    "to" : "2018-3-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "T-SQL"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [
                    "ASP.NET"
                ],
                "platform" : [],
                "db" : [
                    "SQL-Server"
                ],
                "other" : [
                    "SPREAD",
                    "Subversion"
                ],
                "projectSummary" : "システム新規開発",
                "projectPeakSize" : "3",
                "subordinate" : "0",
                "system" : [
                    "費用管理システム"
                ],
                "task" : [
                    {
                        "name" : "基本設計",
                        "type" : [
                            "HLD"
                        ]
                    },
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "IT"
                        ]
                    },
                    {
                        "name" : "各種レビュー",
                        "type" : []
                    },
                    {
                        "name" : "AP基盤整備",
                        "type" : [
                            "SA",
                            "C"
                        ]
                    }
                ]
            },
            {
                "no" : "9",
                "businessType" : "開発(SI)",
                "period" : {
                    "from" : "2018-4-1",
                    "to" : "2018-4-30"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "JavaScript"
                ],
                "developmentTool" : [
                    "Excel"
                ],
                "framework" : [],
                "platform" : [
                    "xCute"
                ],
                "db" : [],
                "other" : [
                    "Subversion"
                ],
                "projectSummary" : "技術検証",
                "projectPeakSize" : "2",
                "subordinate" : "0",
                "system" : [
                    "受注管理システム"
                ],
                "task" : [
                    {
                        "name" : "調査",
                        "type" : [
                            "LLD",
                            "C",
                            "UT"
                        ]
                    }
                ]
            },
            {
                "no" : "10",
                "businessType" : "機器メーカー",
                "period" : {
                    "from" : "2018-5-1",
                    "to" : "2018-6-30"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "Java",
                    "T-SQL",
                    "PL/SQL"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [
                    "独自基盤1"
                ],
                "platform" : [],
                "db" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "other" : [
                    "Subversion"
                ],
                "projectSummary" : "システム新規開発",
                "projectPeakSize" : "10",
                "subordinate" : "0",
                "system" : [
                    "販売管理システム"
                ],
                "task" : [
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "CD"
                        ]
                    },
                    {
                        "name" : "設計レビュー",
                        "type" : []
                    }
                ]
            },
            {
                "no" : "11",
                "businessType" : "輸入代理",
                "period" : {
                    "from" : "2018-7-1",
                    "to" : "2018-8-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "JavaScript"
                ],
                "developmentTool" : [
                    "Forguncy Builder Pro"
                ],
                "framework" : [],
                "platform" : [
                    "Forguncy"
                ],
                "db" : [
                    "SQLite"
                ],
                "other" : [
                    "Subversion"
                ],
                "projectSummary" : "システム新規開発",
                "projectPeakSize" : "3",
                "subordinate" : "0",
                "system" : [
                    "販売管理システム"
                ],
                "task" : [
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "IT"
                        ]
                    },
                    {
                        "name" : "ツールに関する調査",
                        "type" : []
                    }
                ]
            },
            {
                "no" : "12",
                "businessType" : "自販機サービス",
                "period" : {
                    "from" : "2018-9-1",
                    "to" : "2018-10-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "PL/SQL"
                ],
                "developmentTool" : [
                    "Visual Studio",
                    "Flow Designer"
                ],
                "framework" : [],
                "platform" : [
                    "ASTERIA Warp"
                ],
                "db" : [
                    "Oracle"
                ],
                "other" : [
                    "Crystal Report",
                    "Subversion"
                ],
                "projectSummary" : "システム改訂",
                "projectPeakSize" : "3",
                "subordinate" : "0",
                "system" : [
                    "販売管理システム"
                ],
                "task" : [
                    {
                        "name" : "要件調査",
                        "type" : [
                            "RD"
                        ]
                    },
                    {
                        "name" : "基本設計",
                        "type" : [
                            "HLD"
                        ]
                    },
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "IT"
                        ]
                    }
                ]
            },
            {
                "no" : "13",
                "businessType" : "カー用品メーカー",
                "period" : {
                    "from" : "2018-11-1",
                    "to" : "2019-1-13"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "JavaScript",
                    "T-SQL"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [],
                "platform" : [],
                "db" : [
                    "SQL-Server"
                ],
                "other" : [
                    "Subversion"
                ],
                "projectSummary" : "システム改訂",
                "projectPeakSize" : "4",
                "subordinate" : "0",
                "system" : [
                    "収支分析システム"
                ],
                "task" : [
                    {
                        "name" : "要件調査",
                        "type" : [
                            "BS"
                        ]
                    },
                    {
                        "name" : "基本設計",
                        "type" : [
                            "HLD"
                        ]
                    },
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "IT"
                        ]
                    }
                ]
            },
            {
                "no" : "14",
                "businessType" : "不明",
                "period" : {
                    "from" : "2019-1-14",
                    "to" : "2019-2-17"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "JavaScript",
                    "T-SQL"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [
                    "ASP.NET",
                    "独自基盤1"
                ],
                "platform" : [],
                "db" : [
                    "SQL-Server"
                ],
                "other" : [],
                "projectSummary" : "SQL-Serverアップグレード対応",
                "projectPeakSize" : "3",
                "subordinate" : "0",
                "system" : [
                    "???"
                ],
                "task" : [
                    {
                        "name" : "テスト",
                        "type" : [
                            "IT"
                        ]
                    },
                    {
                        "name" : "調査",
                        "type" : []
                    }
                ]
            },
            {
                "no" : "15",
                "businessType" : "POSメーカー",
                "period" : {
                    "from" : "2019-2-18",
                    "to" : "2019-5-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "PL/SQL"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [
                    "独自基盤2"
                ],
                "platform" : [],
                "db" : [
                    "Oracle(AWS)"
                ],
                "other" : [],
                "projectSummary" : "システム改訂（消費税対応）",
                "projectPeakSize" : "5",
                "subordinate" : "0",
                "system" : [
                    "販売管理システム"
                ],
                "task" : [
                    {
                        "name" : "失踪者の作業調査",
                        "type" : []
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "IT"
                        ]
                    },
                    {
                        "name" : "総合テスト",
                        "type" : [
                            "ST"
                        ]
                    }
                ]
            },
            {
                "no" : "16",
                "businessType" : "自販機サービス",
                "period" : {
                    "from" : "2019-6-1",
                    "to" : "2019-9-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7",
                    "Windows 8",
                    "Windows 10"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "PL/SQL"
                ],
                "developmentTool" : [
                    "Visual Studio",
                    "Flow Designer"
                ],
                "framework" : [],
                "platform" : [
                    "ASTERIA Warp"
                ],
                "db" : [
                    "Oracle"
                ],
                "other" : [
                    "Crystal Report",
                    "Subversion",
                    "Visual SourceSafe"
                ],
                "projectSummary" : "システム改訂（消費税対応）",
                "projectPeakSize" : "5",
                "subordinate" : "1",
                "system" : [
                    "販売管理システム",
                    "データ連携基盤"
                ],
                "task" : [
                    {
                        "name" : "基本設計",
                        "type" : [
                            "HLD"
                        ]
                    },
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "IT"
                        ]
                    },
                    {
                        "name" : "総合テスト",
                        "type" : [
                            "ST"
                        ]
                    },
                    {
                        "name" : "本番リリース",
                        "type" : [
                            "DP"
                        ]
                    }
                ]
            },
            {
                "no" : "17",
                "businessType" : "自販機サービス",
                "period" : {
                    "from" : "2019-9-1",
                    "to" : "2019-10-1"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programLanguage" : [
                    "Java",
                    "PL/SQL"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [],
                "platform" : [
                    "intra-mart"
                ],
                "db" : [
                    "Oracle"
                ],
                "other" : [],
                "projectSummary" : "消費税改正の応急対応",
                "projectPeakSize" : "1",
                "subordinate" : "0",
                "system" : [
                    "社内ワークフローシステム"
                ],
                "task" : [
                    {
                        "name" : "システム調査",
                        "type" : [
                            "SA"
                        ]
                    },
                    {
                        "name" : "要件調査",
                        "type" : [
                            "RD"
                        ]
                    },
                    {
                        "name" : "顧客訪問/交渉",
                        "type" : []
                    },
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "IT"
                        ]
                    },
                    {
                        "name" : "本番リリース",
                        "type" : [
                            "DP"
                        ]
                    }
                ]
            },
            {
                "no" : "18",
                "businessType" : "自販機サービス",
                "period" : {
                    "from" : "2019-10-1",
                    "to" : "2019-11-30"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programLanguage" : [
                    "Java",
                    "JavaScript",
                    "T-SQL",
                    "PL/SQL"
                ],
                "developmentTool" : [
                    "e-Builder(Eclipse)"
                ],
                "framework" : [],
                "platform" : [
                    "intra-mart"
                ],
                "db" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "other" : [
                    "Subversion"
                ],
                "projectSummary" : "開発環境構築/調査",
                "projectPeakSize" : "2",
                "subordinate" : "0",
                "system" : [
                    "社内ワークフローシステム"
                ],
                "task" : [
                    {
                        "name" : "現状ヒアリング",
                        "type" : []
                    },
                    {
                        "name" : "引継資産調査",
                        "type" : []
                    },
                    {
                        "name" : "開発環境構築",
                        "type" : []
                    }
                ]
            },
            {
                "no" : "19",
                "businessType" : "自販機サービス",
                "period" : {
                    "from" : "2019-11-1",
                    "to" : "2019-11-30"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 8",
                    "Windows 10"
                ],
                "programLanguage" : [
                    "Java",
                    "JavaScript"
                ],
                "developmentTool" : [
                    "Visual Studio",
                    "Oracle Enterprise Manager Console"
                ],
                "framework" : [],
                "platform" : [
                    "intra-mart"
                ],
                "db" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "other" : [],
                "projectSummary" : "保守（本番障害対応）",
                "projectPeakSize" : "2",
                "subordinate" : "0",
                "system" : [
                    "社内ワークフローシステム"
                ],
                "task" : [
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "本番リリース",
                        "type" : [
                            "DP"
                        ]
                    },
                ]
            },
            {
                "no" : "20",
                "businessType" : "自販機サービス",
                "period" : {
                    "from" : "2019-12-15",
                    "to" : "2020-1-10"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows Server 2010"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "UWSC",
                    "PL/SQL"
                ],
                "developmentTool" : [
                    "Visual Studio",
                    "Oracle Enterprise Manager Console"
                ],
                "framework" : [],
                "platform" : [],
                "db" : [
                    "Oracle"
                ],
                "other" : [
                    "Crystal Report",
                    "Visual SourceSafe"
                ],
                "projectSummary" : "RPA改訂",
                "projectPeakSize" : "3",
                "subordinate" : "1",
                "system" : [
                    "販売管理システム"
                ],
                "task" : [
                    {
                        "name" : "要件定義/調査",
                        "type" : [
                            "RD"
                        ]
                    },
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UD",
                            "CD"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "UD",
                            "CD"
                        ]
                    },
                    {
                        "name" : "本番リリース",
                        "type" : [
                            "DP"
                        ]
                    },
                ]
            },
            {
                "no" : "21",
                "businessType" : "自販機サービス",
                "period" : {
                    "from" : "2019-11-1",
                    "to" : "2020-3-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 8",
                    "Windows 10"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "Java",
                    "JavaScript",
                    "T-SQL",
                    "PL/SQL"
                ],
                "developmentTool" : [
                    "Visual Studio",
                    "e-Buider(Eclipse)",
                    "SQL Developer",
                    "A5:SQL Mk-2",
                    "SQL Server Management Studio"
                ],
                "framework" : [],
                "platform" : [
                    "intra-mart"
                ],
                "db" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "other" : [
                    "Crystal Report",
                    "Subversion"
                ],
                "projectSummary" : "システム改訂（消費税対応＋他）",
                "projectPeakSize" : "3",
                "subordinate" : "1",
                "system" : [
                    "販売管理システム",
                    "社内ワークフローシステム"
                ],
                "task" : [
                    {
                        "name" : "要件定義",
                        "type" : [
                            "RD"
                        ]
                    },
                    {
                        "name" : "見積",
                        "type" : [
                            "E"
                        ]
                    },
                    {
                        "name" : "基本設計",
                        "type" : [
                            "HLD"
                        ]
                    },
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "IT"
                        ]
                    },
                    {
                        "name" : "総合テスト",
                        "type" : [
                            "ST"
                        ]
                    },
                    {
                        "name" : "作業管理",
                        "type" : []
                    }
                ]
            },
            {
                "no" : "22",
                "businessType" : "自販機サービス",
                "period" : {
                    "from" : "2020-1-1",
                    "to" : "2020-1-1"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programLanguage" : [],
                "developmentTool" : [
                    "Flow Designer"
                ],
                "framework" : [],
                "platform" : [
                    "ASTERIA Warp"
                ],
                "db" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "other" : [],
                "projectSummary" : "基幹マイグレーションに伴う調査",
                "projectPeakSize" : "2",
                "subordinate" : "0",
                "system" : [
                    "データ連携基盤"
                ],
                "task" : [
                    {
                        "name" : "概算見積",
                        "type" : [
                            "SA",
                            "RE"
                        ]
                    }
                ]
            },
            {
                "no" : "23",
                "businessType" : "自販機サービス",
                "period" : {
                    "from" : "2019-12-1",
                    "to" : "2020-7-4"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 8",
                    "Windows 10"
                ],
                "programLanguage" : [
                    "Java",
                    "JavaScript",
                    "T-SQL"
                ],
                "developmentTool" : [
                    "e-Builder(Eclipse)",
                    "SQL Developer",
                    "SQL Server Management Studio"
                ],
                "framework" : [],
                "platform" : [
                    "intra-mart"
                ],
                "db" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "other" : [
                    "JQuery",
                    "Subversion"
                ],
                "projectSummary" : "システム改訂",
                "projectPeakSize" : "3",
                "subordinate" : "1",
                "system" : [
                    "社内ワークフローシステム"
                ],
                "task" : [
                    {
                        "name" : "要件定義",
                        "type" : [
                            "RD"
                        ]
                    },
                    {
                        "name" : "見積",
                        "type" : [
                            "E"
                        ]
                    },
                    {
                        "name" : "基本設計",
                        "type" : [
                            "HLD"
                        ]
                    },
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "IT"
                        ]
                    },
                    {
                        "name" : "総合テスト",
                        "type" : [
                            "ST"
                        ]
                    },
                    {
                        "name" : "作業管理",
                        "type" : []
                    }
                ]
            },
            {
                "no" : "24",
                "businessType" : "自販機サービス",
                "period" : {
                    "from" : "2019-7-5",
                    "to" : "2020-8-5"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 7",
                    "Windows 10"
                ],
                "programLanguage" : [
                    "VB.NET",
                    "PL/SQL"
                ],
                "developmentTool" : [
                    "Visual Studio",
                    "SQL Developer"
                ],
                "framework" : [],
                "platform" : [],
                "db" : [
                    "Oracle"
                ],
                "other" : [
                    "Subversion",
                    "Crystal Report"
                ],
                "projectSummary" : "業務引継/研修",
                "projectPeakSize" : "2",
                "subordinate" : "1",
                "system" : [
                    "販売管理システム"
                ],
                "task" : [
                    {
                        "name" : "要件定義",
                        "type" : [
                            "RD"
                        ]
                    },
                    {
                        "name" : "作業管理",
                        "type" : []
                    },
                    {
                        "name" : "レビュー",
                        "type" : []
                    }
                ]
            },
            {
                "no" : "25",
                "businessType" : "業務委託サービス",
                "period" : {
                    "from" : "2020-8-21",
                    "to" : "2020-8-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programLanguage" : [
                    "VBA"
                ],
                "developmentTool" : [],
                "framework" : [],
                "platform" : [],
                "db" : [
                    "Access"
                ],
                "other" : [],
                "projectSummary" : "不具合調査",
                "projectPeakSize" : "1",
                "subordinate" : "0",
                "system" : [
                    "業務ツール"
                ],
                "task" : [
                    {
                        "name" : "調査",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    }
                ]
            },
            {
                "no" : "26",
                "businessType" : "カー用品メーカー",
                "period" : {
                    "from" : "2020-9-1",
                    "to" : "2021-1-20"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programLanguage" : [
                    "VBScript",
                    "VBA",
                    "T-SQL"
                ],
                "developmentTool" : [],
                "framework" : [
                    "Classic ASP"
                ],
                "platform" : [],
                "db" : [
                    "SQL-Server",
                    "Access"
                ],
                "other" : [],
                "projectSummary" : "システム改訂",
                "projectPeakSize" : "6",
                "subordinate" : "0",
                "system" : [
                    "資産管理システム"
                ],
                "task" : [
                    {
                        "name" : "調査",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "基本設計",
                        "type" : [
                            "HLD"
                        ]
                    },
                    {
                        "name" : "詳細設計",
                        "type" : [
                            "LLD"
                        ]
                    },
                    {
                        "name" : "実装",
                        "type" : [
                            "C"
                        ]
                    },
                    {
                        "name" : "単体テスト",
                        "type" : [
                            "UT"
                        ]
                    },
                    {
                        "name" : "結合テスト",
                        "type" : [
                            "IT"
                        ]
                    }
                ]
            }
        ];
    }

    /**
     * 特定の職務経歴データを取得する
     * @param {String} no 経歴番号
     * @return {Object} 職務経歴データ
     */
    getByNo = no => {
        let experiences = this.getAll();
        experiences = experiences.filter(x => x.no === no);
        return experiences.length > 0 ? experiences[0] : null ;
    }

    /**
     * 職務経歴データを更新する
     * @param {Object} experience 職務経歴データ
     */
    post = experience => {
        // dummy
    }
}