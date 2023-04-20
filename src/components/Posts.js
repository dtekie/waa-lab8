import React from 'react'
import Post from './Post'

function Posts({posts, onPostSelect}) {
       
  return (
    <div className="flex justify-between flex-wrap mb-6">
        { posts.map(post => <Post onPostSelect={onPostSelect} key={post.id} post={post} />) }
    </div>
  )
}

export default Posts