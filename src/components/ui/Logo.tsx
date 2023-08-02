import { FC } from "react"
import { Link } from 'react-router-dom'

const Logo: FC = () => {
  return (
    <Link to='/' className='ml-40 font-light text-2xl tracking-widest'>
      <span className='font-semibold'>BLACK</span> AND <span className='font-semibold'>WHITE</span> CLOTHING
    </Link>
  )
}

export default Logo
