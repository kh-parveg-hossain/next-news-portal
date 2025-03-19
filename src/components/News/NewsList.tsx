"use client"
import { fatchNews } from '@/lib/fatchNews'
import { INews } from '@/types/NewsTypes'
import React, { useEffect, useState } from 'react'
import NewsCard from '../shared/NewsCard'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'

const NewsList = () => {
    const [News,setNews] = useState<INews[]>([])
    const [search , setSearch] = useState<string>("")
    const [category , setCategory] = useState<string>("")

    useEffect(() => {
                const getNews = async () => {
                  const news = await fatchNews(category,search)
                  setNews(news)
                }
                getNews()
    },[category,search])
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between md:items-center gap-4 md:gap-12 mb-5'>
         <SearchBar onSearch={setSearch}/>
         <CategoryFilter onCategory = {setCategory}/>
      </div>
{/* 
      News card */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between'>
        {
            News.slice(0,6).map((item) => (
                <NewsCard key={item?._id} item={item}/>
            ))
        }
      </div>
    </div>
  )
}

export default NewsList