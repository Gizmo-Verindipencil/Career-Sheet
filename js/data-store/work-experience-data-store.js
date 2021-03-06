/**
 * 職務経歴データのデータストアを提供します。
 * データベース等のデータストアを表すダミーです。
 */
class WorkExperienceDataStore {
    /**
     * 職務経歴データを取得します。
     * @return {Array<Object>} 職務経歴データを返します。
     */
    get = () => {
        return [
            {
                "userId" : "1",
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
                "programmingLanguage" : [
                    "VBA"
                ],
                "developmentTool" : [],
                "framework" : [],
                "platform" : [],
                "database" : [],
                "uncategorizedTechnology" : [],
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
                ],
                "businessRelationshipId" : "me-N"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
                    "VBA"
                ],
                "developmentTool" : [],
                "framework" : [],
                "platform" : [],
                "database" : [
                    "Access"
                ],
                "uncategorizedTechnology" : [],
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
                ],
                "businessRelationshipId" : "me-N"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
                    "VBA", 
                    "VBScript",
                    "Jet SQL"
                ],
                "developmentTool" : [],
                "framework" : [],
                "platform" : [],
                "database" : [
                    "Access"
                ],
                "uncategorizedTechnology" : [],
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
                        "name" : "データフロー図作成",
                        "type" : [
                            "D"
                        ]
                    }
                ],
                "businessRelationshipId" : "me-N-T-NS-M"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
                    "C#"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [],
                "platform" : [],
                "database" : [],
                "uncategorizedTechnology" : [],
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
                ],
                "businessRelationshipId" : "me-N"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "SQL-Server"
                ],
                "uncategorizedTechnology" : [
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
                ],
                "businessRelationshipId" : "me-N-A-S"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "SQL-Server"
                ],
                "uncategorizedTechnology" : [
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
                ],
                "businessRelationshipId" : "me-N-A-S"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "SQL-Server"
                ],
                "uncategorizedTechnology" : [
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
                ],
                "businessRelationshipId" : "me-N-A-P"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "SQL-Server"
                ],
                "uncategorizedTechnology" : [
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
                ],
                "businessRelationshipId" : "me-N-A-P"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
                    "JavaScript"
                ],
                "developmentTool" : [
                    "Excel"
                ],
                "framework" : [],
                "platform" : [
                    "xCute"
                ],
                "database" : [],
                "uncategorizedTechnology" : [
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
                ],
                "businessRelationshipId" : "me-N-A"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "uncategorizedTechnology" : [
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
                            "IT"
                        ]
                    },
                    {
                        "name" : "設計レビュー",
                        "type" : []
                    }
                ],
                "businessRelationshipId" : "me-N-A-SN"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
                    "JavaScript"
                ],
                "developmentTool" : [
                    "Forguncy Builder Pro"
                ],
                "framework" : [],
                "platform" : [
                    "Forguncy"
                ],
                "database" : [
                    "SQLite"
                ],
                "uncategorizedTechnology" : [
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
                ],
                "businessRelationshipId" : "me-N-A-D"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "Oracle"
                ],
                "uncategorizedTechnology" : [
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
                ],
                "businessRelationshipId" : "me-N-A-H"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
                    "VB.NET",
                    "JavaScript",
                    "T-SQL"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [],
                "platform" : [],
                "database" : [
                    "SQL-Server"
                ],
                "uncategorizedTechnology" : [
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
                        "type" : []
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
                ],
                "businessRelationshipId" : "me-N-A-P"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "SQL-Server"
                ],
                "uncategorizedTechnology" : [],
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
                ],
                "businessRelationshipId" : "me-N-A-?"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "Oracle(AWS)"
                ],
                "uncategorizedTechnology" : [],
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
                ],
                "businessRelationshipId" : "me-N-B-NC-?"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "Oracle"
                ],
                "uncategorizedTechnology" : [
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
                ],
                "businessRelationshipId" : "me-N-(A,NE,T)-H"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "Oracle"
                ],
                "uncategorizedTechnology" : [],
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
                ],
                "businessRelationshipId" : "me-N-(A,NE,T)-H"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "uncategorizedTechnology" : [
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
                ],
                "businessRelationshipId" : "me-N-(A,NE,T)-H"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "uncategorizedTechnology" : [],
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
                ],
                "businessRelationshipId" : "me-N-(A,NE,T)-H"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "Oracle"
                ],
                "uncategorizedTechnology" : [
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
                    },
                ],
                "businessRelationshipId" : "me-N-(A,NE,T,F)-H"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "uncategorizedTechnology" : [
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
                ],
                "businessRelationshipId" : "me-N-(A,NE,T)-H"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [],
                "developmentTool" : [
                    "Flow Designer"
                ],
                "framework" : [],
                "platform" : [
                    "ASTERIA Warp"
                ],
                "database" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "uncategorizedTechnology" : [],
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
                ],
                "businessRelationshipId" : "me-N-(A,NE,T)-H"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
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
                "database" : [
                    "SQL-Server",
                    "Oracle"
                ],
                "uncategorizedTechnology" : [
                    "jQuery",
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
                ],
                "businessRelationshipId" : "me-N-(A,NE,T)-H"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
                    "VB.NET",
                    "PL/SQL"
                ],
                "developmentTool" : [
                    "Visual Studio",
                    "SQL Developer"
                ],
                "framework" : [],
                "platform" : [],
                "database" : [
                    "Oracle"
                ],
                "uncategorizedTechnology" : [
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
                ],
                "businessRelationshipId" : "me-N-A"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
                    "VBA"
                ],
                "developmentTool" : [],
                "framework" : [],
                "platform" : [],
                "database" : [
                    "Access"
                ],
                "uncategorizedTechnology" : [],
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
                ],
                "businessRelationshipId" : "me-N-A"
            },
            {
                "userId" : "1",
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
                "programmingLanguage" : [
                    "VBScript",
                    "VBA",
                    "T-SQL",
                    "Jet SQL"
                ],
                "developmentTool" : [
                    "Visual Studio Code"
                ],
                "framework" : [
                    "Classic ASP"
                ],
                "platform" : [],
                "database" : [
                    "SQL-Server",
                    "Access"
                ],
                "uncategorizedTechnology" : [],
                "projectSummary" : "システム改訂",
                "projectPeakSize" : "6",
                "subordinate" : "0",
                "system" : [
                    "資産管理システム"
                ],
                "task" : [
                    {
                        "name" : "影響調査",
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
                ],
                "businessRelationshipId" : "me-N-A-P"
            },
            {
                "userId" : "1",
                "no" : "27",
                "businessType" : "カー用品メーカー",
                "period" : {
                    "from" : "2021-2-1",
                    "to" : "2021-3-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programmingLanguage" : [
                    "C#",
                    "T-SQL"
                ],
                "developmentTool" : [
                    "Visual Studio"
                ],
                "framework" : [
                    "Dapper",
                    "MS Test"
                ],
                "platform" : [],
                "database" : [
                    "SQL-Server"
                ],
                "uncategorizedTechnology" : [
                    "Autofac"
                ],
                "projectSummary" : "システム新規開発",
                "projectPeakSize" : "6",
                "subordinate" : "0",
                "system" : [
                    "EDI"
                ],
                "task" : [
                    {
                        "name" : "調査",
                        "type" : [
                            "C"
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
                        "name" : "マニュアル修正",
                        "type" : [
                            "D"
                        ]
                    }
                ],
                "businessRelationshipId" : "me-N-A-P-TM"
            },
            {
                "userId" : "1",
                "no" : "28",
                "businessType" : "保険",
                "period" : {
                    "from" : "2021-3-15",
                    "to" : "2021-3-22"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programmingLanguage" : [
                    "JavaScript"
                ],
                "developmentTool" : [],
                "framework" : [
                    "GrapesJs"
                ],
                "platform" : [
                    "Form.io"
                ],
                "database" : [],
                "uncategorizedTechnology" : [
                    "JQuery formBuilder",
                    "Packery",
                    "shopify draggable",
                    "interact.js"
                ],
                "projectSummary" : "システム新規開発",
                "projectPeakSize" : "1",
                "subordinate" : "0",
                "system" : [
                    "WEBアプリケーション"
                ],
                "task" : [
                    {
                        "name" : "概算見積",
                        "type" : [
                            "RE"
                        ]
                    }
                ],
                "businessRelationshipId" : "me-N-A"
            },
            {
                "userId" : "1",
                "no" : "29",
                "businessType" : "卸販売",
                "period" : {
                    "from" : "2021-3-29",
                    "to" : "2021-4-19"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programmingLanguage" : [
                    "VBA",
                    "T-SQL",
                    "Jet SQL"
                ],
                "developmentTool" : [
                    "SQL Server Management Studio"
                ],
                "framework" : [],
                "platform" : [],
                "database" : [
                    "SQL-Server",
                    "Access"
                ],
                "uncategorizedTechnology" : [],
                "projectSummary" : "システム改訂",
                "projectPeakSize" : "5",
                "subordinate" : "0",
                "system" : [
                    "業務ツール群"
                ],
                "task" : [
                    {
                        "name" : "基本設計",
                        "type" : [
                            "HLD"
                        ]
                    },
                    {
                        "name" : "チューニング",
                        "type" : [
                            "C"
                        ]
                    }
                ],
                "businessRelationshipId" : "me-N-A-P"
            },
            {
                "userId" : "1",
                "no" : "30",
                "businessType" : "カー用品メーカー",
                "period" : {
                    "from" : "2021-4-19",
                    "to" : "2021-6-31"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programmingLanguage" : [
                    "VB.NET",
                    "T-SQL"
                ],
                "developmentTool" : [
                    "SQL Server Management Studio"
                ],
                "framework" : [
                    "ASP.NET"
                ],
                "platform" : [],
                "database" : [
                    "SQL-Server"
                ],
                "uncategorizedTechnology" : [],
                "projectSummary" : "システム改訂",
                "projectPeakSize" : "3",
                "subordinate" : "0",
                "system" : [
                    "収支分析システム"
                ],
                "task" : [
                    {
                        "name" : "方式設計",
                        "type" : [
                            "HLD"
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
                ],
                "businessRelationshipId" : "me-N-A-P"
            },
            {
                "userId" : "1",
                "no" : "31",
                "businessType" : "機械メーカー",
                "period" : {
                    "from" : "2021-5-17",
                    "to" : "2021-6-1"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programmingLanguage" : [
                    "C#",
                    "Javascript"
                ],
                "developmentTool" : [],
                "framework" : [
                    "React"
                ],
                "platform" : [],
                "database" : [
                    "AWS RDS"
                ],
                "uncategorizedTechnology" : [],
                "projectSummary" : "システムリプレース",
                "projectPeakSize" : "3",
                "subordinate" : "0",
                "system" : [
                    "資産管理システム"
                ],
                "task" : [
                    {
                        "name" : "概算見積",
                        "type" : [
                            "RE"
                        ]
                    }
                ],
                "businessRelationshipId" : "me-N-A-P"
            },
            {
                "userId" : "1",
                "no" : "32",
                "businessType" : "建築",
                "period" : {
                    "from" : "2021-6-8",
                    "to" : "2021-6-9"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programmingLanguage" : [],
                "developmentTool" : [],
                "framework" : [],
                "platform" : [],
                "database" : [],
                "uncategorizedTechnology" : [],
                "projectSummary" : "システム新規開発",
                "projectPeakSize" : "2",
                "subordinate" : "0",
                "system" : [
                    "チェックツール"
                ],
                "task" : [
                    {
                        "name" : "概算見積",
                        "type" : [
                            "RE"
                        ]
                    }
                ],
                "businessRelationshipId" : "me-N-A-PL"
            },
            {
                "userId" : "1",
                "no" : "33",
                "businessType" : "メーカー",
                "period" : {
                    "from" : "2021-6-14",
                    "to" : "2021-7-14"
                },
                "device" : [
                    "PC"
                ],
                "os" : [
                    "Windows 10"
                ],
                "programmingLanguage" : [
                    "VBA",
                    "Jet SQL"
                ],
                "developmentTool" : [],
                "framework" : [],
                "platform" : [],
                "database" : [
                    "Access"
                ],
                "uncategorizedTechnology" : [],
                "projectSummary" : "システム改訂",
                "projectPeakSize" : "18",
                "subordinate" : "0",
                "system" : [
                    "業務ツール群"
                ],
                "task" : [
                    {
                        "name" : "ソースコードマージ",
                        "type" : [
                            "C"
                        ]
                    }
                ],
                "businessRelationshipId" : "me-N-A-PL"
            }
        ];
    }
}

export { WorkExperienceDataStore };