import instance from '@/shared/api/axios'
import { Button } from '@/shared/ui/button'
import { useEffect } from 'react'
import { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/shared/ui/dialog'

export default function DashboardPage() {
    const [user, setUser] = useState<any>(null)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await instance.get('/auth/me')
                console.log(response.data.user)
                setUser(response.data.user)
            } catch (error) {
                console.error('Failed to fetch user', error)
            }
        }
        fetchUser()
    }, [])

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Open Dashboard</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Fetch user info</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        This dialog displays the authenticated user's
                        information.
                    </DialogDescription>
                    <div>
                        <p>ID: {user?.id}</p>
                        <p>Name: {user?.username}</p>
                        <p>Email: {user?.email}</p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
