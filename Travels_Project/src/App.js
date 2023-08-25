import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Tours from "./pages/Tours";
import SharedLayout from "./pages/SharedLayout";
import ReadMore from "./pages/ReadMore";
import SingleTour from "./pages/SingleTours";
import Error from "./pages/Error";
import Footer from "./pages/Footer";
import StyledNavbar from "./components/StyledNavbar";



const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/tours',
        element: <Tours />
      },
      {
        path: '/tours/:tourId',
        element: <SingleTour />
      },
      {
        path: '/readmore',
        element: <ReadMore />
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  },

])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;