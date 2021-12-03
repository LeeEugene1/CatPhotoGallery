// import directory from './assets/directory.png'

function Node({person}){
    
    // const fruit = ['apple', 'mango', 'kiwi', 'banana']
    // let strURL = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev'
    // const init = {
    //   method: 'GET',
    // }
    // fetch(strURL, init)
    return(
        
        <div className="Node">
            <h1>{person.name}</h1>

            {/* <img src={directory}/>
            <div>2021/04</div> */}
            {/* <h1>{fruit[0]}</h1>
            <h1>{fruit[1]}</h1>
            <h1>{fruit[2]}</h1> */}
            {/* {
                fruit.map(each => 
                    <h1>{each}</h1>)
            } */}
        </div>
    )
}

export default Node