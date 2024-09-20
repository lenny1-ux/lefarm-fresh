import React from 'react'
import VegetableCategory from '../assets/images/kales.jpg'
import FruitCategory from '../assets/images/watermelon.jpg'
import ChickenCategory from '../assets/images/chicken.jpg'

const categories = [
    {
        title:'Vegetables',
        imageUrl:VegetableCategory,
    },
    {
        title:'Fruits',
        imageUrl:FruitCategory,
    },
    {
        title:'Chicken',
        imageUrl:ChickenCategory,
    },
    
]

const CategorySection = () => {
  return (
    <div className='container mx-auto grid gid:cols-1 sm:grid-cols-3 gap-6'>
        {categories.map((category, index) => (
            <div key={index} className='relative h-60 transform transition-transform duration-300 hover:scale-105 cursor-pointer'> 
                <img src={category.imageUrl } alt='' className='w-full h-full object-cover rounded-lg shadow-md'/>
                <div className='absolute top-46 left-12'>
                    <p className='text-xl font-bold'> {category.title}</p>
                    <p className='text-red-900'>Show All</p>
                </div>
                </div>
        ))}
    </div>
  )
}

export default CategorySection
