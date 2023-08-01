import { createBrowserRouter } from "react-router-dom"
import RootRoute from "./RootRoute"
import Home from "../pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

export default router
