function Person({person}){
    return(      
        <div>
            <p>with props</p>
            <h1>i am {person.name} and i am {person.age} and i can do {person.skill}</h1>
        </div>
    )
}

export default Person