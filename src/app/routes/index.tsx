import LoginPage from "@/pages/LoginPage";
import { useAuth } from "@/shared/lib/useAuth";
import { AppLayout } from "@/features/app/ui/AppLayout";
import  DashboardPage from "@/pages/DashboardPage";

export const routes = [
    {
        path: "/login",
        Component: LoginPage
    },
    
    {
        path: "/",
        // loader: useAuth,
        Component: AppLayout,
        children: [
            {
                index : true,
                Component: DashboardPage
            },
           
        ]
    }
]