/**
 * ビジネス関係データのデータストアを提供します。
 * データベース等のデータストアを表すダミーです。
 */
class BusinessRelationshipDataStore {
    /**
     * ビジネス関係データを取得します。
     * @return {Array<Object>} ビジネス関係データを返します。
     */
    get = () => {
        return [
            {
                "id" : "me-N",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    }
                ]
            },
            {
                "id" : "me-N-T-NS-M",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "T",
                        "description" : "2次請"
                    },
                    {
                        "id" : "NS",
                        "description" : "1次請(常駐先)"
                    },
                    {
                        "id" : "M",
                        "description" : "業務委託元"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "T"
                    },
                    {
                        "from" : "T",
                        "to" : "NS"
                    },
                    {
                        "from" : "NS",
                        "to" : "M"
                    }
                ]
            },
            {
                "id" : "me-N-A-S",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "A",
                        "description" : "元請(常駐先)"
                    },
                    {
                        "id" : "S",
                        "description" : "ユーザー"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "A"
                    },
                    {
                        "from" : "A",
                        "to" : "S"
                    }
                ]
            },
            {
                "id" : "me-N-A-P",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "A",
                        "description" : "1次請(常駐先)"
                    },
                    {
                        "id" : "P",
                        "description" : "ユーザー"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "A"
                    },
                    {
                        "from" : "A",
                        "to" : "P"
                    }
                ]
            },
            {
                "id" : "me-N-A",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "A",
                        "description" : "ユーザー(常駐先)"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "A"
                    }
                ]
            },
            {
                "id" : "me-N-A-SN",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "A",
                        "description" : "元請(常駐先)"
                    },
                    {
                        "id" : "SN",
                        "description" : "ユーザー(常駐先)"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "A"
                    },
                    {
                        "from" : "A",
                        "to" : "SN"
                    }
                ]
            },
            {
                "id" : "me-N-A-D",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "A",
                        "description" : "元請(常駐先)"
                    },
                    {
                        "id" : "D",
                        "description" : "ユーザー"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "A"
                    },
                    {
                        "from" : "A",
                        "to" : "D"
                    }
                ]
            },
            {
                "id" : "me-N-A-H",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "A",
                        "description" : "元請(常駐先)"
                    },
                    {
                        "id" : "H",
                        "description" : "ユーザー"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "A"
                    },
                    {
                        "from" : "A",
                        "to" : "H"
                    }
                ]
            },
            {
                "id" : "me-N-A-unknown",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "A",
                        "description" : "元請(常駐先)"
                    },
                    {
                        "id" : "unknown",
                        "description" : "ユーザー"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "A"
                    },
                    {
                        "from" : "A",
                        "to" : "unknown"
                    }
                ]
            },
            {
                "id" : "me-N-B-NC-unknown",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "B",
                        "description" : "2次請(常駐先)"
                    },
                    {
                        "id" : "NC",
                        "description" : "1次請"
                    },
                    {
                        "id" : "unknown",
                        "description" : "ユーザー"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "B"
                    },
                    {
                        "from" : "B",
                        "to" : "NC"
                    },
                    {
                        "from" : "NC",
                        "to" : "unknown"
                    }
                ]
            },
            {
                "id" : "me-N-(A,NE,T)-H",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "A",
                        "description" : "元請(常駐先)"
                    },
                    {
                        "id" : "NE",
                        "description" : "関連システム保守"
                    },
                    {
                        "id" : "T",
                        "description" : "関連システム保守(過去)"
                    },
                    {
                        "id" : "H",
                        "description" : "ユーザー"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "A"
                    },
                    {
                        "from" : "A",
                        "to" : "H"
                    },
                    {
                        "from" : "NE",
                        "to" : "H"
                    },
                    {
                        "from" : "T",
                        "to" : "H"
                    }
                ]
            },
            {
                "id" : "me-N-(A,NE,T,F)-H",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "A",
                        "description" : "元請(常駐先)"
                    },
                    {
                        "id" : "NE",
                        "description" : "関連システム保守"
                    },
                    {
                        "id" : "T",
                        "description" : "関連システム保守(過去)"
                    },
                    {
                        "id" : "F",
                        "description" : "取引先"
                    },
                    {
                        "id" : "H",
                        "description" : "ユーザー"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "A"
                    },
                    {
                        "from" : "A",
                        "to" : "H"
                    },
                    {
                        "from" : "NE",
                        "to" : "H"
                    },
                    {
                        "from" : "T",
                        "to" : "H"
                    },
                    {
                        "from" : "F",
                        "to" : "H"
                    }
                ]
            },
            {
                "id" : "me-N-A-P-TM",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "A",
                        "description" : "元請(常駐先)"
                    },
                    {
                        "id" : "P",
                        "description" : "ユーザー"
                    },
                    {
                        "id" : "TM",
                        "description" : "ユーザーの取引先"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "A"
                    },
                    {
                        "from" : "A",
                        "to" : "P"
                    },
                    {
                        "from" : "P",
                        "to" : "TM"
                    }
                ]
            },
            {
                "id" : "me-N-A-PL",
                "nodes" : [
                    {
                        "id" : "me",
                        "description" : "自分"
                    },
                    {
                        "id" : "N",
                        "description" : "所属会社"
                    },
                    {
                        "id" : "A",
                        "description" : "1次請(常駐先)"
                    },
                    {
                        "id" : "PL",
                        "description" : "ユーザー"
                    }
                ],
                "edges" : [
                    {
                        "from" : "me",
                        "to" : "N"
                    },
                    {
                        "from" : "N",
                        "to" : "A"
                    },
                    {
                        "from" : "A",
                        "to" : "PL"
                    }
                ]
            }
        ];
    }
}

export { BusinessRelationshipDataStore };