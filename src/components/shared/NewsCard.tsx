import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { newscardItems } from '@/types/NewsTypes'
const NewsCard = ({item}:newscardItems) => {
  return (
   <div className="border p-4 rounded-md shadow-md flex flex-col h-full">
  <Link href={`/news/${item?._id}`}>
    <Image
      src={item?.imageUrl}
      width={500}
      height={500}
      alt="banner"
      loading='lazy'
      className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"
    />
  </Link>
  <div className="flex flex-col flex-grow">
    <h2 className="text-2xl font-bold text-gray-600 my-3">{item?.title}</h2>
    <p className="mb-4 flex-grow">{item?.description}</p> 
    <Link href={`/news/${item?._id}`} className="mt-auto">
      <Button variant="default" className="w-full cursor-pointer">
        Read More
      </Button>
    </Link>
  </div>
</div>

  )
}

export default NewsCard