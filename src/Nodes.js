// import Breadcrumb from "./Breadcrumb"
import Node from "./Node"
function Nodes({posts}){
    // const fdfdfdf = 'dfdfd'
    const directoryList = posts.map(post=><Node key={post.id} post={post} alt={post.name}/>)
    return(
        <div className="Nodes" alt="dfdfdf">
            {directoryList}
        </div>
    )
}

export default Nodes