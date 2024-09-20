import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'


const Soko = () => {
    const products = useSelector(state => state.product)
  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
        <h2 className=' text-2xl font-bold mb-6 text-center'> Our Products</h2>
        <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
        {products.products.map(((product) =>(
            <ProductCard product={product}/>
          )))}
        </div>
      </div>
  )
}

export default Soko
