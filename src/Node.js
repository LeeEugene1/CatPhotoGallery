import directory from './assets/directory.png'
import file from './assets/file.png'


function Node({post, alt}){
    // const test = (e) =>{
    //     // alert(e.target)
    //     console.log(e.target)
    // }
    const iconPath = post.type === 'FILE' ? file : directory
    return(
        <div className="Node">
            <img src={iconPath} alt={alt}/>
            <div>{post.name}</div>
        </div>
    )
}

export default Node