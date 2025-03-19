import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import banner from '@/assets/banner.jpg'

const Banner = () => {
  return (
    <div className='dark:text-gray-900'>
     <div className='px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-centers gap-8'>
     <div className='rounded-md'>
        {/* Image */}
     <Image src={banner} alt='banner'className='rounded-md'/>
     </div>
     <div className='space-y-4 flex flex-col '>
        {/* contact */}
        <h4 className='text-2xl font-medium text-gray-600'>Tecnology</h4>
        <h2 className='text-4xl font-bold text-gray-600 mb-2'> Welcome to Daily News</h2>
        <p className=' dark:text-blue-500'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima numquam, reiciendis consequatur repudiandae fugiat eum, recusandae est aut neque consectetur delectus aperiam facere?
        </p><br/>
        <p className='dark:text-blue-500'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima numquam, reiciendis consequatur repudiandae fugiat eum, recusandae est aut neque consectetur delectus aperiam facere?
        </p>
        {/* <button className='bg-green-500 text-white px-4 py-2 mt-4 cursor-pointer w-full'>Read More</button> */}
        <Button variant="default" className='w-full mt-4 cursor-pointer '>Read More</Button>
     </div>
    
    </div>  
    </div>
  )
}

export default Banner