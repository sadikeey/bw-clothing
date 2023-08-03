import { FC } from "react"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux"
import store from '../redux/store'

const RootRoute: FC = () => {
  return (
    <ReduxProvider store={store}>
      <Navbar />
      <Outlet />
    </ReduxProvider>
  )
}

export default RootRoute
