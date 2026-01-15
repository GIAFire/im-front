// 导入配置好的axios实例
import request from '../axiosConfig.js'

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

export function login(loginForm) {
    return request({
        url: '/auth/login',
        headers: {
            isToken: false,
            repeatSubmit: false
        },
        method: 'post',
        data: loginForm
    })
}
