import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarFooter,
} from '@/shared/ui/sidebar'
import { Layout } from 'lucide-react'

import { WorkspaceSwitcher } from './WorkspaceSwitcher'
import { useBoardStore } from '@/shared/stores/useBoardStore'
import { NavMain } from './Nav-menu'
import { NavBoards } from './nav-board'
import { NavUser } from './nav-user'
export default function AppSideBar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const { currentUser, boards, workspaces } = useBoardStore()
    const navMain = [
        {
            title: 'Dashboard',
            url: '/',
            icon: Layout,
            isActive: true,
        },
    ]
    const userData = currentUser
        ? {
              name: currentUser.name,
              email: currentUser.email,
              avatar: currentUser.avatar,
          }
        : {
              name: 'Guest',
              email: 'guest@example.com',
              avatar: '',
          }

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <WorkspaceSwitcher workspaces={workspaces} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={navMain} />
                <NavBoards boards={boards} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={userData} />
            </SidebarFooter>
        </Sidebar>
    )
}
