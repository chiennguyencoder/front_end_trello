
export type LoginPayload = {
  email: string
  password: string
}

export type LoginResponse = {
  accessToken: string
  refreshToken?: string
}

export type RegisterPayload = {
    email: string
    password: string
    username: string
}