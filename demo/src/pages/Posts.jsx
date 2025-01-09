import axios from "axios"
import { useState } from "react"



function Posts() {
  const [posts, setPosts] = useState([])
  const [singlePost, setSinglePost] = useState({})


  const getPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response.data)
      setPosts(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const getSinglePost = async (id) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      console.log(response.data)
      setSinglePost(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
<div className="flex flex-col">

      <button onClick={getPosts}>Get Posts</button>
      <button onClick={() => getSinglePost(1)}>Get Single Post</button>
</div>

{/* Display Single Post  */}
      <h1>
        Single Post
      </h1>
      <div className="mt-6 border bg-green-600">
        <h1 className="text-sm">{singlePost.id}</h1>
        <h2 className="text-4xl">{singlePost.title}</h2>
        <p>{singlePost.body}</p>
      </div>


      {/* Display Post  */}
      <h1>
        Posts
      </h1>
      {
        posts.map((singlePost) => (
          <div className="mt-6 border bg-green-100" key={singlePost.id}>
            <h1 className="text-sm">{singlePost.id}</h1>
            <h2 className="text-4xl">{singlePost.title}</h2>
            <p>{singlePost.body}</p>
          </div>
        ))

      }


      
    </div>
  )
}

export default Posts
