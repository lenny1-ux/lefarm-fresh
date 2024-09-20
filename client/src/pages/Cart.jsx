import React from 'react';
import { useSelector } from 'react-redux';
import Cartempty from '../assets/images/cartcon.png'
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  // Accessing cart state
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? 
      <div>
        <h3 className='text-2xl font-semibold mb-4'>My Shopping Cart</h3>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
            <div className='md:w-2/3'>
                <div className='flex justify-between border-b items-center mb-4 text-xs foont-bold'>
                    <p>Products</p>
                    <div className='flex space-x-8'>
                        <p>PRICE</p>
                        <p>QUANTITY</p>
                        <p>SUBTOTAL</p>
                        <p>REMOVE</p>
                    </div>
                </div>
                <div>
                    {cart.products.map((product) => (
                        <div
                            key={product.id}
                            className='flex items-center justify-between p-3 border-b'
                            >
                            <div className='md:flex items-center space-x-4'>
                                <img src={product.image} 
                                    alt={product.name}
                                    className='w-16 h-16 object-contain rounded'
                                />
                                <div className='flex-1 ml-4'>
                                    <h3 className='text-lg font-semibold'>{product.name}</h3>
                                </div>
                            </div>
                            <div className='flex space-x-12 items-center'>
                                <p>ksh{product.price}</p>
                                <div className='flex items-center justify-center border'>
                                    <button className="text-xl font-bold px-1.5 border-r">
                                        -
                                        </button>
                                        <p className='text-xl px-2'>{product.quantity}</p>
                                        <button className='text-xl px-1 border'>
                                        +
                                        </button>

                                </div>
                                <p>ksh{(product.quantity * product.price).toFixed(2)}</p>
                                <button className='text-red-400 hover:text-red-700'>
                                    <FaTrash></FaTrash>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>TOTAL</h3>
                    <div>
                        <span>Total Items</span>
                        <span>{cart.totalQuantity}</span>
                    </div>
                    <div>
                        <span>Total Price</span>
                        <span>{cart.totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    : <div className='flex justify-center'>
        <img src={Cartempty} alt="" className='h-96'/>
         </div>}
    </div>
  );
};

export default Cart;

