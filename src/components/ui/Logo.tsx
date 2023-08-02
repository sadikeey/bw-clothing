import { FC } from "react"
import { Link } from 'react-router-dom'

const Logo: FC = () => {
  return (
    <Link to='/' className='xl:ml-40 font-light xl:text-2xl text-lg xl:tracking-widest'>
      <span className='font-semibold'>BLACK</span> AND <span className='font-semibold'>WHITE</span> CLOTHING
    </Link>
  )
}

export default Logo
