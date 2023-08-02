import { FC, ReactNode, useState } from "react"
import { Link } from "react-router-dom"
import { INavbarDropDownSubLabel } from "../../types/data/navbarDropDownItems"

export interface IDropdownProps {
  title: string
  to: string
  children?: ReactNode
  subLabel: INavbarDropDownSubLabel[]
}

const Dropdown: FC<IDropdownProps> = ({ title, to, subLabel }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false)

  const handleLinkMouseLeave = () => {
    // Delay closing the dropdown to check if the mouse has entered the dropdown content
    setTimeout(() => {
      if (isDropDownOpen) {
        setIsDropDownOpen(false)
      }
    }, 200);
  }

  return (
    <>
      <Link
        className='relative'
        to={to}
        onMouseEnter={() => setIsDropDownOpen(true)}
        onMouseLeave={handleLinkMouseLeave}
      >
        {title}
      </Link>
      <div
        id="dropdown"
        className={`transition-opacity ease-in-out delay-100 absolute pt-6 bg-white tracking-widest font-medium text-xs text-neutral-600 h-[450px] border-b-[1px] w-[100vw] left-0 px-[22rem] flex justify-between ${
          isDropDownOpen ? "top-20" : "top-[-100%]"
        }`}
      >
        {subLabel.slice(0, 2).map(({ name, items }) => (
          <div className='flex flex-col gap-4'>
            <h4 className='font-bold text-sm text-black'>{name}</h4>
            <ul className='flex flex-col gap-4'>
              {items.map(({ to, label }) => (
                <li>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <ul className='flex gap-7 underline'>
            {subLabel[2].items.map(({ to, label, imageLink }) => (
              <li>
                <Link className='flex flex-col gap-4 items-center' to={to}>
                  <img className='w-60' src={imageLink} alt='model-pic' />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Dropdown
