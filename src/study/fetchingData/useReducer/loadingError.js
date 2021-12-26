import axios from "axios";
import { useReducer, useEffect } from "react";

function App(){
    const initialState = {
        loading:true,
        error:'',
        post:{}
    }

    const reducer = (state, action) =>{
        switch(action.type){
            case 'FETCH_SUCCESS':
                return{
                    loading:false,
                    post: action.payload,
                    error:''
                }
            case 'FETCH_ERROR':
                return{
                    loading:false,
                    post:{},
                    error:'something wrong!!!'
                }
            default:
                return state
        }
    }
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState('')
    // const [post, setPost] = useState({})
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res =>{
            // setLoading(false)
            // setPost(res.data)
            // setError('')
            dispatch({type:'FETCH_SUCCESS', payload:res.data})
        })
        .catch(err =>{
            // setLoading(false)
            // setPost({})
            // setError('Something went wrong')
            dispatch({type:'FETCH_ERROR'})
        })
    },[])//component did mount : put [] to fetch data only once!
    return (
        <div>
            {state.loading ? 'loading...' : state.post.title}
            {state.error ? state.error : null}
            {/* {
                posts.map(post => <ul>
                    <li key={post.id}>{post.title}</li>
                </ul>)
            } */}
        </div>
    )
}

export default App