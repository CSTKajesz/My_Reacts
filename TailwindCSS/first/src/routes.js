import HomePage from './pages/HomePage'
import Typography from './pages/Typography'
import ObjectProperties from './pages/ObjectProperties'
import ObjectMetrics from './pages/ObjectMetrics'
import Layout from './pages/Layout'
import Animation from './pages/Animation'
import OtherOptions from './pages/OtherOptions'
import JustInTimeMode from './pages/JustInTimeMode'
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
            {
                path: "typography",
                element: <Typography />,
            },
            {
                path: "object-properties",
                element: <ObjectProperties />,
            },
            {
                path: "object-metrics",
                element: <ObjectMetrics />,
            },
            {
                path: "layout",
                element: <Layout />,
            },
            {
                path: "animation",
                element: <Animation />,
            },
            {
                path: "other-options",
                element: <OtherOptions />,
            },
            {
                path: "just-intime-mode",
                element: <JustInTimeMode />,
            },
        ],
    },
]
