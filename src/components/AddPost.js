import React, { useState } from 'react'

function AddPost({ onAddPost }) {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        const body = { title, author, content }
        onAddPost(body)
        setAuthor(""); setTitle(""); setContent("");
    }
    return (
        <form className="mt-8 flex flex-col items-end">
            <input value={title} onChange={(e) => setTitle(e.target.value)} 
                placeholder="Title"
                className="block my-3 py-1.5 px-3 border border-cyan-800 rounded" />
            <input value={author} onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Author"
                className="block my-3 py-1.5 px-3 border border-cyan-800 rounded" />
            <input value={content} onChange={(e) => setContent(e.target.value)} 
                placeholder="Content"
                className="block my-3 py-1.5 px-3 border border-cyan-800 rounded" />
            <button onClick={(e) => onSubmit(e)} className="block my-3 py-1.5 px-3 bg-cyan-600 hover:bg-cyan-800 text-white font-medium rounded">Add Post</button>
        </form>
    )
}

export default AddPost