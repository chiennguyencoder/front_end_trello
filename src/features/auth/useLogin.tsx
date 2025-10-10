import { useState } from 'react'
import { authApi } from './api'
import type { LoginPayload } from './api'

export const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = async (payload: LoginPayload) => {
    setLoading(true)
    setError(null)
    try {
      const res = await authApi.login(payload)
      setLoading(false)
      return res.data
    } catch (err: any) {
      setLoading(false)
      setError(err?.response?.data?.message || err.message)
      throw err
    }
  }

  return { login, loading, error }
}
