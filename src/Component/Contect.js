import React from 'react'
import {GrMail} from 'react-icons/gr'
import {BiSolidPhoneCall} from 'react-icons/bi'
const Contect = () => {
  return (
    <div>
      <div className='flex gap-x-3 mt-4 font-bold'>
        <p>Home</p>
        <div>/</div>
        <p>Contect</p>
      </div>

      <div className='flex justify-center items-center gap-20 '>
        
    <div className='flex flex-col'>
      
  
    <div className='mt-16 mb-7 flex flex-col gap-y-4'>
    <div className='flex gap-4  items-center text-[#DB4444]'>
      <BiSolidPhoneCall/>
      <h1 class="text-[1rem] font-bold">Contact TO Us</h1>
    </div>
      <p>We are available 24/7, 7 days a week.</p>

      <p>Phone: +8801611112222</p>
    </div>

    <div className='w-[15rem] h-[1px] bg-black'> </div>
    <div className='mt-16 flex flex-col gap-y-4'>
      <div className='flex gap-4 items-center text-[#DB4444]'>
      <GrMail/>
      <h1 class="text-[1rem] font-bold">Write To US</h1>
      </div>
    <p>Fill out our form and we will contact you within 24 hours.</p>
  <p>Emails: customer@Cartnevula.com</p>
  <p>Emails: support@Cartnevula.com</p>
    </div>

    </div>
    

<form className='flex flex-col gap-y-4'>
  <div className='flex gap-x-3'>
  <input className='h-[2.2rem] rounded-md  border hover:border-[#DB4444] border-black'  type="text" name="" placeholder="Your Name *"/>
  <input className='h-[2.2rem]  rounded-md border hover:border-[#DB4444] border-black'  type="email" name="" placeholder='Your Email *'/>
  <input  className='h-[2.2rem] rounded-md  border hover:border-[#DB4444] border-black' type="number" name="" placeholder='Your Phone *'/>
  </div>
    <textarea className='border rounded-md hover:border-[#DB4444] border-black' rows="7" cols="70" placeholder='Your Messege'></textarea>
    <div className='flex items-baseline justify-end'> 
                <button type="button" className='bg-orange-600 w-[8rem] h-[3rem] text-white font-bold rounded-md '>Send Massage</button>
            </div>
</form>


    </div>

    </div>
  )
}

export default Contect
