import { useState } from 'react'
import useFetch from './useFetch'

function App() {

    const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts')
    if(loading) return <p style={{display:'flex',placeContent:'center',width:'100vw',height:'100vh',alignItems:'center'}}>Loading...</p>
    if(error) return <p style={{display:'flex',placeContent:'center',width:'100vw',height:'100vh',alignItems:'center'}}>Error: while fetching data</p>
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {data && data.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default App
