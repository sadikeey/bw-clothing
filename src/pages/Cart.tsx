import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { remove } from '../redux/cartSlice'

const Cart: FC = () => {
  const items = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  
  const handleRemoveFromCart = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <main>
      <div className='xl:px-[22.5rem] xl:relative top-3'>
        <h1 className='text-center text-4xl py-3 font-bold font-serif'>Cart</h1>
        {
          items.map((item) => (
            <div className='flex flex-col xl:flex-row gap-8 bg-neutral-50 p-6'>
              <img className='xl:w-[12rem]' src={item.image} alt={`${item.label} image`} />
              <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold'>{item.label}</h1>
                <p>{item.ratings}</p>
                <p>$ {item.price}</p>
                <p>{item.description}</p>
                <button
                className='p-2 px-4 bg-neutral-700 text-white hover:bg-neutral-800'
                  onClick={() => handleRemoveFromCart(item.id)}
                >Remove</button>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default Cart
