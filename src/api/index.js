// 导入配置好的axios实例
import request from './axiosConfig'

export function getCharts(params) {
    return request({
        url: '/stock/charts',
        method: 'get',
        params: params
    })
}

export function getDailyProfit() {
    return request({
        url: '/stock/daily/profit',
        method: 'post'
    })
}
