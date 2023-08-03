import { FC } from "react"
import { IProducts } from "../types/data/products"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { update } from "../redux/itemSlice"
import renderStars from '../utils/renderStars'

const ProductsCard: FC<IProducts> = ({ id, image, label, price, ratings, description }) => {
  const dispatch = useDispatch()

  const url = label.toLowerCase().split(" ").join("-")

  const handleClick = () => {
    dispatch(update({ id, image, label, price, ratings, description }))
  }

  return (
    <Link
      to={`/store/${url}`}
      onClick={handleClick}
      className='flex flex-col gap-2 xl:w-[14rem] w-[10rem] cursor-pointer hover:bg-neutral-100 xl:p-4 p-0 relative'
    >
      <img className='w-full' src={image} alt={`${label} image`} />
      <h4>{label}</h4>
      <p className='font-bold'>$ {price}</p>
      <div className='flex gap-0.5'>{renderStars(ratings, <Star size={12} />)}</div>
    </Link>
  )
}

export default ProductsCard
