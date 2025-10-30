import DashboardPage from "@/pages/dashboard/DashboardPage";
import { LoginPage } from "@/pages/login";
import { useAuth } from "@/shared/lib/useAuth";

export const routes = [
    {
        path: "/login",
        element: <LoginPage />
    },
    
    {
        path: "/dashboard",
        loader: useAuth,
        element: <DashboardPage />
        
    }
]