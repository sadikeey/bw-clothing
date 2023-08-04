import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import router from "./routes/router.tsx"
import "./global.css"
import { Provider as ReduxProvider } from "react-redux"
import store from './redux/store.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
)
