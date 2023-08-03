import { FC } from "react"
import ProductsCard from "../components/ProductsCard"
import products from "../data/products"
import FilterBar from "../components/FilterBar"

const Home: FC = () => {
  return (
    <main>
      <div className='flex xl:w-[62%] xl:flex-row flex-col mx-auto justify-between px-3 xl:px-0'>
        <div className='xl:w-[18%]'>
          <FilterBar />
        </div>
        <div className='xl:w-[82%] w-full'>
          <h1 className='text-center text-4xl font-normal py-8 pb-9 font-serif'>
            New Arrivals
          </h1>
          <div className='text-xs flex flex-wrap xl:gap-2 gap-4 gap-y-6 xl:gap-y-1 xl:justify-center justify-evenly'>
            {products.map(({ id, image, label, price, ratings, description }) => (
              <>
                <ProductsCard
                  key={id}
                  id={id}
                  image={image}
                  label={label}
                  price={price}
                  ratings={ratings}
                  description={description}
                />
              </>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
