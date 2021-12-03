import directory from './assets/directory.png'

function Node({post}){
    return(
        <div className="Node">
            <img src={directory} alt="폴더"/>
            <div key={post.id}>{post.name}</div>
        </div>
    )
}

export default Node