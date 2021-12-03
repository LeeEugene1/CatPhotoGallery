import axios from "axios";
import { useState, useEffect } from "react";

function DataFetching(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            // console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])//component did mount : put [] to fetch data only once!
    return (
        <div>
            {
                posts.map(post => <ul>
                    <li key={post.id}>{post.title}</li>
                </ul>)
            }
        </div>
    )
}

export default DataFetching