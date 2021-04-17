/**
 * 労働時間データのリポジトリを提供します。
 * 現状はバックエンドを表すダミーです。
 */
class WorkingHoursRepository {
    /**
     * 労働時間データを取得します。
     * @return {Array<Object>} 労働時間データを返します。
     */
    getAll = () => {
        return [
            {
                "year" : "2015",
                "month" : "4",
                "period" : {
                    "from" : "2015-3-21",
                    "to" : "2015-4-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "158.40",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "171.10",
                "overtimeHours" : "12.30",
                "holidayWorkingDays" : "0",
                "paidLeave" : "3",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2015",
                "month" : "5",
                "period" : {
                    "from" : "2015-4-21",
                    "to" : "2015-5-20"
                },
                "prescribedWorkingDays" : "18",
                "prescribedWorkingHours" : "135.00",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "144.00",
                "overtimeHours" : "9.30",
                "holidayWorkingDays" : "0",
                "paidLeave" : "3",
                "beingLate": {
                    "count" : "1",
                    "hours" : "0.5",
                    "comment" : ""
                }
            },
            {
                "year" : "2015",
                "month" : "6",
                "period" : {
                    "from" : "2015-5-21",
                    "to" : "2015-6-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "22",
                "actualWorkingHours" : "175.50",
                "overtimeHours" : "10.50",
                "holidayWorkingDays" : "1",
                "paidLeave" : "3",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2015",
                "month" : "7",
                "period" : {
                    "from" : "2015-6-21",
                    "to" : "2015-7-20"
                },
                "prescribedWorkingDays" : "20",
                "prescribedWorkingHours" : "150.00",
                "actualWorkingDays" : "20",
                "actualWorkingHours" : "181.50",
                "overtimeHours" : "31.50",
                "holidayWorkingDays" : "0",
                "paidLeave" : "3",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2015",
                "month" : "8",
                "period" : {
                    "from" : "2015-7-21",
                    "to" : "2015-8-20"
                },
                "prescribedWorkingDays" : "23",
                "prescribedWorkingHours" : "172.00",
                "actualWorkingDays" : "23",
                "actualWorkingHours" : "182.15",
                "overtimeHours" : "9.45",
                "holidayWorkingDays" : "0",
                "paidLeave" : "10",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2015",
                "month" : "9",
                "period" : {
                    "from" : "2015-8-21",
                    "to" : "2015-9-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "183.20",
                "overtimeHours" : "26.20",
                "holidayWorkingDays" : "0",
                "paidLeave" : "10",
                "beingLate": {
                    "count" : "1",
                    "hours" : "0.5",
                    "comment" : ""
                }
            },
            {
                "year" : "2015",
                "month" : "10",
                "period" : {
                    "from" : "2015-9-21",
                    "to" : "2015-10-20"
                },
                "prescribedWorkingDays" : "18",
                "prescribedWorkingHours" : "135.00",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "157.10",
                "overtimeHours" : "22.10",
                "holidayWorkingDays" : "0",
                "paidLeave" : "10",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2015",
                "month" : "11",
                "period" : {
                    "from" : "2015-10-21",
                    "to" : "2015-11-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "20",
                "actualWorkingHours" : "164.30",
                "overtimeHours" : "20.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "8",
                "beingLate": {
                    "count" : "1",
                    "hours" : "5.3",
                    "comment" : "通院"
                }
            },
            {
                "year" : "2015",
                "month" : "12",
                "period" : {
                    "from" : "2015-11-21",
                    "to" : "2015-12-20"
                },
                "prescribedWorkingDays" : "19",
                "prescribedWorkingHours" : "142.30",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "173.00",
                "overtimeHours" : "38.00",
                "holidayWorkingDays" : "1",
                "paidLeave" : "7",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "1",
                "period" : {
                    "from" : "2015-12-21",
                    "to" : "2016-1-20"
                },
                "prescribedWorkingDays" : "19",
                "prescribedWorkingHours" : "142.30",
                "actualWorkingDays" : "19",
                "actualWorkingHours" : "180.30",
                "overtimeHours" : "38.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "7",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "2",
                "period" : {
                    "from" : "2016-1-21",
                    "to" : "2016-2-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "210.00",
                "overtimeHours" : "52.30",
                "holidayWorkingDays" : "0",
                "paidLeave" : "7",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "3",
                "period" : {
                    "from" : "2016-2-21",
                    "to" : "2016-3-20"
                },
                "prescribedWorkingDays" : "20",
                "prescribedWorkingHours" : "150.00",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "154.10",
                "overtimeHours" : "19.10",
                "holidayWorkingDays" : "0",
                "paidLeave" : "5",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "4",
                "period" : {
                    "from" : "2016-3-21",
                    "to" : "2016-4-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "22",
                "actualWorkingHours" : "182.00",
                "overtimeHours" : "17.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "5",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "5",
                "period" : {
                    "from" : "2016-4-21",
                    "to" : "2016-5-20"
                },
                "prescribedWorkingDays" : "19",
                "prescribedWorkingHours" : "144.30",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "140.20",
                "overtimeHours" : "3.20",
                "holidayWorkingDays" : "0",
                "paidLeave" : "4",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "6",
                "period" : {
                    "from" : "2016-5-21",
                    "to" : "2016-6-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "159.10",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "169.25",
                "overtimeHours" : "10.15",
                "holidayWorkingDays" : "1",
                "paidLeave" : "4",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "7",
                "period" : {
                    "from" : "2016-6-21",
                    "to" : "2016-7-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "166.30",
                "overtimeHours" : "9.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "4",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "8",
                "period" : {
                    "from" : "2016-7-21",
                    "to" : "2016-8-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "19",
                "actualWorkingHours" : "160.25",
                "overtimeHours" : "17.55",
                "holidayWorkingDays" : "1",
                "paidLeave" : "13",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "9",
                "period" : {
                    "from" : "2016-8-21",
                    "to" : "2016-9-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "170.45",
                "overtimeHours" : "13.15",
                "holidayWorkingDays" : "0",
                "paidLeave" : "13",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "10",
                "period" : {
                    "from" : "2016-9-21",
                    "to" : "2016-10-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "20",
                "actualWorkingHours" : "181.00",
                "overtimeHours" : "31.00",
                "holidayWorkingDays" : "1",
                "paidLeave" : "13",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "11",
                "period" : {
                    "from" : "2016-10-21",
                    "to" : "2016-11-20"
                },
                "prescribedWorkingDays" : "20",
                "prescribedWorkingHours" : "150.00",
                "actualWorkingDays" : "20",
                "actualWorkingHours" : "178.30",
                "overtimeHours" : "28.30",
                "holidayWorkingDays" : "1",
                "paidLeave" : "13",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2016",
                "month" : "12",
                "period" : {
                    "from" : "2016-11-21",
                    "to" : "2016-12-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "174.40",
                "overtimeHours" : "17.10",
                "holidayWorkingDays" : "1",
                "paidLeave" : "13",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "1",
                "period" : {
                    "from" : "2016-12-21",
                    "to" : "2017-1-20"
                },
                "prescribedWorkingDays" : "18",
                "prescribedWorkingHours" : "135.00",
                "actualWorkingDays" : "15",
                "actualWorkingHours" : "127.15",
                "overtimeHours" : "14.45",
                "holidayWorkingDays" : "0",
                "paidLeave" : "10",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "2",
                "period" : {
                    "from" : "2017-1-21",
                    "to" : "2017-2-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "193.35",
                "overtimeHours" : "36.15",
                "holidayWorkingDays" : "0",
                "paidLeave" : "10",
                "beingLate": {
                    "count" : "1",
                    "hours" : "0.1",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "3",
                "period" : {
                    "from" : "2017-2-21",
                    "to" : "2017-3-20"
                },
                "prescribedWorkingDays" : "19",
                "prescribedWorkingHours" : "142.30",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "190.15",
                "overtimeHours" : "55.15",
                "holidayWorkingDays" : "1",
                "paidLeave" : "9",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "4",
                "period" : {
                    "from" : "2017-3-21",
                    "to" : "2017-4-20"
                },
                "prescribedWorkingDays" : "23",
                "prescribedWorkingHours" : "172.30",
                "actualWorkingDays" : "23",
                "actualWorkingHours" : "193.00",
                "overtimeHours" : "20.30",
                "holidayWorkingDays" : "0",
                "paidLeave" : "9",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "5",
                "period" : {
                    "from" : "2017-4-21",
                    "to" : "2017-5-20"
                },
                "prescribedWorkingDays" : "18",
                "prescribedWorkingHours" : "135.00",
                "actualWorkingDays" : "16",
                "actualWorkingHours" : "122.55",
                "overtimeHours" : "2.55",
                "holidayWorkingDays" : "0",
                "paidLeave" : "7",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "6",
                "period" : {
                    "from" : "2017-5-21",
                    "to" : "2017-6-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "22",
                "actualWorkingHours" : "191.40",
                "overtimeHours" : "26.40",
                "holidayWorkingDays" : "1",
                "paidLeave" : "7",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "7",
                "period" : {
                    "from" : "2017-6-21",
                    "to" : "2017-7-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "208.20",
                "overtimeHours" : "50.50",
                "holidayWorkingDays" : "0",
                "paidLeave" : "7",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "8",
                "period" : {
                    "from" : "2017-7-21",
                    "to" : "2017-8-20"
                },
                "prescribedWorkingDays" : "20",
                "prescribedWorkingHours" : "150.00",
                "actualWorkingDays" : "19",
                "actualWorkingHours" : "191.45",
                "overtimeHours" : "49.15",
                "holidayWorkingDays" : "0",
                "paidLeave" : "18",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "9",
                "period" : {
                    "from" : "2017-8-21",
                    "to" : "2017-9-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "20",
                "actualWorkingHours" : "177.25",
                "overtimeHours" : "27.45",
                "holidayWorkingDays" : "0",
                "paidLeave" : "16",
                "beingLate": {
                    "count" : "1",
                    "hours" : "0.2",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "10",
                "period" : {
                    "from" : "2017-9-21",
                    "to" : "2017-10-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "179.45",
                "overtimeHours" : "22.15",
                "holidayWorkingDays" : "0",
                "paidLeave" : "16",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "11",
                "period" : {
                    "from" : "2017-10-21",
                    "to" : "2017-11-20"
                },
                "prescribedWorkingDays" : "20",
                "prescribedWorkingHours" : "150.00",
                "actualWorkingDays" : "20",
                "actualWorkingHours" : "154.00",
                "overtimeHours" : "4.00",
                "holidayWorkingDays" : "1",
                "paidLeave" : "16",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2017",
                "month" : "12",
                "period" : {
                    "from" : "2017-11-21",
                    "to" : "2017-12-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "165.30",
                "overtimeHours" : "8.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "16",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "1",
                "period" : {
                    "from" : "2017-12-21",
                    "to" : "2018-1-20"
                },
                "prescribedWorkingDays" : "18",
                "prescribedWorkingHours" : "135.00",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "171.45",
                "overtimeHours" : "36.45",
                "holidayWorkingDays" : "1",
                "paidLeave" : "16",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "2",
                "period" : {
                    "from" : "2018-1-21",
                    "to" : "2018-2-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "223.00",
                "overtimeHours" : "65.30",
                "holidayWorkingDays" : "2",
                "paidLeave" : "16",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "3",
                "period" : {
                    "from" : "2018-2-21",
                    "to" : "2018-3-20"
                },
                "prescribedWorkingDays" : "20",
                "prescribedWorkingHours" : "150.00",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "136.30",
                "overtimeHours" : "1.45",
                "holidayWorkingDays" : "2",
                "paidLeave" : "14",
                "beingLate": {
                    "count" : "1",
                    "hours" : "0.15",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "4",
                "period" : {
                    "from" : "2018-3-21",
                    "to" : "2018-4-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "22",
                "actualWorkingHours" : "176.15",
                "overtimeHours" : "11.15",
                "holidayWorkingDays" : "0",
                "paidLeave" : "14",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "5",
                "period" : {
                    "from" : "2018-4-21",
                    "to" : "2018-5-20"
                },
                "prescribedWorkingDays" : "17",
                "prescribedWorkingHours" : "127.30",
                "actualWorkingDays" : "16",
                "actualWorkingHours" : "130.25",
                "overtimeHours" : "10.25",
                "holidayWorkingDays" : "0",
                "paidLeave" : "13",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "6",
                "period" : {
                    "from" : "2018-5-21",
                    "to" : "2018-6-20"
                },
                "prescribedWorkingDays" : "23",
                "prescribedWorkingHours" : "172.30",
                "actualWorkingDays" : "22",
                "actualWorkingHours" : "170.55",
                "overtimeHours" : "5.55",
                "holidayWorkingDays" : "1",
                "paidLeave" : "12",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "7",
                "period" : {
                    "from" : "2018-6-21",
                    "to" : "2018-7-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "159.15",
                "overtimeHours" : "2.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "12",
                "beingLate": {
                    "count" : "1",
                    "hours" : "0.15",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "8",
                "period" : {
                    "from" : "2018-7-21",
                    "to" : "2018-8-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "135.00",
                "overtimeHours" : "0.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "23",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "9",
                "period" : {
                    "from" : "2018-8-21",
                    "to" : "2018-9-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "20",
                "actualWorkingHours" : "150.00",
                "overtimeHours" : "0.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "21",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "10",
                "period" : {
                    "from" : "2018-9-21",
                    "to" : "2018-10-20"
                },
                "prescribedWorkingDays" : "19",
                "prescribedWorkingHours" : "142.30",
                "actualWorkingDays" : "19",
                "actualWorkingHours" : "143.15",
                "overtimeHours" : "0.45",
                "holidayWorkingDays" : "0",
                "paidLeave" : "21",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "11",
                "period" : {
                    "from" : "2018-10-21",
                    "to" : "2018-11-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "161.30",
                "overtimeHours" : "4.00",
                "holidayWorkingDays" : "1",
                "paidLeave" : "20",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2018",
                "month" : "12",
                "period" : {
                    "from" : "2018-11-21",
                    "to" : "2018-12-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "161.30",
                "overtimeHours" : "4.00",
                "holidayWorkingDays" : "1",
                "paidLeave" : "20",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2019",
                "month" : "1",
                "period" : {
                    "from" : "2018-12-21",
                    "to" : "2019-1-20"
                },
                "prescribedWorkingDays" : "15",
                "prescribedWorkingHours" : "112.30",
                "actualWorkingDays" : "11",
                "actualWorkingHours" : "83.30",
                "overtimeHours" : "0.30",
                "holidayWorkingDays" : "0",
                "paidLeave" : "16",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2019",
                "month" : "2",
                "period" : {
                    "from" : "2019-1-21",
                    "to" : "2019-2-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "167.00",
                "actualWorkingDays" : "22",
                "actualWorkingHours" : "173.50",
                "overtimeHours" : "6.50",
                "holidayWorkingDays" : "0",
                "paidLeave" : "16",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2019",
                "month" : "3",
                "period" : {
                    "from" : "2019-2-21",
                    "to" : "2019-3-20"
                },
                "prescribedWorkingDays" : "20",
                "prescribedWorkingHours" : "160.00",
                "actualWorkingDays" : "20",
                "actualWorkingHours" : "205.15",
                "overtimeHours" : "45.15",
                "holidayWorkingDays" : "1",
                "paidLeave" : "16",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2019",
                "month" : "5",
                "period" : {
                    "from" : "2019-4-21",
                    "to" : "2019-5-20"
                },
                "prescribedWorkingDays" : "15",
                "prescribedWorkingHours" : "115.00",
                "actualWorkingDays" : "14",
                "actualWorkingHours" : "107.30",
                "overtimeHours" : "0.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "14",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2019",
                "month" : "6",
                "period" : {
                    "from" : "2019-5-21",
                    "to" : "2019-6-20"
                },
                "prescribedWorkingDays" : "23",
                "prescribedWorkingHours" : "172.30",
                "actualWorkingDays" : "23",
                "actualWorkingHours" : "218.30",
                "overtimeHours" : "46.00",
                "holidayWorkingDays" : "1",
                "paidLeave" : "14",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2019",
                "month" : "7",
                "period" : {
                    "from" : "2019-6-21",
                    "to" : "2019-7-20"
                },
                "prescribedWorkingDays" : "20",
                "prescribedWorkingHours" : "150.00",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "149.35",
                "overtimeHours" : "14.35",
                "holidayWorkingDays" : "0",
                "paidLeave" : "12",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2019",
                "month" : "8",
                "period" : {
                    "from" : "2019-7-21",
                    "to" : "2019-8-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "20",
                "actualWorkingHours" : "150.00",
                "overtimeHours" : "0.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "27",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2019",
                "month" : "9",
                "period" : {
                    "from" : "2019-8-21",
                    "to" : "2019-9-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "16",
                "actualWorkingHours" : "129.45",
                "overtimeHours" : "9.45",
                "holidayWorkingDays" : "0",
                "paidLeave" : "21",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2019",
                "month" : "10",
                "period" : {
                    "from" : "2019-9-21",
                    "to" : "2019-10-20"
                },
                "prescribedWorkingDays" : "18",
                "prescribedWorkingHours" : "135.00",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "172.15",
                "overtimeHours" : "37.15",
                "holidayWorkingDays" : "1",
                "paidLeave" : "21",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2019",
                "month" : "11",
                "period" : {
                    "from" : "2019-10-21",
                    "to" : "2019-11-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "159.15",
                "overtimeHours" : "1.15",
                "holidayWorkingDays" : "0",
                "paidLeave" : "21",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2019",
                "month" : "12",
                "period" : {
                    "from" : "2019-11-21",
                    "to" : "2019-12-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "205.30",
                "overtimeHours" : "48.00",
                "holidayWorkingDays" : "1",
                "paidLeave" : "20",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "1",
                "period" : {
                    "from" : "2019-12-21",
                    "to" : "2020-1-20"
                },
                "prescribedWorkingDays" : "15",
                "prescribedWorkingHours" : "112.30",
                "actualWorkingDays" : "15",
                "actualWorkingHours" : "151.00",
                "overtimeHours" : "38.45",
                "holidayWorkingDays" : "1",
                "paidLeave" : "20",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "2",
                "period" : {
                    "from" : "2020-1-21",
                    "to" : "2020-2-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "203.35",
                "overtimeHours" : "46.05",
                "holidayWorkingDays" : "0",
                "paidLeave" : "19",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "3",
                "period" : {
                    "from" : "2020-2-21",
                    "to" : "2020-3-20"
                },
                "prescribedWorkingDays" : "19",
                "prescribedWorkingHours" : "142.30",
                "actualWorkingDays" : "19",
                "actualWorkingHours" : "182.30",
                "overtimeHours" : "40.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "19",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "4",
                "period" : {
                    "from" : "2020-3-21",
                    "to" : "2020-4-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "20",
                "actualWorkingHours" : "165.00",
                "overtimeHours" : "15.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "18",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "5",
                "period" : {
                    "from" : "2020-4-21",
                    "to" : "2020-5-20"
                },
                "prescribedWorkingDays" : "18",
                "prescribedWorkingHours" : "135.00",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "161.45",
                "overtimeHours" : "26.45",
                "holidayWorkingDays" : "0",
                "paidLeave" : "18",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "6",
                "period" : {
                    "from" : "2020-5-21",
                    "to" : "2020-6-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "22",
                "actualWorkingHours" : "172.15",
                "overtimeHours" : "7.15",
                "holidayWorkingDays" : "0",
                "paidLeave" : "18",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "7",
                "period" : {
                    "from" : "2020-6-21",
                    "to" : "2020-7-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "20",
                "actualWorkingHours" : "172.30",
                "overtimeHours" : "22.30",
                "holidayWorkingDays" : "1",
                "paidLeave" : "16",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "8",
                "period" : {
                    "from" : "2020-7-21",
                    "to" : "2020-8-20"
                },
                "prescribedWorkingDays" : "18",
                "prescribedWorkingHours" : "135.00",
                "actualWorkingDays" : "15",
                "actualWorkingHours" : "114.30",
                "overtimeHours" : "2.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "32",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "9",
                "period" : {
                    "from" : "2020-8-21",
                    "to" : "2020-9-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "163.45",
                "overtimeHours" : "6.15",
                "holidayWorkingDays" : "0",
                "paidLeave" : "32",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "10",
                "period" : {
                    "from" : "2020-9-21",
                    "to" : "2020-10-20"
                },
                "prescribedWorkingDays" : "20",
                "prescribedWorkingHours" : "150.00",
                "actualWorkingDays" : "18",
                "actualWorkingHours" : "135.00",
                "overtimeHours" : "0.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "30",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "11",
                "period" : {
                    "from" : "2020-10-21",
                    "to" : "2020-11-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "22",
                "actualWorkingHours" : "165.00",
                "overtimeHours" : "0.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "30",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2020",
                "month" : "12",
                "period" : {
                    "from" : "2020-11-21",
                    "to" : "2020-12-20"
                },
                "prescribedWorkingDays" : "19",
                "prescribedWorkingHours" : "142.30",
                "actualWorkingDays" : "19",
                "actualWorkingHours" : "156.30",
                "overtimeHours" : "14.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "30",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2021",
                "month" : "1",
                "period" : {
                    "from" : "2020-12-21",
                    "to" : "2021-1-20"
                },
                "prescribedWorkingDays" : "19",
                "prescribedWorkingHours" : "142.30",
                "actualWorkingDays" : "19",
                "actualWorkingHours" : "191.15",
                "overtimeHours" : "48.45",
                "holidayWorkingDays" : "0",
                "paidLeave" : "30",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2021",
                "month" : "2",
                "period" : {
                    "from" : "2021-1-21",
                    "to" : "2021-2-20"
                },
                "prescribedWorkingDays" : "21",
                "prescribedWorkingHours" : "157.30",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "210.30",
                "overtimeHours" : "53.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "30",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2021",
                "month" : "3",
                "period" : {
                    "from" : "2021-2-21",
                    "to" : "2021-3-20"
                },
                "prescribedWorkingDays" : "19",
                "prescribedWorkingHours" : "142.30",
                "actualWorkingDays" : "19",
                "actualWorkingHours" : "166.30",
                "overtimeHours" : "24.00",
                "holidayWorkingDays" : "0",
                "paidLeave" : "30",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            },
            {
                "year" : "2021",
                "month" : "4",
                "period" : {
                    "from" : "2021-3-21",
                    "to" : "2021-4-20"
                },
                "prescribedWorkingDays" : "22",
                "prescribedWorkingHours" : "165.00",
                "actualWorkingDays" : "21",
                "actualWorkingHours" : "175.15",
                "overtimeHours" : "17.45",
                "holidayWorkingDays" : "0",
                "paidLeave" : "29",
                "beingLate": {
                    "count" : "0",
                    "hours" : "0",
                    "comment" : ""
                }
            }
        ];
    }

    /**
     * 労働時間データを更新します。
     * @param {Object} workingHours 労働時間データ。
     */
    post = workingHours => {
        // dummy
    }
}

export { WorkingHoursRepository };