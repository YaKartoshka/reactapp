import React, { useEffect, useState } from 'react'

export default function Post(props) {
  let like_ref = React.createRef()
  let [likes, setLikes] = useState(props.likes)
  let [btn_state, setBtnState] = useState(false)
  let [count, setCount] = useState(0)
  
  function like(){
    if(btn_state == false){
      setLikes(likes + 1)
      like_ref.current.style.backgroundColor = 'aqua'
      setBtnState(true)
    } else {
      setLikes(likes - 1)
      like_ref.current.style.backgroundColor = 'white'
      setBtnState(false)
    }
  }

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    }, 1000)
  })


  return (
    <div>
      <br /><br /><br />
      <h1> {props.title} </h1>
      <p> {props.text} </p>
      <h4>Likes: {likes}</h4>
      Count: {count}
      <button type='button' ref={like_ref} onClick={like} className='like_btn'>Like</button>
      <button type='button' onClick={()=> {  props.deletePost(props.id)  }}  className='delete_btn'>Delete</button>
    </div>
  )
}
