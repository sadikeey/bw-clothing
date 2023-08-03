import { FC, ReactNode } from "react"
import { IProducts } from "../types/data/products"
import { Star } from "lucide-react"

const star: ReactNode = <Star size={12}  />

const ProductsCard: FC<IProducts> = ({ image, label, price, ratings }) => {
  const renderStars = () => {
    const fullStars = Math.floor(ratings)
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(star)
    }

    return stars
  }

  return (
    <div className='flex flex-col gap-2 xl:w-[14rem] w-[10rem] cursor-pointer hover:bg-neutral-100 xl:p-4 p-0'>
      <img className='w-full' src={image} alt={`${label} image`} />
      <h4>{label}</h4>
      <p className='font-bold'>$ {price}</p>
      <div className='flex gap-0.5'>{renderStars()}</div>
    </div>
  )
}

export default ProductsCard
