import { defineStore } from 'pinia'
import {computed, ref} from "vue";

export const useTokenStore = defineStore('token', () => {
    const username = ref(null)
    const password = ref(null)
    const token = ref(null)
    // const doubleCount = computed(() => count.value * 2)
    function login(userinfo) {
        if (userinfo.username === 'admin' && userinfo.password === 'sz517373'){
            token.value = "1234567890qwertyuiopasdfghjklzxcvbnm"
            // 将token保存到localStorage
            sessionStorage.setItem('token', token.value)
            return true
        }else {
            token.value = null
            return false
        }
    }

    return { login ,token }
})
