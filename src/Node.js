import directory from './assets/directory.png'

function Node({post, alt}){
    return(
        <div className="Node">
            <img src={directory} alt={alt}/>
            <div>{post.name}</div>
        </div>
    )
}

export default Node