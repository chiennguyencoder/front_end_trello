import instance from "../api/axios"
import { redirect } from 'react-router-dom';


export async function useAuth() {
    try {
        await instance.get('/auth/me')
        return null
    }
    catch (error) {
        throw redirect('/login')
    }
}