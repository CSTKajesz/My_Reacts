
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookList from "./BookList";



const router = createBrowserRouter([
    {
        path: '/',
        element: <BookList />
    }

])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;