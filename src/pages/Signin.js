import React from 'react'
import { darklogo } from '../assets/index'
import { NavLink } from 'react-router-dom'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

function Signin() {
  return (
    <div className="w-full">
        <div className="w-full bg-gray-100 pb-10">
            <form className="w-[350px] mx-auto flex flex-col items-center">
                <img className='w-32 mt-8 mb-10' src={darklogo} alt="Logo Img" />
                <div className="w-full border border-zinc-200 p-6">
                    <h2 className='font-titleFont text-3xl font-medium mb-4'>Sign in</h2>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-medium'>Email or mobile phone number</p>
                            <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type="email" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-medium'>Password</p>
                            <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type="password" />
                        </div>
                        <button onClick={(e)=>e.preventDefault()} className='text-center w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>
                            Continue
                        </button>
                    </div>
                    <p className='text-xs text-black leading-4 mt-4'>By Continuing, you agree to Amazon's 
                    <span className='text-blue-600'>Conditions of Use </span>
                    and <span className='text-blue-600'>Privace Notice.</span></p>
                    <p className='text-xs text-gray-600 mt-4 cursor-pointer group'><ArrowRightIcon />
                    <span className='text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1'>
                        Need help?
                    </span>
                    </p>
                </div>
                    <p className='w-full text-xs text-gray-600 mt-6 mb-6 flex items-center'>
                    <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                    <span className='text-center w-1/3'>New to Amazon?</span>
                    <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                    </p>
                <NavLink to="../Registration" onClick={(e)=>e.preventDefault()} className='text-center w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Create your Amazon account</NavLink>
            </form>
        </div>
        <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10'>
            <div className="flex items-center gap-6">
                <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
                    Conditions of Use
                </p>
                <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
                    Privacy Notice
                </p>
                <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
                    Privacy Notice
                </p>
            </div>
            <p className='text-xs text-gray-600'>© 1996-2023, amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
  )
}
export default Signin