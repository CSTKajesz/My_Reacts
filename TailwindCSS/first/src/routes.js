import HomePage from './pages/HomePage'
import SharedLayout from '../src/components/SharedLayout'
export default [
    {
        path: "/",
        element: <SharedLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]