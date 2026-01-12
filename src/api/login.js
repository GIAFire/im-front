// 导入配置好的axios实例
import request from './axiosConfig'

export function getCodeImg() {
    return request({
        url: '/code',
        headers: {
            isToken: false
        },
        method: 'get',
        timeout: 20000
    })
}
