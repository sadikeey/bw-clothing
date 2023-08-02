import { FC } from "react"
import Logo from "./ui/Logo"
import { INavbarLinksProps } from "../types/components/navbar"
import { Link } from "react-router-dom"
import { Shirt, Search, ShoppingCart } from "lucide-react"
import Dropdown from "./ui/Dropdown"
import navbarDropDownItems from "../data/navbarDropDownItems"

export const NavbarLinks: FC<INavbarLinksProps> = ({ title, to, children }) => {
  return (
    <Link
      to={to}
      className='text-black underline text-xs flex items-center gap-1'
    >
      {children}
      {title}
    </Link>
  )
}

const Navbar: FC = () => {
  return (
    <header className='w-full flex flex-col items-center border-b-[1px] border-[#DDDDDD]'>
      <nav className='flex h-12 w-container justify-between items-center '>
        <NavbarLinks title='My BAWC Closet' to='closet'>
          <Shirt
            size={16}
            className='border-[0.5px] rounded-full p-[1.8px] border-black'
          />
        </NavbarLinks>
        <Logo />
        <div className='flex gap-3'>
          <NavbarLinks title='Account Status' to='account' />
          <NavbarLinks title='Order Status' to='orders' />
          <NavbarLinks title='Find a Boutique' to='boutique' />
        </div>
      </nav>
      <nav className='h-12 flex items-center w-container justify-between uppercase'>
        <div className='text-sm flex gap-6 items-center'>
          {navbarDropDownItems.map(({label, to, subLabel}) => (
            <Dropdown title={label} to={to} subLabel={subLabel} />
          ))}
        </div>
        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-2'>
            <Search size={16} />
            <span className='text-sm'>SEARCH</span>
          </div>
          <ShoppingCart size={20} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
