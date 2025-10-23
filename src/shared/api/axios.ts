import axios from 'axios'

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
    (response) => {
        if (response.data) {
            return response.data
        } else {
            return Promise.reject({
                message: response.data?.message || 'Unknown error occurred',
                status: response.status || 500,
            })
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance
