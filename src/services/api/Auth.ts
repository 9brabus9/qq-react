import $axios from '@/lib/axios-util'

export const login = async (params = {}) => {
    try {
        const { data } = await $axios.post('/api/auth/signin', { ...params })
        const { accessToken } = data.data.attributes;
        return accessToken
    } catch (e) {
        console.log(e)
    }
}

export const logOut = async () => {
    try {
        const { data } = await $axios.delete('api/auth/logout')
        return data
    } catch (e) {
        console.log(e)
    }
}