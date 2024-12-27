import { getBlogPosts } from '@/app/blog/utils'
import React from 'react'

const latestPosts = () => {
    let latestPosts = getBlogPosts();
  return (
    <>
    <h1>Recently Published</h1>
    </>
  )
}

export default latestPosts