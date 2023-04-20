import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Comments from './Comments';

function PostDetails({ postId, onDelete }) {
    const BASE_URL = "http://localhost:8080/api/v1";
    const [post, setPost] = useState(null)
    useEffect(() => {
      axios.get(`${BASE_URL}/posts/${postId}`)
        .then(res => setPost(res.data))
        .catch(err => console.log(err))
    }, [postId])
    
    if (!post) return null;
    return (
    <div className="flex flex-col border w-full px-6 py-8 mt-4">
        <p className="text-xl font-medium self-center uppercase mb-3">{ post.title}</p>
        <p className="mb-4 text-lg self-center">{ post.author}</p>
        <p className="mb-4">{ post.content }</p>
        <Comments comments={post.comments} />
        <div className="flex self-center text-lg">
            <button className="mr-3 text-cyan-600">Edit</button>
            <button onClick={() => onDelete(post.id)} className="rounded-md px-2 py-1 text-red-600 hover:bg-red-100">Delete</button>
        </div>
    </div>
    )

}

export default PostDetails