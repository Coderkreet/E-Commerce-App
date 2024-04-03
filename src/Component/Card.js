import React from 'react'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import useFetch from './useFetch';

import ProductRating from './ProductRating';

const Card = () => {
  const { data, loading, error } = useFetch('https://dummyjson.com/products');
  const { data1, loading1, error1 , data2} = useFetch('https://fakestoreapi.com/products');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;
  if (!data2) return null;

  const convertToRupees = (dollars) => {
    const rupees = dollars * 74.35; // Assuming conversion rate is 1 USD = 74.35 INR
    return rupees.toFixed(2);
  };

  
  // if (loading1) return <div>Loading...</div>;
  // if (error1) return <div>Error: {error.message}</div>;
  // if (!data1) return null;
  // let datamap = data.products;

  return (
    <div className=' flex items-center justify-center w-[100%]'>
      <div className=' flex flex-wrap  justify-around gap-y-4 w-[80rem]'>
{data.map((dataItem) => (
 <div key={dataItem.id} className='flex flex-col bg-gray-100 rounded-md justify-between w-72 h-96 p-4 relative'>
 {/* Discount badge */}
 <div className='absolute left-2 top-2'>
   <p className='bg-red-500 text-white px-2 py-1 rounded-md'>{dataItem.discountPercentage}%</p>
 </div>

 {/* Favorite and View icons */}
 <div className='absolute right-2 top-2 flex flex-col text-xl'>
   <AiOutlineHeart className='bg-white rounded-full mb-2' />
   <AiOutlineEye className='bg-white rounded-full' />
 </div>

 {/* Product image */}
 <div className='flex justify-center items-center h-48'>
   <img src={dataItem.thumbnail} className='h-full max-w-full' alt="" />
 </div>

 {/* Product details */}
 <div className='flex flex-col justify-between h-40'>
   {/* Product title */}
   <p className='text-sm overflow-ellipsis overflow-hidden'>{dataItem.title}</p>

   {/* Price */}
   <div className='flex items-center'>
     <p className='text-red-500 font-bold'>₹ {convertToRupees(dataItem.price)}</p>
     {/* <p className='text-gray-400'><del>$400</del></p> */}
   </div>

   {/* Product rating */}
   <div className='flex items-center'>
     <ProductRating rating={dataItem.rating} />
     <p className='text-gray-500 ml-1'>{dataItem.stock}</p>
   </div>
 </div>
</div>
     
     
     ))}

{data2.map((dataItem) => (
  <div key={dataItem.id} className='flex flex-col bg-gray-100 rounded-md justify-between w-72 h-96 p-4 relative'>
  {/* Discount badge */}
  <div className='absolute left-2 top-2'>
    {/* <p className='bg-red-500 text-white px-2 py-1 rounded-md'>{dataItem.discountPercentage}%</p> */}
  </div>

  {/* Favorite and View icons */}
  <div className='absolute right-2 top-2 flex flex-col text-xl'>
    <AiOutlineHeart className='bg-white rounded-full mb-2' />
    <AiOutlineEye className='bg-white rounded-full' />
  </div>

  {/* Product image */}
  <div className='flex justify-center items-center h-48'>
    <img src={dataItem.image} className='h-full max-w-full' alt="" />
  </div>

  {/* Product details */}
  <div className='flex flex-col justify-between h-40'>
    {/* Product title */}
    <p className='text-sm overflow-ellipsis overflow-hidden'>{dataItem.title}</p>

    {/* Price */}
    <div className='flex items-center'>
    <p className='text-[#DB4444] overflow-hidden'> ₹ {convertToRupees(dataItem.price)} </p>
      {/* <p className='text-gray-400'><del>$400</del></p> */}
    </div>

    {/* Product rating */}
    <div className='flex items-center'>
      <ProductRating rating={dataItem.rating.rate} />
      <p className='text-gray-500 ml-1'>{dataItem.rating.count}</p>
    </div>
  </div>
</div>
     
     
     ))}

     </div>

    </div>
  )
}

export default Card
