import React, { useEffect, useState } from 'react'
import Posts from '../components/Posts'
import PostDetails from '../components/PostDetails';
import axios from 'axios';
import AddPost from '../components/AddPost';

function Dashboard() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);
  const [flag, setflag] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/posts").then(
      res => {
        setPosts(res.data)
      }).catch(
        err => {
          console.log(err)
        }
      )
  }, [flag])


  const onChangeHandler = (e) => {
    e.preventDefault();
    const updated = posts.map(post => {
      if (post.id === 1) {
        post = { ...post, title: name }
      }
      return post;
    })
    setPosts(updated);
    setName("");
  }

  const onDeleteHandler = (id) => {
    axios.delete("http://localhost:8080/api/v1/posts/${id}")
      .then(res => {
        const remainingPosts = posts.filter(post => post.id !== id)
        setPosts(remainingPosts);
        setSelectedPost(null);
      })
      .catch(err => console.log(err))
  }

  const onAddPost = (data) => {
    axios.post("http://localhost:8080/api/v1/posts", data)
      .then(res => setflag(!flag))
      .catch(err => console.log(err))
  }

  return (
    <div className="max-w-4xl mx-auto py-16">
      {!posts.length && <h1>No posts...</h1>}
      {posts.length > 0 && (
        <>
          <div className="border px-2 py-4">
            <Posts posts={posts} onPostSelect={(id) => setSelectedPost(id)} />
            <form>
              <input value={name} onChange={(e) => setName(e.target.value)} className="py-1.5 px-3 border border-cyan-800 rounded" />
              <button onClick={(e) => onChangeHandler(e)} className="ml-4 py-1.5 px-3 bg-cyan-800 text-white font-medium rounded">Change name</button>
            </form>
          </div>
          {selectedPost && <PostDetails onDelete={onDeleteHandler} postId={selectedPost} />}
        </>
      )}
      <AddPost onAddPost={onAddPost} />
    </div>
  )
}

export default Dashboard