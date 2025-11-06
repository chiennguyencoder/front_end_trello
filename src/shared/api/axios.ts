import axios from 'axios'
import * as localStorage from '@/shared/lib/local-storage'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken')

    if (config.url?.startsWith('/api/auth')) {
        return config
    }

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

instance.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        const req = error?.config
        if (error.response.status === 401 && !req.flag) {
            req.flag = true
            try {

                const { data } = await axios.post(
                    `${instance.defaults.baseURL}/auth/refresh-token`,{},
                    { withCredentials: true }
                )

                const accessToken = data.data.accessToken
                if (accessToken) {
                    localStorage.setItem('accessToken', accessToken)
                    req.headers.Authorization = `Bearer ${accessToken}`
                }
                return instance(req)
            } catch (e) {
                localStorage.removeItem('accessToken')
                return Promise.reject(e)
            }
        }
        return Promise.reject(error)
    }
)

export default instance
