import api from '@/shared/api/axios'

export type LoginPayload = {
  email: string
  password: string
}

export type LoginResponse = {
  accessToken: string
  refreshToken?: string
}

export const authApi = {
  login: (payload: LoginPayload) => api.post<LoginResponse>('/auth/login', payload),
}
