import React from 'react'
import { emptyCart } from '../assets/index'

function Prodcast() {
  return (
    <div className="w-full bg-gray-100">
        <div className='flex justify-center items-center gap-4 py-10'>
        <div>
            <img className='w-80 rounded-lg p-4 mx-auto' src={ emptyCart } alt="Img" />
        </div>
        <div className='w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg'>
            <h1 className='font-titleFont text-xl font-bold'>Your Cart feels lonely.</h1>
            <p className='text-sm text-center'> Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy.</p>
            <button className='mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg'>Continue Shopping</button>
        </div>
        </div>
    </div>
  )
}

export default Prodcast