import React from 'react'
import { FaHeadset, FaLock, FaMoneyCheck, FaShippingFast, FaTag } from 'react-icons/fa'

const InfoSection = () => {
  
    const inforItems = [
        {
            icon:<FaShippingFast className='text-3xl text-green-600'/>,
            title:'Fast Delivery',
            description:'Orders are deliverd on time',
        },
        {
            icon: <FaHeadset className='text-3xl text-green-600 '/>,
            title:'24/7 support',
            description:'Always available',

        },
        {
            icon: <FaMoneyCheck className='text-3xl text-green-600 '/>,
            title:'Sale Returns',
            description:'24HRS Money refunds incase of dissatisfaction',

        },
        {
            icon: <FaTag className='text-3xl text-green-600'/>,
            title:'Discount',
            description:'Get fair discounts',
        },
        {
            icon: <FaLock className='text-3xl text-green-600' />,
            title:'Secure Payments',
            description:'We trust your wallet',
        }
    ];
    return (
    <div className='bg-gray-200 pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {inforItems.map((item, index) =>(
                <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow md
                transform transition-transform duration-400 hover:scale-105 cursor pointer'>
                    {item.icon}
                    <h2 className='mt-4 text-xl font-semi-bold'>{item.title}</h2>
                    <p className='mt-2 text-gray-500'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection
