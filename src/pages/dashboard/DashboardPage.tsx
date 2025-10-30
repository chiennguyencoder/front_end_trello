import instance from '@/shared/api/axios'
import { Button } from '@/shared/ui/button'
import { useEffect } from 'react'
import { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/ui/popover'

export default function DashboardPage() {
    const [user, setUser] = useState<any>(null)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await instance.get('/auth/me')
                console.log('user', response)
                setUser(response.data)
            } catch (error) {
                console.error('Failed to fetch user', error)
            }
        }
        fetchUser()
    }, [])

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Popover>
                <PopoverTrigger asChild>
                    <Button onClick={() => console.log(user)}>
                        Click Me to get User
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <div>
                        {user ? (
                            <pre>{JSON.stringify(user, null, 2)}</pre>
                        ) : (
                            <p>No user data available</p>
                        )}
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
