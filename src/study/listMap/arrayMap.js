// import directory from './assets/directory.png'

function arrayMap(){
    const fruit = ['apple', 'mango', 'kiwi', 'banana']
    const fruitList = fruit.map(each => <h1>{each}</h1>)
    return(    
        <div>
            {/* {
                fruit.map(each => 
                    <h1>{each}</h1>)
            } */}
            {fruitList}
        </div>
    )
}

export default arrayMap