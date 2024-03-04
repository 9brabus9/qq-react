import $axios from '@/lib/axios-util'
import { UserModel } from '@/models/UserModel'

export const fetchUserData = async () => {
    try {
        const response = await $axios.get('/api/users/me')
        if (response) {
            const { data } = response.data
            return new UserModel(data)
        }
    } catch (e) {
        console.log(e)
    }
}