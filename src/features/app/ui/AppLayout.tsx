import Header from './Header'
import { Outlet } from 'react-router-dom'
import {
    SidebarInset,
    SidebarProvider,
} from '@/shared/ui/sidebar'
import AppSideBar from '@/features/Sidebar/Sidebar'

// import { Select, SelectGroup, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/shared/ui/select'
// import { useBoardStore } from '@/shared/stores/useBoardStore'
// import { use, useState } from 'react'

const AppLayout = () => {

    // const { boards, workspaces} = useBoardStore()
    // const [ selectedWorkspace, setSelectedWorkspace ] = useState("")

    return (
        <SidebarProvider>
            <AppSideBar />
            <SidebarInset>
                <Header />
                <main>
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default AppLayout