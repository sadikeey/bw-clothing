import { FC } from "react"
import { colors, sizes, priceRange } from "../data/filterbar"

interface IFilterBarItems {
  label: string
  items: string[]
}

const FilterBarItems: FC<IFilterBarItems> = ({ label, items }) => {
  return (
    <div id='colors' className='flex flex-col gap-3'>
      <h3 className='font-normal'>{label}</h3>
      <ul className='capitalize flex flex-col gap-2'>
        {items.map((item) => (
          <li key={item} className='flex gap-2'>
            <input type='checkbox' value={item} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const FilterBar: FC = () => {
  return (
    <>
      <div
        id='pc-filter'
        className='hidden xl:block relative top-32 uppercase font-light text-sm text-[#0F0F0F]'
      >
        <h1 className='font-normal text-base border-b-[1px] border-neutral-200 pb-1 mb-6'>
          Filters
        </h1>
        <div className='flex flex-col gap-5'>
          <FilterBarItems label='Colors' items={colors} />
          <FilterBarItems label='Sizes' items={sizes} />
          <FilterBarItems label='Price Range' items={priceRange} />
        </div>
      </div>
      <div id='mobile-filter' className='xl:hidden'></div>
    </>
  )
}

export default FilterBar
