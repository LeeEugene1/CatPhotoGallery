import axios from "axios";
import { useState, useEffect } from "react";

function App(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res =>{
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(err =>{
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        })
    },[])//component did mount : put [] to fetch data only once!
    return (
        <div>
            {loading ? 'loading...' : post.title}
            {error ? error : null}
            {/* {
                posts.map(post => <ul>
                    <li key={post.id}>{post.title}</li>
                </ul>)
            } */}
        </div>
    )
}

export default App