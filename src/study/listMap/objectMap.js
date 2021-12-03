import Person from "./Person"

function ObjectMap(){
    const people = [
        {
            id:1,
            name:'yujin',
            age:30,
            skill:'React'
        },{
            id:2,
            name:'yumin',
            age:27,
            skill:'Angular'
        },{
            id:3,
            name:'john',
            age:29,
            skill:'Java'
        },
    ]
    // const peopleList = people.map(person => <h1>i am {person.name} and i am {person.age} and i can do {person.skill}</h1>)
    const peopleList = people.map(person => <h1><Person person={person}/></h1>)
    return(
        <div>
            {peopleList}
        </div>
    )
}

export default ObjectMap