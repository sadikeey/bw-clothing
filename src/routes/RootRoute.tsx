import { FC } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootRoute: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default RootRoute