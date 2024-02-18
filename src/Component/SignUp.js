import React from 'react'
import Loginimg from './Image/Signup/dl.beatsnoop 1.png'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
       <div className='flex gap-x-[5rem] justify-center items-center'>
        <img width={"500rem"} src={Loginimg} alt=""/>

        <ddiv className='flex justify-center flex-col gap-5 w-[25rem]'>
          <div className='text-center'>
          <h1 className='text-[2rem] font-bold mb-8'>Create an account</h1>
            <p className='text-1.5rem font-bold'>Enter your details below</p>
          </div>

        <div className='flex flex-col gap-y-9'>
            <input type="text" className='border-b-2 border-black bg-transparent h-6 outline-none' placeholder="Name" />
            <input type="email" className='border-b-2 border-black bg-transparent h-6 outline-none' placeholder="Email or Phone Number" />
            <input type="password" className='border-b-2 border-black h-6 bg-transparent outline-none' placeholder="Password" />

            <div className='flex flex-col gap-8 '> 
                <button type="button" className='bg-orange-600  h-[3rem] text-white font-bold rounded-md '>Create Account</button>
                <div className='bg-transparent flex gap-3 justify-center items-center border border-black h-[3rem] text-black font-bold rounded-md'>
                    <FcGoogle/>
                <button type="button" className=' '>Sign up with Google</button>
                </div>
                <div className='flex mt-5 justify-center items-center gap-4 text-black'>
              <p>Already have account?</p>
              <Link to={"/Login"}> <p className='font-bold border-b-[2px] border-black cursor-pointer'>Log in</p></Link>
            </div>
               
            </div>

        </div>
        </ddiv>

    </div>
    </div>
  )
}

export default SignUp
