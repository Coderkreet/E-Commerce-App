import React, { useState } from 'react'
import { AiOutlineSearch ,AiOutlineShoppingCart, AiOutlineHeart} from "react-icons/ai";
import {Link} from 'react-router-dom'
const NavBar = () => {

const [icon , removeion] = useState(false);

function HandleIcon() {
  removeion(true);
}
function HandleIcon2() {
  removeion(false);
}


  return (

    <div>
      <nav className='flex justify-between mt-10 mb-10 px-10 items-center'>
        <div>
            <h1 className='NameWeb font-bold text-[1.5rem]'>Cartnevula</h1>
        </div>

        <div className='ml-10'>
            <ul  className='flex gap-[2.5rem]'>
        <Link to={"/"}><li onClick={HandleIcon2} className='cursor-pointer hover:underline' >Home</li></Link> 
        <Link to={"/About"}>  <li onClick={HandleIcon2} className='cursor-pointer hover:underline' >About</li></Link> 
        <Link to={"/products"}>  <li onClick={HandleIcon} className='cursor-pointer hover:underline' >products</li></Link> 
        <Link to={"/Contect"}> <li onClick={HandleIcon2} className='cursor-pointer hover:underline' >Contect</li></Link> 
        <Link to={"/SignUp"}>  <li onClick={HandleIcon} className='cursor-pointer hover:underline' >Sign Up</li></Link> 
            </ul>
        </div>

        <div className='flex gap-x-4 justify-center items-center'> 
            <div className='flex gap-x-2 justify-center items-center  bg-[#F5F5F5] '>
                <div className='flex  justify-center items-center gap-x-2'>
                <input type="text" className='text-[0.9rem] border rounded-md w-[12rem] h-[2rem] justify-center items-center' placeholder='What are you looking for?' name="Search"/>
                <AiOutlineSearch className='font-bold text-[1.4rem] cursor-pointer'/>
                </div>

            </div>
            <div className={`${icon ? 'hidden' : "flex gap-x-2 items-center"}`}>
             <AiOutlineHeart className='font-bold text-[1.4rem] cursor-pointer'/>
            <AiOutlineShoppingCart className='font-bold text-[1.4rem] cursor-pointer'/>
            </div>
            <div className={`${icon ? "flex gap-x-2 items-center" :"hidden" }`}>
                <div className='flex justify-center items-center gap-4 text-black'>
              <p>Already have account?</p>
              <Link to={"/Login"}> <p className='font-bold upperbuttton border-b-[2px] border-black cursor-pointer'>Log in</p></Link>
            </div>
            </div>
          
      
        </div>

      </nav>
   
    </div>
  )
}

export default NavBar
