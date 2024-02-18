import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import GooglePlay from "./Image/FooterImg/GooglePlay.png";
import Qrcode from "./Image/FooterImg/Qrcode 1.png";
import appstore from "./Image/FooterImg/download-appstore.png";

import {GrFacebookOption} from 'react-icons/gr'
import {CiTwitter} from 'react-icons/ci'
import {BiLogoInstagram} from 'react-icons/bi'
import {FiLinkedin} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='text-[0.4rem] gap-3'>
      
<div className='flex mt-20 pt-10 justify-center  md:gap-[5rem]  bg-black text-white '>
    <div className='flex flex-col gap-y-5' >
        <p className=' text-[0.8rem] md:text-[1.2rem] font-bold cursor-pointer'>Cartnevula</p>
        <p className='cursor-pointer'>Subscribe</p>
        <p className='cursor-pointer'>Get 10% off your first order</p>
    <div className='flex px-2  items-center gap-[1rem] border-[1px] border-white w-[125px]'>
        
        <input className='text-[0.7rem]  text-white bg-black  h-[1.5rem]' type="text" name="" placeholder='Enter your email' />
        <AiOutlineSend className='text-[2rem] cursor-pointer'/>
    </div>
    </div>


    <div className='flex flex-col gap-y-5' >
    <p className=' text-[0.8rem] md:text-[1.2rem] font-bold cursor-pointer'>Support</p>
    <p className='cursor-pointer'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
    <p className='cursor-pointer'>Cartnevula@gmail.com</p>
    <p className='cursor-pointer'>+88015-88888-9999</p>
</div>

<div className='flex flex-col gap-y-5' >
    <p className=' text-[0.8rem] md:text-[1.2rem] font-bold cursor-pointer'>Account</p>
    <p className='cursor-pointer'>My Account</p>
    <p className='cursor-pointer'>Login / Register</p>
    <p className='cursor-pointer'>Cart</p>
    <p className='cursor-pointer'>Wishlist</p>
    <p className='cursor-pointer'>Shop</p>
</div>
<div className='flex flex-col gap-y-5' >
    <p className=' text-[0.8rem] md:text-[1.2rem] font-bold cursor-pointer'>Quick Link</p>
    <p className='cursor-pointer'>Privacy Policy</p>
    <p className='cursor-pointer'>Terms Of Use</p>
    <p className='cursor-pointer'>FAQ</p>
    <p className='cursor-pointer'>Contact</p>
</div>


<div className='flex flex-col gap-y-5' >
<p className=' text-[0.8rem] md:text-[1.2rem] font-bold cursor-pointer'>Download App</p>
<p className='text-[0.8rem]'>Save $3 with App New User Only</p>
<div className='flex gap-x-3'>

 <img src={Qrcode} alt=""/>

<div className='flex flex-col gap-x-3'>
    <img src={GooglePlay} alt=""/>
    <img src={appstore} alt=""/>
</div>
</div>

<div className='flex text-[1.5rem] gap-7'>
    <GrFacebookOption/>
    <CiTwitter/>
    <BiLogoInstagram/>
    <FiLinkedin/>


</div>

</div>
</div>
    </div>
  )
}

export default Footer
