import api from '@/shared/api/axios'
import { auth } from '@/entities'

export const authApi = {
    login: (payload: auth.LoginPayload) => api.post<auth.LoginResponse>('/auth/login', payload),
    register: (payload: auth.RegisterPayload) => api.post('/auth/register', payload),
}

