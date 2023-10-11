import React, { useState } from 'react'
import Post from './Post'

export default function Posts(props) {
  let text_ref = React.createRef()
  let add_ref = React.createRef()

  let [posts_data, setPosts] = useState(props.posts)
  let [text, setText] = useState('')
  let [postTitle, setTitle] = useState('')
  let [url, setUrl] = useState('')


  function addPost() {
    let newPost = {
      id: Date.now(),
      postTitle,
      text,
      url,
      likes: 0
    }
    setPosts([...posts_data, newPost])
    setText('')
    setTitle('')
    setUrl('')
  }

  function deletePost(post_id){
    setPosts(posts_data.filter(p => {
      return p.id != post_id
    }))
  }


  let posts = posts_data.map(p => {
    return <Post id={p.id} title={p.postTitle} text={p.text} likes={p.likes} deletePost={deletePost} />
  })



  return (
    <div>

      <div className='form'>
        <input type='text' ref={text_ref}></input>
        <button onClick={addPost} ref={add_ref}>Add</button>
      </div>

      {posts}
    </div>
  )
}
