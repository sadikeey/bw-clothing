import { createBrowserRouter } from "react-router-dom"
import RootRoute from "./RootRoute"
import Home from "../pages/Home"
import ProductPage from '../components/ProductPage'

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
      }
    ],
  },
])

export default router
