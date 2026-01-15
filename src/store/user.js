import { defineStore } from 'pinia'
import {login} from "@/api/system/login.js";
import {setExpiresIn, setToken} from "@/utils/auth.js";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            id: '',
            username: '',
            password: '',
            token: '',
            roles: []
        }
    }),
    actions: {
        login(userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password
            const code = userInfo.code
            const uuid = userInfo.uuid
            return new Promise((resolve, reject) => {
                login(userInfo).then(res => {
                    let data = res.data.data
                    console.log(data.data.access_token)
                    setToken(data.access_token)
                    setExpiresIn(data.expires_in)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        logout() {
            this.token = ''
            this.name = ''
            this.id = null
        }
    }
})
