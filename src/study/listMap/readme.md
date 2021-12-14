# axios 활용 예제

## postlist - Fetching data with useEffect Part 1
```javascript
import './App.css';
import React from 'react';
import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
          console.log(res)
          setPosts(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
  },[])
  const titleList = posts.map(post => <li key={post.id}>{post.title}</li>)
  return (
    <div>
        <ul>
          {titleList}
        </ul>
    </div>
  );
}

export default App;

```

## indivisual post by parsing post id
```javascript
import './App.css';
import React from 'react';
import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const idChange = (e)=>{
    setId(e.target.value)
  }
  useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res=>{
          console.log(res)
          setPost(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
  },[id])
  return (
    <div>
        <input type="text" value={id} onChange={idChange}/>
        <div>{post.title}</div>
    </div>
  );
}

export default App;

```