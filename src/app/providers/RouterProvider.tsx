import { routes } from '../routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Router = createBrowserRouter(routes, {
    basename: '/front_end_trello',
})

export const AppRouter = () => {
    return <RouterProvider router={Router} />
}
