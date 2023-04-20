import React from 'react'

function Post({post, onPostSelect}) {
  return (
    <div onClick={() => onPostSelect(post.id)} className="flex flex-col m-3 bg-cyan-600 text-white text-lg px-10 py-8 rounded-md shadow-md">
      <p><span className="font-light">ID:</span> {post.id}</p>
      <p><span className="font-light">Title:</span> {post.title}</p>
      <p><span className="font-light">Author:</span> {post.author}</p>
    </div>
  )
}

export default Post