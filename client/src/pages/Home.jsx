import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/mock'
import HeroImage from '../assets/images/banner.jpg'
import InfoSection from '../components/Info'
import CategorySection from '../components/CategorySection'
import { setProducts } from '../redux/productSlice'
import {useDispatch, useSelector} from 'react-redux'
import ProductCard from '../components/ProductCard'
import Soko from './Soko'


const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  useEffect(() => {
    dispatch(setProducts(mockData))
  },[])

  return (
    <div>
    <div className='bg-white mt-2 pxmd:px-16 lg:px-24'>
      <div className='containermx -auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className='w-full md:w-3/12'>
          <div className='bg-green-500 text-white text-xs font-bold px-2 py-3'>
            PRODUCTS CATEGORIES
            </div>
          <ul className='space-y-4 bg-gray-100 p-3 border'>
            {Categories.map((category, index) =>(
              <li key={index} className='flex items-center text-sm font-medium'>
                <div className='w-2 h-2 border border-green-400 rounded-full mr-2'></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
          <img src={HeroImage} alt='' className='h-full w-full'/>
          <div className='absolute top-16 left-10'>
            <p className='text-gray-500 mb-4 text-green-800'> F&R Fresh </p>
            <h2 className='text-3xl font-bold text-green-800'>YOUR DOOR-STEP EDEN</h2>
            <p className='text-xl mt-2.5 font-bold text-green-700'> The Spring of Sweetness  </p>
            <button className='bg-red-500 px-8 py-1.5 text-white mt-4 hover:bg-red-700
            transform transition-transform duration-400 hover:scale-150'>ORDER NOW !!</button>
          </div>
        </div>
      </div>
      <InfoSection/>
      <CategorySection/>

      <div className='container mx-auto py-14'>
        <h2 className='bg-green-500 text-2xl font-bold mb-6 text-center'> Fast Moving Products</h2>
        <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
        {products.products.slice(0,5).map(((product) =>(
            <ProductCard product={product}/>
          )))}
        </div>
      </div>
      
    </div>
    <Soko />
    </div>
  )
}

export default Home

