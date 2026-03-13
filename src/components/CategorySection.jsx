import React from 'react'
import ManCategory from '../assets/images/M.jpg'
import WmCategory from '../assets/images/W.jpg'
import KidCategory from '../assets/images/K.jpg'

const categories = [
    {
        title: "Men",
        imageUrl: ManCategory,
    },
    {
        title: "Women",
        imageUrl: WmCategory,
    },

{
        title: "Kids",
        imageUrl: KidCategory,
    },

]

const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
      {categories.map((category, index) => (
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={category.imageUrl} alt="" className='w-full h-full object-cover rounded-lg shadow-md'/>
            <div className='absolute top-20 left-12'>
                <p className='text-xl text-white shadow-md font-bold'>{category.title}</p>
                <p className='text-white bg-[rgba(0,0,0,0.5)] p-3 rounded-md font-bold'>View All</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySection
