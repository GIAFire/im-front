import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const request = axios.create({
    baseURL: "/dev-api", // 使用环境变量
    timeout: 10000
})
export default request
