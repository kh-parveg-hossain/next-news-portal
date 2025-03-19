import NewsList from '@/components/News/NewsList'
import React from 'react'

const News = () => {
  return (
    <div className='py-12'> 
      <h2 className="text-4xl font-bold  mb-8">Latest News</h2>
      <NewsList/>
    </div>
  )
}

export default News