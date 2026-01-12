export const menu = [
    {
        "name": "index",
        "path": "/index",
        "meta": {
            "title": "首页",
            "icon": "icon-home",
        },
        "children": []
    },
    {
        "name": "DataManager",
        "path": "/index",
        "meta": {
            "title": "股票数据管理",
            "icon": "icon-shuju",
        },
        "children": [
            {
                "name": "FilterList",
                "path": "/index/filterList",
                "component": "dataManager/filterList",
                "meta": {
                    "title": "股票筛选列表",
                    "icon": "icon-filter",
                }
            },
            {
                "name": "PercentileList",
                "path": "/index/percentileList",
                "component": "dataManager/percentileList",
                "meta": {
                    "title": "股票百分位",
                    "icon": "icon-percent",
                }
            },
            {
                "name": "RankingList",
                "path": "/index/rankingList",
                "component": "dataManager/rankingList",
                "meta": {
                    "title": "股票排名列表",
                    "icon": "icon-mn_paiming",
                }
            },
            {
                "name": "RiseFallList",
                "path": "/index/riseFallList",
                "component": "dataManager/riseFallList",
                "meta": {
                    "title": "涨跌股票列表",
                    "icon": "icon-chart-line",
                }
            }
        ]
    },
    {
        "name": "DataManager2",
        "path": "/dataManager2",
        "meta": {
            "title": "股票数据管理2",
            "icon": "icon-shuju",
        },
        "children": [
            {
                "name": "RiseFallList2",
                "path": "/riseFallList2",
                "component": "dataManager/riseFallList2",
                "meta": {
                    "title": "涨跌股票列表2",
                    "icon": "icon-chart-line",
                }
            },
            {
                "name": "RankingList2",
                "path": "/rankingList2",
                "component": "dataManager/rankingList2",
                "meta": {
                    "title": "股票排名列表2",
                    "icon": "icon-mn_paiming",
                }
            },
            {
                "name": "PercentileList2",
                "path": "/percentileList2",
                "component": "dataManager/percentileList2",
                "meta": {
                    "title": "股票百分位2",
                    "icon": "icon-percent",
                }
            },
            {
                "name": "FilterList2",
                "path": "/filterList2",
                "component": "dataManager/filterList2",
                "meta": {
                    "title": "股票筛选列表2",
                    "icon": "icon-filter",
                }
            }
        ]
    },
]
