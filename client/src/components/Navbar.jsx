import React from 'react'
import {Link} from 'react-router-dom'
import {FaSearch, FaUser, FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'



const Navbar = () => {
    const products = useSelector((state) => state.cart.products)
  return (
    <nav className='bg-green-400 shadow-md' >
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center' >
            <div className='text-lg font-bold' >
                <Link to="/">lefarm</Link>
            </div>
            <div className='relative flex-1 mx-4' >
                <form>
                    <input type='text' placeholder='Search Products'
                    className='w-full border py-2 px-4'/>
                  <FaSearch className='absolute top-3 right-3 text-blue-400'/>
                </form>
            </div>
            <div className='flex item-center space-x-4' >
              <Link to='/cart'className='relative'>
                <FaShoppingCart className='text-lg'/>
                {products.length > 0 && (<span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>{products.length}</span>)}
              </Link>
              <button className='hidden md:block' >
                  Login  Register
              </button>
              <button>
                <FaUser/>
              </button>

            </div>
        </div>
        <div className='flex item-center justify-center space-x-10 py-4 text-sm fold-bold' >
          <Link to='/' className='hover:border underline'>
            Home 
          </Link>
          <Link to='/soko' className='hover:border underline'>
            Soko 
          </Link>
          <Link to='/about'className='hover:border underline'>
            About 
          </Link>
        </div>
    </nav>
  )
}

export default Navbar
