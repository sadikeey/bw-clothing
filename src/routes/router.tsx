import { createBrowserRouter } from "react-router-dom"
import RootRoute from "./RootRoute"
import Home from "../pages/Home"
import ProductPage from '../pages/ProductPage'
import Cart from '../pages/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/store/:id",
        element: <ProductPage />
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
])

export default router
