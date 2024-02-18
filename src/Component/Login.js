import React from 'react'
import SignUpimg from './Image/Signup/dl.beatsnoop 1.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
    <div className='flex gap-x-[5rem] justify-center items-center'>
        <img width={"500rem"} src={SignUpimg} alt=""/>

        <div className='flex flex-col gap-5 w-[25rem]'>
          <div className='text-center'>
          <h1 className='text-[2rem] font-bold mb-8'>Log in to Cartnevula</h1>
            <p className='text-1.5rem font-bold'>Enter your details below</p>
          </div>

        <div className='flex flex-col gap-y-9'>
            <input type="text" className='border-b-2 border-black bg-transparent h-6 outline-none' placeholder="Email or Phone Number" />
            <input type="password" className='border-b-2 border-black h-6 bg-transparent outline-none' placeholder="Password" />

            <div className='flex items-baseline justify-between'> 
                <button type="button" className='bg-orange-600 w-[8rem] h-[3rem] text-white font-bold rounded-md '>Log In</button>
                <p className='text-orange-400'> Forget Password?</p>
            </div>

        </div>
        <div className='flex mt-5 justify-center items-center gap-4 text-black'>
              <p>Create your account</p>
              <Link to={"/SignUp"}> <p className='font-bold border-b-[2px] border-black cursor-pointer'>SignUp</p></Link>
            </div>

        </div>

    </div>
    </div>
  )
}

export default SignUp
