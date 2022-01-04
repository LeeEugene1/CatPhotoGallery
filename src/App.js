import './App.css';
import Breadcrumb from './Breadcrumb';
import { useState, useEffect } from "react"
import axios from "axios"
import loadingImg from './assets/nyan-cat.gif'

import Nodes from './Nodes';
function App() {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  const [catName, setCatName] = useState('노란고양이')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
      axios.get(`https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/${id}`)
      .then(res=>{
          console.log(res.data)
          setPosts(res.data)
          setLoading(false)
          setError('')
      })
      .catch(err=>{
          console.log(err)
          setPosts([])
          setLoading(false)
          setError('something wrong by fetching data')         
      })
  },[id])
  // const titleList = posts.map(title => <Breadcrumb title={title}/>)
  return (
    <div>
        <h1>고양이 사진첩{error ? error : null}</h1>
        <input type="text" value={id} onChange={(e)=>{
          setId(e.target.value)
          setCatName()
        }}/>
        <div>{posts.name}</div>
        {loading ? <img src={loadingImg} alt="loading"></img> : 
            <main className="App">
              <Breadcrumb catName={catName}/>
              {/* {titleList} */}
              <Nodes posts={posts}/>
            </main>
        }
    </div>
  );
}

export default App;
