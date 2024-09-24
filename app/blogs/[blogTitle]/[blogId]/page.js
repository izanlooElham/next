import BlogDetails from '@/components/module/BlogDetails'
import React from 'react'

function BlogDetail({params}) {
    const {blogId}=params
  return (
    <BlogDetails blogId={blogId}/>
  )
}

export default BlogDetail