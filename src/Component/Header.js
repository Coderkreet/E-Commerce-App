import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
        <div className='Layout  text-[0.7rem] bg-black text-white px-10'>
            
  
      <div className=''>
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-bold underline cursor-pointer pl-3'>ShopNow</span> </p>
   
      </div>
      <div>
      <select id="language" name="language" className='bg-black'>
        <option value="en">English</option>
        <option value="en">हिंदी</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ja">Japanese</option>
    </select>
      </div>
      </div>
    </div>
  )
}

export default Header
