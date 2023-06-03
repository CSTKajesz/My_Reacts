
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import { userContext } from "./pages/UserContext"
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";


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
        path: "about",
        element: <About />
      },
      {
        path: "products",
        element: <Products />
      },
      //egy oldal megjelenítése és ide be tudjuk hívni sz összes oldal indexét(url-be) és az jelenik meg
      {
        path: "products/:productId",
        element: <SingleProduct />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "dashboard",
        element:
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  },
])

function App() {
  const [user, setUser] = useState(null);  //itt kell létrehozzam, hogy a useContext-ba tudjam használni
  // console.log('USER', user);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {/*itt csomizom hozzá a useContext-et, hogy mindenhol elérhető legyen*/}
      <RouterProvider router={router} />
    </userContext.Provider>
  )
}

export default App;
