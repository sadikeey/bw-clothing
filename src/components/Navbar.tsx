import { FC } from "react"
import Logo from "./ui/Logo"
import { INavbarLinksProps } from "../types/components/navbar"
import { Link } from "react-router-dom"
import { Shirt, Search, ShoppingCart, Menu, MapPin } from "lucide-react"
import Dropdown from "./ui/Dropdown"
import navbarDropDownItems from "../data/navbarDropDownItems"

export const NavbarLinks: FC<INavbarLinksProps> = ({
  title,
  to,
  children,
  className,
}) => {
  return (
    <Link
      to={to}
      className={`text-black underline text-xs items-center gap-1 ${className}`}
    >
      {children}
      {title}
    </Link>
  )
}

const Navbar: FC = () => {
  return (
    <header className='flex flex-col items-center justify-center border-b-[1px] border-[#DDDDDD]'>
      <nav className='h-12 xl:flex xl:w-container justify-between items-center'>
        <NavbarLinks
          className='hidden xl:flex'
          title='My BAWC Closet'
          to='closet'
        >
          <Shirt
            size={16}
            className='border-[0.5px] rounded-full p-[1.8px] border-black'
          />
        </NavbarLinks>
        <Logo />
        <div className='hidden xl:flex gap-3'>
          <NavbarLinks title='Account Status' to='account' />
          <NavbarLinks title='Order Status' to='orders' />
          <NavbarLinks title='Find a Boutique' to='boutique' />
        </div>
      </nav>
      <nav className='h-12 text-xs xl:text-sm flex items-center xl:w-container xl:justify-between justify-center uppercase w-full'>
        <div className='xl:flex gap-6 items-center hidden'>
          {navbarDropDownItems.map(({ label, to, subLabel }) => (
            <Dropdown title={label} to={to} subLabel={subLabel} />
          ))}
        </div>
        <div className='xl:hidden flex w-[50%] xl:w-auto justify-around'>
          <div className='flex flex-col items-center xl:hidden gap-1'>
            <Menu size={20} />
            <p>Menu</p>
          </div>
          <div className='flex flex-col items-center xl:hidden gap-1'>
            <MapPin size={18} />
            <p className='mt-[2px]'>Store</p>
          </div>
        </div>
        <div className='flex items-center w-[50%] xl:w-auto justify-around xl:gap-6'>
          <div className='flex flex-col xl:flex-row items-center gap-1 xl:gap-2'>
            <Search size={16} className='hidden xl:block' />
            <Search size={20} className='xl:hidden' />
            <p className=''>SEARCH</p>
          </div>
          <div className='flex flex-col xl:flex-row items-center gap-1'>
            <ShoppingCart size={20} />
            <p className='xl:hidden'>CART</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
