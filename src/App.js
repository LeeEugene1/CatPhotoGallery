import './App.css';
import React from 'react';
import Breadcrumb from './Breadcrumb';
import { useState, useEffect } from "react"
import axios from "axios"

import Nodes from './Nodes';
function App() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
      axios.get('https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev')
      .then(res=>{
          console.log(res)
          setPosts(res.data)
      })
      .catch(err=>{
          console.log(err)
      })
  },[])
  // const titleList = posts.map(title => <Breadcrumb title={title}/>)
  return (
    <div>
        <h1>고양이 사진첩</h1>
        <main className="App">
          <Breadcrumb/>
          {/* {titleList} */}
          <Nodes posts={posts}/>
        </main>
    </div>
  );
}

export default App;
