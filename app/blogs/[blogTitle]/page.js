import BlogsPage from '@/components/templates/BlogsPage';
import React from 'react'

function Blogs({params}) {
    const search=searchParams?.search || ''
    const {blogTitle}=params
    const decodedTitle = decodeURIComponent(blogTitle);
  return (
    <BlogsPage search={search} title={decodedTitle}/>
  )
}

export default Blogs