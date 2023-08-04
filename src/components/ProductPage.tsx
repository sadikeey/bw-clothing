import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { ShoppingBag } from "lucide-react"
import { add } from "../redux/cartSlice"

const ProductPage: FC = () => {
  const dispatch = useDispatch()
  const { image, label, price, description } = useSelector(
    (state: RootState) => state.item
  )

  const handleAddToCart = () => {
    dispatch(add({ image, label, price, description }))
  }

  return (
    <main className='font-normal xl:px-[22rem] xl:my-20'>
      <div className='xl:flex gap-28'>
        <img src={image} alt={`${label} image`} />
        <div className='p-4 xl:p-0 flex flex-col gap-2 xl:gap-4 justify-between'>
          <div className='flex flex-col gap-2 xl:gap-4'>
            <h1 className='text-xl font-semibold xl:font-bold xl:text-4xl'>
              {label}
            </h1>
            <p>$ {price}</p>
            <p className='font-light text-sm xl:text-base'>{description}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className='hidden xl:flex bg-neutral-700 text-white h-14 justify-center items-center gap-3 hover:bg-neutral-800'
          >
            <ShoppingBag size={17} />
            <p>Add to Bag</p>
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className='xl:hidden fixed w-full h-14 bottom-0 bg-neutral-700 text-white text-center flex gap-3 justify-center items-center hover:bg-neutral-800'
      >
        <ShoppingBag size={17} />
        <p>Add to Bag</p>
      </button>
    </main>
  )
}

export default ProductPage
