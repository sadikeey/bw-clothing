import { FC } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { ShoppingBag } from 'lucide-react'


const ProductPage: FC = () => {
  const { image, label, price } = useSelector((state: RootState) => state.item)

  return (
    <main className='font-normal xl:px-[22rem] xl:my-20'>
      <div>
        <img src={image} alt={`${label} image`} />
        <div className='p-4 xl:p-0 relative'>
          <h1>{label}</h1>
          <p>$ {price}</p>
        </div>
      </div>
      <div className='xl:hidden fixed w-full h-14 bottom-0 bg-neutral-700 text-white text-center flex gap-3 justify-center items-center'>
        <ShoppingBag size={17} />
        <p>Add to Bag</p>
      </div>
    </main>
  )
}

export default ProductPage
