import React from 'react'
import Posts from './Posts'

export default function Main(props) {


  return (
    <div>
      <Posts posts={props.data.posts}/>
    </div>
  )
}
