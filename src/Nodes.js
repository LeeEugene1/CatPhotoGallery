import Node from "./Node"
function Nodes({posts}){
    const directoryList = posts.map(post=><Node post={post}/>)
    return(
        <div className="Nodes" >
            {directoryList}
        </div>
    )
}

export default Nodes